<!-- 入库运营状态 -->
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
import { queryInstorageOperate } from '@/api/home'
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
  name: 'In',
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props, context) {
    const data = ref([
      { name: '收货件数', complete: 0, incomplete: 0, icon: 'in-icon-1.png' },
      { name: '上架件数', complete: 0, incomplete: 0, icon: 'in-icon-2.png' },
      { name: '收货完成', complete: 0, incomplete: 0, icon: 'in-icon-3.png' }
    ])
    const loading = ref(false)

    // 初始化
    const init = () => {
      loading.value = true
      queryInstorageOperate({})
        .then(res => {
          if (res.data) {
            data.value = [
              {
                name: '收货件数',
                complete: res.data.receive_num,
                incomplete: res.data.check_num,
                icon: 'in-icon-1.png'
              },
              {
                name: '上架件数',
                complete: res.data.task_complete,
                incomplete: res.data.task_no_complete,
                icon: 'in-icon-2.png'
              },
              {
                name: '收货完成',
                complete: res.data.receive_no_complete,
                incomplete: res.data.receive_complete,
                icon: 'in-icon-3.png'
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
      console.log('in onmounted')
      refreshSection()
    })

    return { data, loading, refreshSection }
  }
}
</script>

<style lang="scss" scoped></style>
