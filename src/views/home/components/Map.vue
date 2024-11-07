<!-- 柱状图 -->
<template>
  <div
    :class="{
      'jzt-layout-home': true,
      'layout-4': true,
      map: true,
      'jzt-layout-empty': data.length === 0
    }"
  >
    <!-- 标题 -->
    <slot name="layoutTitle" :options="{ units, condition }" />
    <!-- 内容 -->
    <div class="layout-body" v-loading="loading">
      <div v-if="data.length > 0" ref="graph" class="graph"></div>
      <div v-if="data.length > 0" class="list">
        <div class="title">当前排名<span>1</span></div>
        <div class="body">
          <el-scrollbar>
            <div class="item" v-for="(item, index) in data" :key="index">
              <span class="order">{{ item.order }}</span>
              <span class="name">{{ item.name }}</span>
              <span>{{ item.num }}</span>
            </div>
          </el-scrollbar>
        </div>
      </div>
      <jzt-global-empty v-else />
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'
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
  name: 'Map',
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
    const units = [
      { label: '日', value: 'day' },
      { label: '月', value: 'month' }
    ]
    const condition = ref({
      unit: 'day'
    })
    const data = ref([
      {
        order: 1,
        name: '长沙仓',
        num: 0,
        longitude: 112.937465,
        latitude: 28.337651
      }
      // { order: 1, name: '1号仓', num: 3, longitude: 117.081415, latitude: 39.239722 },
      // { order: 2, name: '2号仓', num: 3, longitude: 121.889574, latitude: 29.879127 },
      // { order: 3, name: '3号仓', num: 3, longitude: 115.755018, latitude: 33.789675 },
      // { order: 4, name: '4号仓', num: 3, longitude: 114.099715, latitude: 32.978161 }
    ])
    let first = []
    if (data.value.length > 0) {
      first = [
        {
          value: [data.value[0].longitude, data.value[0].latitude],
          name: data.value[0].name,
          num: data.value[0].num
        }
      ]
    }
    let second = []
    if (data.value.length > 1) {
      second = [
        {
          value: [data.value[1].longitude, data.value[1].latitude],
          name: data.value[1].name,
          num: data.value[1].num
        }
      ]
    }
    let third = []
    if (data.value.length > 2) {
      third = [
        {
          value: [data.value[2].longitude, data.value[2].latitude],
          name: data.value[2].name,
          num: data.value[2].num
        }
      ]
    }
    let other = []
    if (data.value.length > 3) {
      other = data.value
        .filter(item => item.order > 3)
        .map(item => {
          return {
            value: [item.longitude, item.latitude],
            name: item.name,
            num: item.num
          }
        })
    }

    const mapChart = ref(null)
    const initMap = () => {
      axios.get('/map/china-version2.json').then(res => {
        echarts.registerMap('china', res.data)
        mapChart.value = echarts.init(graph.value)
        const option = {
          tooltip: {
            formatter: function (params, ticket, callback) {
              const str = `${params.data.name}：${params.data.num}`
              return str
            },
            padding: [fontSize * 0.08, fontSize * 0.16],
            borderWidth: 0,
            textStyle: {
              fontSize: fontSize * 0.12,
              color: '#3C546E'
            },
            confine: true,
            position: 'bottom'
          },
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
          geo: {
            map: 'china',
            roam: true,
            left: 0,
            right: fontSize * 2,
            // top: fontSize * 0.3,
            label: {
              show: true,
              fontSize: fontSize * 0.12,
              color: '#989FC0'
            },
            itemStyle: {
              borderColor: '#769CC5',
              areaColor: '#F4FAFF'
            },
            emphasis: {
              label: {
                color: '#989FC0'
              },
              itemStyle: {
                areaColor: '#D3E8FF'
              }
            },
            tooltip: {
              show: false
            },
            scaleLimit: {
              min: 0.6
            }
          },
          series: [
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'image:///images/map-icon-1.png',
              symbolSize: [fontSize * 0.2, fontSize * 0.24],
              symbolOffset: [0, '-48%'],
              z: 3,
              data: first,
              tooltip: {
                show: true
              }
            },
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'image:///images/map-icon-2.png',
              symbolSize: [fontSize * 0.2, fontSize * 0.24],
              symbolOffset: [0, '-48%'],
              z: 3,
              data: second,
              tooltip: {
                show: true
              }
            },
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'image:///images/map-icon-3.png',
              symbolSize: [fontSize * 0.2, fontSize * 0.24],
              symbolOffset: [0, '-48%'],
              z: 3,
              data: third,
              tooltip: {
                show: true
              }
            },
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'image:///images/map-icon-4.png',
              symbolSize: [fontSize * 0.2, fontSize * 0.24],
              symbolOffset: [0, '-48%'],
              z: 3,
              data: other,
              tooltip: {
                show: true
              }
            }
          ]
        }
        option && mapChart.value.setOption(option)
      })
    }

    const resizeGraph = () => {
      fontSize = getFontSize()
      mapChart.value.resize()
    }

    // 刷新
    const refreshSection = () => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
      }, 300)
    }

    onMounted(() => {
      console.log('map onmounted')
    })
    onBeforeUnmount(() => {
      if (mapChart.value) {
        mapChart.value.clear()
      }
    })

    watch(
      () => graph.value,
      () => {
        if (data.value.length > 0) {
          initMap()
        }
      }
    )

    return {
      graph,
      condition,
      units,
      data,
      loading,
      resizeGraph,
      refreshSection
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  .list {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 2rem;
    @include jztFlexColumn();
    .title {
      font-size: 0.18rem;
      font-weight: bold;
      line-height: 0.24rem;
      color: $jzt-color-text-1;
      span {
        margin-left: 0.24rem;
        font-size: 0.24rem;
        color: var(--el-color-primary);
      }
    }
    .body {
      flex: 1;
      height: 0;
      margin-top: 0.24rem;
      .item {
        height: 0.36rem;
        border-bottom: 1px dashed $jzt-color-border-3;
        padding: 0 0.08rem;
        font-size: 0.14rem;
        color: $jzt-color-text-1;
        display: flex;
        align-items: center;
        .order {
          width: 0.4rem;
          padding-left: 0.02rem;
        }
        .name {
          flex: 1;
          width: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0 0.16rem;
        }
        &:nth-last-of-type(1) {
          border-bottom: none;
        }
        &:nth-of-type(1) {
          .order {
            background: url('@/assets/images/home/map-icon-5.png') no-repeat
              left center;
            background-size: 0.16rem;
            color: #fff;
          }
        }
        &:nth-of-type(2) {
          .order {
            background: url('@/assets/images/home/map-icon-6.png') no-repeat
              left center;
            background-size: 0.16rem;
            color: #fff;
          }
        }
        &:nth-of-type(3) {
          .order {
            background: url('@/assets/images/home/map-icon-7.png') no-repeat
              left center;
            background-size: 0.16rem;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
