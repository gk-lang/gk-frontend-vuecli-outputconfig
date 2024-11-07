<!-- 我的待办 -->
<template>
  <div
    :class="{
      'jzt-layout-home': true,
      'layout-1': true,
      'jzt-layout-empty': data.length === 0
    }"
  >
    <!-- 标题 -->
    <slot name="layoutTitle" />
    <!-- 内容 -->
    <ul class="layout-body" v-loading="loading">
      <el-scrollbar v-if="data.length > 0">
        <li
          :class="['layout-item', item.status === '0' ? 'unread' : '']"
          v-for="(item, index) in data"
          :key="index"
          @click="openPage(item)"
        >
          <p class="title" :title="item.processInstanceName">
            {{ item.processInstanceName }}
          </p>
          <span class="time">{{ item.createTime }}</span>
        </li>
      </el-scrollbar>
      <jzt-global-empty v-else />
    </ul>
  </div>
</template>

<script>
import { useStoreEffect } from '#/effects/computedStore'
import { useOpenMenu } from '#/effects/menu'
import { queryMyWait } from '@/api/home'
import { getQueryString, errorMessage } from '#/utils'
import {
  ref,
  unref,
  reactive,
  inject,
  provide,
  watch,
  computed,
  watchEffect,
  getCurrentInstance,
  onActivated,
  onMounted,
  onUnmounted,
  onBeforeUnmount,
  onDeactivated,
  nextTick,
  defineAsyncComponent
} from 'vue'

export default {
  name: 'Wait',
  setup(props, context) {
    const { currentUser } = useStoreEffect()
    // 打开菜单
    const { handleMenuClick } = useOpenMenu(
      {
        isOpen: true,
        menuObjField: {
          // 菜单对象字段名
          menuId: 'menu_id',
          menuName: 'menu_name',
          menuIcon: 'menu_icon',
          menuConfig: 'menu_config',
          menuUrl: 'menu_url',
          docUrl: 'doc_url',
          singleTenant: 'single_tenant',
          singleWarehouse: 'single_warehouse'
        },
        router: false
      },
      context
    )

    const data = ref([])
    const loading = ref(false)

    // 初始化
    const init = () => {
      loading.value = true
      queryMyWait({
        userId: currentUser.value.user_id,
        pageNo: 1,
        pageSize: 10
      })
        .then(res => {
          if (res.data.records) {
            data.value = res.data.records.map(item => {
              item.status = '0'
              return item
            })
          } else {
            data.value = []
          }
          loading.value = false
        })
        .catch(e => {
          loading.value = false
        })
    }
    init()

    // 刷新
    const refreshSection = () => {
      init()
    }

    // 轮询
    const loop = (node, menuId, arr = []) => {
      for (let i = 0; i < node.length; i++) {
        if (node[i].menu_id === menuId) {
          arr.push(node[i])
        }
        if (node[i].children) {
          loop(node[i].children, menuId, arr)
        }
      }
      return arr
    }

    // 获取菜单
    const getMenu = row => {
      const obj = getQueryString(row.formCustomViewPath)
      const arr = loop(currentUser.value.menuData, obj.menuId)
      return arr.length > 0 ? arr[0] : {}
    }

    // 打开页面
    const openPage = row => {
      const menu = getMenu(row)
      if (Object.keys(menu).length > 0) {
        handleMenuClick(menu)
      } else {
        errorMessage('请确认流程模板中的表单查看路由配置是否正确')
      }
    }

    return { data, loading, refreshSection, openPage }
  }
}
</script>

<style lang="scss" scoped></style>
