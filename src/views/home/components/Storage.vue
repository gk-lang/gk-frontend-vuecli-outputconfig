<!-- 当日库存 -->
<template>
  <div
    :class="{
      'jzt-layout-home': true,
      'layout-3': true,
      storage: true,
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
          </div>
        </div>
      </div>
      <jzt-global-empty v-if="data.length === 0" />
    </div>
  </div>
</template>

<script>
import { queryStock } from '@/api/home'
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
  name: 'Storage',
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
      { name: '库存件数', num: 0, icon: 'storage-icon-1.png' },
      { name: '在库品规数', num: 0, icon: 'storage-icon-2.png' }
    ]
    const loading = ref(false)

    // 初始化
    const init = () => {
      loading.value = true
      queryStock({})
        .then(res => {
          if (res.data) {
            data.value = [
              {
                name: '库存件数',
                num: res.data.stock_pcs,
                icon: 'storage-icon-1.png'
              },
              {
                name: '在库品规数',
                num: res.data.goods_count,
                icon: 'storage-icon-2.png'
              }
            ]
          } else {
            data.value = []
          }
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

    onMounted(() => {
      console.log('storage onmounted')
      refreshSection()
    })

    return { data, loading, refreshSection }
  }
}
</script>

<style lang="scss" scoped></style>
