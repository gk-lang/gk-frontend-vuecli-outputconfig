<!-- 消息提醒 -->
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
        >
          <jzt-global-popover trigger="click">
            {{ item.title }}
            <template #reference>
              <p class="title">{{ item.title }}</p>
            </template>
          </jzt-global-popover>
          <span class="time">{{ item.time }}</span>
        </li>
      </el-scrollbar>
      <jzt-global-empty v-else />
    </ul>
  </div>
</template>

<script>
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
  name: 'Message',
  setup(props, context) {
    const data = [
      // { title: '关于2023年第一季度的更新通知', time: '2023-02-17', status: '0' },
      // { title: '关于2023年第一季度的更新通知', time: '2023-02-17', status: '1' },
      // { title: '关于2023年第一季度的更新通知', time: '2023-02-17', status: '0' },
      // { title: '关于2023年第一季度的更新通知', time: '2023-02-17', status: '1' },
      // { title: '关于2023年第一季度的更新通知', time: '2023-02-17', status: '0' },
      // { title: '关于2023年第一季度的更新通知', time: '2023-02-17', status: '1' },
      // { title: '关于2023年第一季度的更新通知', time: '2023-02-17', status: '0' }
    ]
    const loading = ref(false)

    // 刷新
    const refreshSection = () => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
      }, 300)
    }

    return { data, loading, refreshSection }
  }
}
</script>

<style lang="scss" scoped></style>
