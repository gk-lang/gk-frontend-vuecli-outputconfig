<!-- 用户信息 -->
<template>
  <div class="user">
    <div class="user-header">
      <div class="sex">
        <div class="sex-img">
          <img
            :src="
              require(
                `@/assets/images/home/sex-icon-${currentUser.select_sex === '女' ? '1' : '2'}.png`
              )
            "
          />
        </div>
        <span>{{ currentUser.nick_name }}</span>
        <div class="role">{{ currentUser.select_role_name }}</div>
      </div>
      <layout-title
        :show-delete-icon="false"
        @refresh-section="refreshSection"
      />
    </div>
    <div class="user-body" v-loading="loading">
      <div class="user-body-title layout-title">
        <div class="layout-title-left name">
          <span>我的能效</span>
          <span class="top" v-if="data.rank && +data.rank <= 3"
            >TOP{{ data.rank }}</span
          >
        </div>
        <div class="energy-img" v-if="data.animal">
          <!-- 豹子 -->
          <!-- <jzt-global-svg
            icon-class="icon-shouye-baozi"
            icon-class-name="icon-energy"
          /> -->
          <img
            :src="require(`@/assets/images/home/user-icon-${data.animal}.png`)"
          />
          <!-- 兔子 -->
          <!-- <jzt-global-svg
            icon-class="icon-shouye-tuzi"
            iconClassName="icon-energy"
          /> -->
          <!-- <img src="@/assets/images/home/user-icon-2.png" /> -->
          <!-- 乌龟 -->
          <!-- <jzt-global-svg
            icon-class="icon-shouye-wugui"
            iconClassName="icon-energy"
          /> -->
          <!-- <img src="@/assets/images/home/user-icon-3.png" /> -->
        </div>
        <jzt-global-dropdown
          class="user-jobs"
          popper-class="user-jobs-popper jzt-dropdown-active"
          placement="bottom"
          v-if="jobs.length > 0"
        >
          <template #jztGlobalDropdownLind>
            {{ currentJob }}
            <jzt-global-icon><i-ep-arrow-down /></jzt-global-icon>
          </template>
          <template #jztGlobalDropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="item in jobs"
                :key="item"
                :class="{ active: item === currentJob }"
                @click="handleJobClick(item)"
                >{{ item }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </jzt-global-dropdown>
      </div>
      <ul class="user-body-data">
        <li>
          <p class="desc">当日能效</p>
          <p class="num">
            {{ data.day_work_sum || 0 }}<span>{{ data.day_unit }}</span>
          </p>
        </li>
        <li>
          <p class="desc">当月能效</p>
          <p class="num">
            {{ data.month_work_sum || 0 }}<span>{{ data.month_unit }}</span>
          </p>
        </li>
        <li>
          <p class="desc">加扣分</p>
          <p class="num">{{ data.score || 0 }}<span>分</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStoreEffect } from '#/effects/computedStore'
import LayoutTitle from './Title.vue'
import { queryEnergy } from '@/api/home'
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
  name: 'User',
  components: {
    LayoutTitle
  },
  setup(props, context) {
    const { currentUser } = useStoreEffect()
    const data = ref({})
    const loading = ref(false)
    const currentJob = ref('')
    const jobs = ref([])

    // 初始化
    const init = () => {
      loading.value = true
      queryEnergy({
        jobs: currentJob.value
      })
        .then(res => {
          data.value = res.data || {}
          loading.value = false
        })
        .catch(e => {
          loading.value = false
        })
    }

    // 刷新
    const refreshSection = () => {
      init()
    }

    // 选择job
    const handleJobClick = val => {
      currentJob.value = val
      refreshSection()
    }

    // 取岗位的默认值
    watch(
      () => currentUser.value,
      () => {
        if (currentUser.value.select_jobs) {
          jobs.value = currentUser.value.select_jobs.split(',')
          currentJob.value = jobs.value[0]
          refreshSection()
        } else {
          jobs.value = []
          currentJob.value = ''
          data.value = {}
        }
      },
      {
        immediate: true
      }
    )

    return {
      currentUser,
      data,
      loading,
      currentJob,
      jobs,
      refreshSection,
      handleJobClick
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  .user-header {
    @include jztFlexRowSpaceBetween();
    border-bottom: 0.01rem solid $jzt-color-border-2;
    padding-bottom: 0.16rem;
    .sex {
      @include jztFlexRowFlexStart();
      .sex-img {
        width: 0.46rem;
        height: 0.46rem;
        margin-right: 0.08rem;
      }
    }
    .role {
      margin-left: 0.16rem;
    }
    :deep(.layout-title) {
      width: auto;
      margin-bottom: 0;
    }
  }
  .user-body {
    margin-top: 0.16rem;
    &-title {
      position: relative;
      .name {
        @include jztFlexRowFlexStart();
        font-weight: normal !important;
        .top {
          margin-left: 0.16rem;
          width: 0.58rem;
          height: 0.2rem;
          line-height: 0.2rem;
          background: #ff0000;
          border-radius: 0.02rem;
          color: $jzt-color-bg-2;
          text-align: center;
        }
      }
      .energy-img {
        width: 0.48rem;
        height: 0.28rem;
        overflow: hidden;
        // position: absolute;
        // right: 0;
        // top: 0;
        // margin-top: -0.16rem;
        :deep(.icon-energy) {
          color: var(--el-color-primary);
          font-size: 0.48rem !important;
        }
      }
    }
    .user-body-data {
      display: flex;
      justify-content: space-between;
      li {
        .desc {
          color: $jzt-color-text-2;
          line-height: 0.21rem;
          margin-bottom: 0.08rem;
        }
        .num {
          font-size: 0.24rem;
          color: $jzt-color-text-1;
          line-height: 0.31rem;
          span {
            margin-left: 0.08rem;
            font-size: 0.18rem;
          }
        }
      }
    }
  }
  .user-jobs {
    :deep(.jzt-global-dropdown-link) {
      @include jztFlexRowCenter();
      cursor: pointer;
    }
  }
}
</style>
