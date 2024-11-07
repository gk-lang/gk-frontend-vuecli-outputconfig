<!-- 资源情况 -->
<template>
  <div
    :class="{
      'jzt-layout-home': true,
      'layout-4': true,
      'jzt-layout-empty': data.length === 0
    }"
  >
    <!-- 标题 -->
    <slot name="layoutTitle" />
    <!-- 内容 -->
    <div class="layout-body" v-loading="loading">
      <div v-if="data.length > 0" ref="graph" class="graph"></div>
      <jzt-global-empty v-else />
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { getFontSize } from '#/utils'
import { queryLocation } from '@/api/home'
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
  name: 'Resource',
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props, context) {
    const graph = ref(null)
    let fontSize = getFontSize()
    const loading = ref(false)

    // 设置饼图颜色
    const setBarStyle = (color1, color2) => {
      return {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: color1 // 0% 处的颜色
            },
            {
              offset: 1,
              color: color2 // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
      }
    }

    // 数据
    const data = ref([
      {
        name: '零库空闲',
        value: 0,
        itemStyle: setBarStyle('#FFAE8B', '#FF3145')
      },
      {
        name: '零库占用',
        value: 0,
        itemStyle: setBarStyle(
          'rgba(244, 174, 139, 0.5)',
          'rgba(255, 49, 69, 0.5)'
        )
      },
      {
        name: '立库空闲',
        value: 0,
        itemStyle: setBarStyle(
          'rgba(27, 229, 178, 0.5)',
          'rgba(0, 176, 184, 0.5)'
        )
      },
      {
        name: '立库占用',
        value: 0,
        itemStyle: setBarStyle('#1BE5B2', '#00B0B8')
      }
    ])

    const pieChart = ref(null)
    // 初始化饼图
    const initPie = () => {
      pieChart.value = echarts.init(graph.value)
      const option = {
        title: {
          text: props.options.title,
          textStyle: {
            color: '#666',
            fontSize: fontSize * 0.12,
            fontWeight: 'normal'
          },
          padding: 0,
          left: 0
        },
        tooltip: {
          trigger: 'item',
          confine: true
        },
        series: [
          {
            name: props.options.title,
            type: 'pie',
            radius: ['60%', '80%'],
            top: 0,
            bottom: 0,
            label: {
              show: true,
              fontSize: fontSize * 0.12,
              color: 'rgba(0,0,0,0.65)',
              lineHeight: fontSize * 0.18,
              formatter(param) {
                return param.name + '\n' + param.percent + '%'
              }
            },
            labelLayout: {
              // align: 'left'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: fontSize * 0.12
              }
            },
            labelLine: {
              show: true
            },
            data: data.value
          }
        ]
      }
      option && pieChart.value.setOption(option)
    }

    // 尺寸变化，重新渲染
    const resizeGraph = () => {
      fontSize = getFontSize()
      pieChart.value.resize()
    }

    // 初始化
    const init = () => {
      loading.value = true
      queryLocation({})
        .then(res => {
          if (res.data) {
            data.value = [
              {
                name: '零库空闲',
                value: res.data.leave_lhk,
                itemStyle: setBarStyle('#FFAE8B', '#FF3145')
              },
              {
                name: '零库占用',
                value: res.data.no_leave_lhk,
                itemStyle: setBarStyle(
                  'rgba(244, 174, 139, 0.5)',
                  'rgba(255, 49, 69, 0.5)'
                )
              },
              {
                name: '立库空闲',
                value: res.data.leave_ltk,
                itemStyle: setBarStyle(
                  'rgba(27, 229, 178, 0.5)',
                  'rgba(0, 176, 184, 0.5)'
                )
              },
              {
                name: '立库占用',
                value: res.data.no_leave_ltk,
                itemStyle: setBarStyle('#1BE5B2', '#00B0B8')
              }
            ]
          } else {
            data.value = []
          }
          initPie()
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
      console.log('resouce onmounted')
      nextTick(() => {
        refreshSection()
      })
    })
    onBeforeUnmount(() => {
      if (pieChart.value) {
        pieChart.value.clear()
      }
    })

    return { graph, data, loading, resizeGraph, refreshSection }
  }
}
</script>

<style lang="scss" scoped></style>
