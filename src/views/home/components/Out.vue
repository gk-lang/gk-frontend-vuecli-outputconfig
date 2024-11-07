<!-- 出库运营状态 -->
<template>
  <div
    :class="{
      'jzt-layout-home': true,
      'layout-2': true,
      'jzt-layout-empty': data.length === 0
    }"
  >
    <!-- 标题 -->
    <slot name="layoutTitle" />
    <!-- 内容 -->
    <div class="layout-body" v-loading="loading">
      <div class="layout-item" v-for="(item, index) in data" :key="index">
        <div class="layout-item-img">
          <img :src="require(`@/assets/images/home/${item.icon}`)" />
        </div>
        <div class="layout-item-right">
          <span class="title">{{ item.name }}</span>
          <div class="num">
            <span class="complete">{{ item.complete }}</span>
            <span class="incomplete">{{ item.incomplete }}</span>
          </div>
        </div>
      </div>
      <jzt-global-empty v-if="data.length === 0" />
    </div>
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
  name: 'Out',
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props, context) {
    const data = [
      { name: '出库调整', complete: 0, incomplete: 0, icon: 'out-icon-1.png' },
      { name: '拣货', complete: 0, incomplete: 0, icon: 'out-icon-3.png' },
      { name: '内复核', complete: 0, incomplete: 0, icon: 'out-icon-2.png' },
      { name: '外复核', complete: 0, incomplete: 0, icon: 'out-icon-4.png' }
    ]
    const loading = ref(false)

    // 刷新
    const refreshSection = () => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
      }, 300)
    }

    onMounted(() => {
      console.log('out onmounted')
    })

    return { data, loading, refreshSection }
  }
}
</script>

<style lang="scss" scoped></style>
