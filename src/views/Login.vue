<!-- 登录页 -->
<template>
  <div class="wms-container login">
    <!-- <header>WMS仓储管理系统</header> -->
    <header>
      <img
        src="@/assets/images/login_logo.png"
        alt="WMS仓储管理系统"
        class="login-logo"
      />
    </header>
    <main>
      <div v-if="!showResetPassword" class="login-wrapper">
        <div class="login-wrapper-header">用户登录</div>
        <div class="login-wrapper-body">
          <el-form ref="formElement" :model="form" :rules="rules">
            <el-form-item prop="username">
              <el-input v-model="form.username" placeholder="用户名">
                <template #prefix>
                  <jzt-global-icon class="el-input__icon">
                    <i-ep-user />
                  </jzt-global-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="form.password"
                placeholder="密码"
                type="password"
                show-password
              >
                <template #prefix>
                  <jzt-global-icon>
                    <i-ep-unlock />
                  </jzt-global-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="imagecode">
              <el-input
                v-model="form.imagecode"
                placeholder="验证码"
                @keyup.enter.stop="handleLogin"
              >
                <template #prefix>
                  <jzt-global-svg icon-class="icon-denglu-yanzhengma" />
                </template>
              </el-input>
              <img
                v-if="imagecodeUrl"
                class="validate-code-image"
                :src="imagecodeUrl"
                @click="refreshImageCode"
              />
            </el-form-item>
          </el-form>
        </div>
        <div class="login-wrapper-toolbar">
          <el-checkbox v-model="recordPassword">记住密码</el-checkbox>
          <span class="resetPassword" @click="resetPassword">忘记密码？</span>
        </div>
        <div class="login-wrapper-button">
          <el-button type="primary" :loading="loginLoading" @click="handleLogin"
            >登 录</el-button
          >
        </div>
      </div>
      <div v-else class="password-wrapper">
        <div class="password-wrapper-header">忘记密码</div>
        <div class="password-wrapper-body">
          <el-form
            ref="resetPasswordElement"
            :model="resetPasswordForm"
            :rules="rules"
          >
            <el-form-item prop="username">
              <el-input
                v-model="resetPasswordForm.username"
                placeholder="用户名"
              >
                <template #prefix>
                  <jzt-global-icon class="el-input__icon">
                    <i-ep-user />
                  </jzt-global-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="imagecode">
              <el-input
                v-model="resetPasswordForm.imagecode"
                placeholder="短信验证码"
                class="send-code"
              >
                <template #prefix>
                  <jzt-global-svg icon-class="icon-denglu-yanzhengma" />
                </template>
                <template #append>发送验证码</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="resetPasswordForm.password"
                placeholder="重置密码"
                type="password"
                show-password
              >
                <template #prefix>
                  <jzt-global-icon>
                    <i-ep-unlock />
                  </jzt-global-icon>
                </template>
              </el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="password-wrapper-button">
          <el-button
            type="primary"
            plain
            class="jzt-plain-button back"
            @click="showResetPassword = false"
            >返回</el-button
          >
          <el-button type="primary" class="confirm">确认</el-button>
        </div>
      </div>
    </main>
    <footer>
      九州通医药集团物流有限公司 鄂ICP备17001640号-1 鄂公网安备 42011202001598号
    </footer>
  </div>
</template>

<script>
import { setCookie, getCookie } from '#/utils'
import { useVueApiEffect } from '#/effects/computedStore'
import {
  login,
  getUserInfo,
  getCurrentUserMenu,
  getStaffRoleByWarehouse
} from '@/api/user'
import { ref, watch, watchEffect } from 'vue'

const IMAGE_CODE_LENGTH = 4

export default {
  name: 'LoginPage',
  setup(props, context) {
    const { proxy, route, router, store } = useVueApiEffect()

    const formElement = ref(null)
    const imagecodeUrl = ref('')
    const redirect = ref('')
    const recordPassword = ref(false)
    const str = getCookie('recordPassword')
    let recordUser = {}
    if (str) {
      recordUser = JSON.parse(str)
      if (recordUser.password) {
        recordPassword.value = true
      } else {
        recordPassword.value = false
      }
    } else {
      recordPassword.value = false
    }
    const form = ref({
      username: recordUser.username || '',
      password: recordUser.password || '',
      imagecode: '',
      random: ''
    })
    const resetPasswordElement = ref(null)
    const showResetPassword = ref(false)
    const resetPasswordForm = ref({
      username: recordUser.username || '',
      imagecode: '',
      password: ''
    })
    const loginLoading = ref(false)

    // 校验
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    const validateImagecode = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入验证码'))
      } else if (value.length !== 4) {
        callback(new Error('验证码长度为4位'))
      } else {
        callback()
      }
    }
    const rules = {
      username: [
        { required: true, trigger: 'blur', validator: validateUsername }
      ],
      password: [
        { required: true, trigger: 'blur', validator: validatePassword }
      ],
      imagecode: [
        { required: true, trigger: 'blur', validator: validateImagecode }
      ]
    }

    // 刷新验证码
    const refreshImageCode = () => {
      form.value.imagecode = ''
      form.value.random = proxy.$utils.randomLenNum(IMAGE_CODE_LENGTH, true)
      imagecodeUrl.value = `${process.env.VUE_APP_BASE_API}/admin/code/${form.value.random}`
    }
    refreshImageCode()

    // 设置租户
    const userInfo = ref({})
    const setTenants = user => {
      let arr = []
      if (user.tenantList && user.tenantList.length > 0) {
        arr = user.tenantList.map(item => {
          return {
            value_data: item.tenant_id,
            value_desc: item.tenant_name
          }
        })
      } else {
        const ids = user.tenant_id ? user.tenant_id.split(',') : []
        const names = user.tenant_id ? user.tenant_name.split(',') : []
        ids.forEach((item, index) => {
          arr.push({
            value_data: item,
            value_desc: names[index]
          })
        })
      }
      // 设置初始默认值
      userInfo.value = Object.assign(userInfo.value, {
        select_tenant_id: arr.length > 0 ? arr[0].value_data : '',
        select_tenant_name: arr.length > 0 ? arr[0].value_desc : ''
      })
      store.commit('setTenants', arr)
    }

    // 设置仓库
    const setWarehouses = user => {
      const arr = []
      let obj = user
      if (user.tenantList && user.tenantList.length > 0) {
        const filterArr = user.tenantList.filter(
          item => item.tenant_id === userInfo.value.select_tenant_id
        )
        if (filterArr.length > 0) {
          obj = filterArr[0]
        }
      }
      const ids = obj.warehouse_id ? obj.warehouse_id.split(',') : []
      const nos =
        obj.warehouse_id && obj.warehouse_no ? obj.warehouse_no.split(',') : []
      const names =
        obj.warehouse_id && obj.warehouse_name
          ? obj.warehouse_name.split(',')
          : []
      const shortname =
        obj.warehouse_id && obj.warehouse_shortname
          ? obj.warehouse_shortname.split(',')
          : []
      ids.forEach((item, index) => {
        arr.push({
          value_data: item,
          value_desc: names[index] || '',
          no: nos[index] || '',
          short_name: shortname[index] || ''
        })
      })
      // 设置初始默认值
      userInfo.value = Object.assign(userInfo.value, {
        select_warehouse_id: arr.length > 0 ? arr[0].value_data : '',
        select_warehouse_name: arr.length > 0 ? arr[0].value_desc : '',
        select_warehouse_no: arr.length > 0 ? arr[0].no : '',
        select_warehouse_shortname: arr.length > 0 ? arr[0].short_name : ''
      })
      store.commit('setWarehouses', arr)
    }

    // 获取用户信息及菜单信息
    const getSystemInfo = async () => {
      let userData = {}
      try {
        userData = await getUserInfo()
        debugger
      } catch (e) {
        proxy.$utils.clearTokenCookie()
        proxy.$utils.clearUserCookie()
        // 关闭loading状态
        setTimeout(() => {
          loginLoading.value = false
        })
        // end
      }
      const data = userData.data
      if (data.length === 0) {
        proxy.$message.error('当前登录用户信息未查到，请确认是否分配角色')
        proxy.$utils.clearTokenCookie()
        proxy.$utils.clearUserCookie()
        return false
      }
      if (!data[0].tenant_id) {
        proxy.$message.error('当前登录用户未分配租户')
        proxy.$utils.clearTokenCookie()
        proxy.$utils.clearUserCookie()
        return false
      }
      if (
        data[0].user_type === 'normal' &&
        (!data[0].tenantList ||
          data[0].tenantList.length === 0 ||
          (data[0].tenantList.length > 0 &&
            !data[0].tenantList[0].warehouse_id))
      ) {
        proxy.$message.error('当前登录用户未分配仓库，请联系管理员')
        proxy.$utils.clearTokenCookie()
        proxy.$utils.clearUserCookie()
        return false
      }
      if (
        data[0].user_type === 'normal' &&
        (!data[0].tenantList ||
          data[0].tenantList.length === 0 ||
          (data[0].tenantList.length > 0 && !data[0].tenantList[0].role_id))
      ) {
        proxy.$message.error('当前登录用户未分配角色，请联系管理员')
        proxy.$utils.clearTokenCookie()
        proxy.$utils.clearUserCookie()
        return false
      }
      userInfo.value = data[0]
      setTenants(data[0])
      setWarehouses(data[0])
      let roleData = {}
      try {
        roleData = await getStaffRoleByWarehouse(userInfo.value)
      } catch (e) {
        proxy.$utils.clearTokenCookie()
        proxy.$utils.clearUserCookie()
        // 关闭loading状态
        setTimeout(() => {
          loginLoading.value = false
        })
        // end
      }
      if (!roleData.data || roleData.data.length === 0) {
        proxy.$message.error(
          `当前默认仓库【${userInfo.value.select_warehouse_shortname}】没有分配角色，请进行角色分配或切换仓库操作`
        )
      } else {
        userInfo.value = Object.assign(userInfo.value, {
          select_role_id: roleData.data[0].role_id,
          select_role_no: roleData.data[0].role_no,
          select_role_name: roleData.data[0].role_name,
          select_owner_id: roleData.data[0].owner_id,
          select_owner_no: roleData.data[0].owner_no,
          select_owner_name: roleData.data[0].owner_name,
          select_jobs: roleData.data[0].jobs,
          select_sex: roleData.data[0].sex,
          select_staff_id: roleData.data[0]?.staff_id || '',
          select_staff_name: roleData.data[0]?.staff_name || '',
          select_staff_no: roleData.data[0]?.staff_no || ''
        })
      }
      let menuData = {}
      try {
        menuData = await getCurrentUserMenu(userInfo.value.select_warehouse_id)
      } catch (e) {
        proxy.$utils.clearTokenCookie()
        proxy.$utils.clearUserCookie()
        // 关闭loading状态
        setTimeout(() => {
          loginLoading.value = false
        })
        // end
      }
      const arr = menuData.data.map(item => {
        if (item.menu_config && typeof item.menu_config === 'string') {
          try {
            item.menu_config = JSON.parse(item.menu_config)
          } catch {
            item.menu_config = {}
          }
        }
        return item
      })
      store.commit('setUser', Object.assign(userInfo.value, { menuData: arr }))
      router.push({
        path: redirect.value || '/'
      })
      // 关闭loading状态
      setTimeout(() => {
        loginLoading.value = false
      })
      // end
    }

    // 登录
    const handleLogin = () => {
      formElement.value.validate(valid => {
        if (valid) {
          loginLoading.value = true
          const params = JSON.parse(JSON.stringify(form.value))
          // 2023.10.12将验证码都转成小写，验证码没有大写，主要解决用户误开启大写锁定造成输入验证码错误问题
          if (params.imagecode) {
            params.imagecode = params.imagecode.toLowerCase()
          }
          // end
          login(params)
            .then(res => {
              proxy.$utils.setTokenCookie(res.data.access_token)
              proxy.$utils.setUserCookie(res.data.openid)
              // 获取用户相关信息
              getSystemInfo()
            })
            .catch(e => {
              // 关闭loading状态
              setTimeout(() => {
                loginLoading.value = false
              })
              // end
            })
          refreshImageCode()
        }
      })
    }

    // 忘记密码
    const resetPassword = () => {
      proxy.$message.error('忘记密码功能暂未开放')
      // showResetPassword.value = true
      // resetPasswordForm.value = {
      //   username: recordUser.username || '',
      //   imagecode: '',
      //   password: ''
      // }
      // nextTick(() => {
      //   resetPasswordElement.value.clearValidate()
      // })
    }

    watch(
      () => route,
      () => {
        redirect.value = route.query && route.query.redirect
      },
      {
        immediate: true
      }
    )
    // 记住密码功能
    watchEffect(() => {
      if (recordPassword.value) {
        setCookie(
          'recordPassword',
          JSON.stringify({
            username: form.value.username,
            password: form.value.password
          })
        )
      } else {
        // clearCookie('recordPassword')
        setCookie(
          'recordPassword',
          JSON.stringify({ username: form.value.username })
        )
      }
    })

    return {
      formElement,
      form,
      imagecodeUrl,
      rules,
      refreshImageCode,
      handleLogin,
      recordPassword,
      resetPasswordElement,
      resetPasswordForm,
      showResetPassword,
      resetPassword,
      loginLoading
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin title {
  // @include jztFontSize1();
  font-size: 0.36rem;
  color: $jzt-color-primary-1;
}
@mixin label {
  // @include jztFontSize5();
  font-size: 0.16rem;
  color: $jzt-color-text-2;
}
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    @include title();
    height: 1.2rem;
    // line-height: 1.2rem;
    display: flex;
    align-items: center;
    padding: 0 0.4rem;
    .login-logo {
      width: 2.3rem;
      height: 0.46rem;
    }
  }
  main {
    height: 7.6rem;
    background: url('@/assets/images/login_bg.jpg') no-repeat left top;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .login-wrapper,
    .password-wrapper {
      width: 5rem;
      // height: 5.6rem;
      margin-right: 2.04rem;
      background-color: $jzt-color-bg-2;
      border-radius: $jzt-border-radius;
      box-sizing: border-box;
      padding: 0.56rem 0.4rem 0.8rem;
      &-header {
        text-align: center;
        @include title();
      }
      &-body {
        margin-top: 0.4rem;
        .el-form-item {
          margin-bottom: 16px;
          :deep(.el-form-item__content) {
            line-height: 0.4rem;
            display: flex;
            justify-content: space-between;
            .el-input {
              height: 0.4rem;
              flex: 1;
            }
            .el-icon,
            .el-icon svg {
              width: 0.2rem;
              height: 0.2rem;
            }
            .el-input__inner {
              height: 0.38rem;
              line-height: 0.38rem;
              font-size: 0.18rem;
            }
          }
        }
        .validate-code-image {
          margin-left: $jzt-base-distance;
          width: 1.4rem;
          background-color: $jzt-color-border-3;
          border-radius: $jzt-border-radius;
          text-align: center;
          font-size: 0.3rem;
          // @include jztFontSize2();
          color: $jzt-color-text-1;
          cursor: pointer;
        }
      }
      &-toolbar {
        display: flex;
        justify-content: space-between;
        @include label();
        .el-checkbox {
          height: auto;
          // :deep(.el-checkbox__inner) {
          //   width: 0.16rem;
          //   height: 0.16rem;
          //   &::after {
          //     // width: 0.04rem;
          //     // height: 0.08rem;
          //     left: 3px;
          //     height: 4px;
          //   }
          // }
          :deep(.el-checkbox__label) {
            @include label();
          }
        }
      }
      &-button {
        margin-top: 0.72rem;
        .el-button {
          width: 100%;
          height: 0.4rem;
          font-size: 0.24rem;
          // @include jztFontSize3();
        }
      }
    }
    .password-wrapper-button {
      @include jztFlexRow();
      margin-bottom: 0.38rem;
      .back {
        width: 1.7rem;
      }
      .confirm {
        flex: 1;
      }
    }
    .resetPassword {
      cursor: pointer;
      &:hover {
        color: var(--el-color-primary);
      }
    }
    .send-code {
      :deep(.el-input__wrapper) {
        box-shadow: none;
        border-width: 1px 0 1px 1px;
        border-style: solid;
        border-color: var(--el-input-border-color);
      }
      :deep(.el-input-group__append) {
        background-color: $jzt-color-bg-2;
        color: $jzt-color-text-4;
        cursor: pointer;
        // @include jztFontSize5();
        font-size: 0.16rem;
        &:hover {
          color: var(--el-color-primary);
        }
      }
    }
  }
  footer {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    // @include jztFontSize5();
    font-size: 0.16rem;
    color: $jzt-color-text-3;
  }
}
</style>
