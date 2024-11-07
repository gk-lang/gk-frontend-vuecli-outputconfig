<!-- 柱状图 -->
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
    const loading = ref(false)
    const graph = ref(null)
    let fontSize = getFontSize()
    const data = ref([
      // { name: '张三', value: 100 },
      // { name: '张晓', value: 150 },
      // { name: '王大', value: 200 },
      // { name: '王晓理', value: 88 },
      // { name: '李丽', value: 120 },
      // { name: '李晓', value: 170 },
      // { name: '小王', value: 188 },
      // { name: '张丽', value: 205 },
      // { name: '韩梅梅', value: 306 },
      // { name: '李雷', value: 209 }
    ])

    const barChart = ref(null)
    const initBar = () => {
      barChart.value = markRaw(echarts.init(graph.value))
      const option = {
        title: {
          text: props.options.graphText,
          textStyle: {
            color: '#666',
            fontSize: fontSize * 0.12,
            fontWeight: 'normal'
          },
          padding: 0,
          left: 0,
          top: fontSize * 0.08
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          confine: true,
          textStyle: {
            fontSize: fontSize * 0.1
          }
        },
        grid: {
          left: 0,
          right: 0,
          bottom: fontSize * 0.36,
          top: 0
        },
        xAxis: {
          type: 'category',
          data: data.value.map(item => item.name),
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: '#333',
            fontSize: fontSize * 0.12
          },
          nameGap: fontSize * 0.1
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [
          {
            name: props.options.label,
            type: 'bar',
            barWidth: fontSize * 0.1,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#33AAFF' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#5A7DFF' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            label: {
              show: true,
              fontSize: fontSize * 0.12,
              color: '#666',
              position: 'top'
            },
            data: data.value.map(item => item.value)
          }
        ]
      }
      option && barChart.value.setOption(option)
    }

    // resize bar
    const resizeGraph = () => {
      fontSize = getFontSize()
      barChart.value.resize()
    }

    // 刷新
    const refreshSection = () => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
      }, 300)
    }

    onMounted(() => {
      console.log('bar onmounted')
    })
    onBeforeUnmount(() => {
      if (barChart.value) {
        barChart.value.clear()
      }
    })

    watch(
      () => graph.value,
      () => {
        if (data.value.length > 0) {
          initBar()
        }
      }
    )

    return { graph, data, loading, resizeGraph, refreshSection }
  }
}
</script>

<style lang="scss" scoped></style>
