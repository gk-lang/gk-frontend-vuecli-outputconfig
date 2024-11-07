<!-- 今日销量 -->
<template>
  <div
    :class="{
      'jzt-layout-home': true,
      'layout-3': true,
      sale: true,
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
            <span>{{ item.num }}</span>
            <span class="unit">元</span>
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
  name: 'Sale',
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
      { name: '今日开票金额', num: 0, icon: 'sale-icon-1.png' },
      { name: '今日已出库金额', num: 0, icon: 'sale-icon-2.png' }
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
      console.log('sale onmounted')
    })

    return { data, loading, refreshSection }
  }
}
</script>

<style lang="scss" scoped></style>
