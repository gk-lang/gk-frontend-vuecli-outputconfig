<template>
  <div class="home">
    <div class="row">
      <div class="section user-wrapper">
        <user />
      </div>
      <div class="section application-wrapper">
        <application />
      </div>
    </div>
    <div class="row flex-num">
      <div class="column left">
        <div class="section three">
          <customize
            v-if="!current.section1 || !current.section1.component"
            :options="
              customizeOptions.filter(item => item.section.includes('section1'))
            "
            @node-click="
              (obj, node) => {
                handleNodeClick('section1', obj, node)
              }
            "
          />
          <component
            v-else
            :ref="r => setRef(r, 'section1')"
            :is="current.section1.component"
            :options="current.section1"
          >
            <template #layoutTitle>
              <layout-title
                :options="current.section1"
                @delete-section="
                  () => {
                    deleteSection('section1')
                  }
                "
                @refresh-section="
                  () => {
                    refreshSection('section1')
                  }
                "
              />
            </template>
          </component>
        </div>
        <div class="section three">
          <customize
            v-if="!current.section2 || !current.section2.component"
            :options="
              customizeOptions.filter(item => item.section.includes('section2'))
            "
            @node-click="
              (obj, node) => {
                handleNodeClick('section2', obj, node)
              }
            "
          />
          <component
            v-else
            :ref="r => setRef(r, 'section2')"
            :is="current.section2.component"
            :options="current.section2"
          >
            <template #layoutTitle>
              <layout-title
                :options="current.section2"
                @delete-section="
                  () => {
                    deleteSection('section2')
                  }
                "
                @refresh-section="
                  () => {
                    refreshSection('section2')
                  }
                "
              />
            </template>
          </component>
        </div>
        <div class="section three">
          <customize
            v-if="!current.section3 || !current.section3.component"
            :options="
              customizeOptions.filter(item => item.section.includes('section3'))
            "
            @node-click="
              (obj, node) => {
                handleNodeClick('section3', obj, node)
              }
            "
          />
          <component
            v-else
            :ref="r => setRef(r, 'section3')"
            :is="current.section3.component"
            :options="current.section3"
          >
            <template #layoutTitle>
              <layout-title
                :options="current.section3"
                @delete-section="
                  () => {
                    deleteSection('section3')
                  }
                "
                @refresh-section="
                  () => {
                    refreshSection('section3')
                  }
                "
              />
            </template>
          </component>
        </div>
      </div>
      <div
        :class="{
          column: true,
          middle: true
        }"
      >
        <div class="section one" v-if="current.middleStatus">
          <customize
            v-if="!current.section4 || !current.section4.component"
            :options="
              customizeOptions.filter(item => item.section.includes('section4'))
            "
            @node-click="
              (obj, node) => {
                handleNodeClick('section4', obj, node)
              }
            "
          />
          <component
            v-else
            :ref="r => setRef(r, 'section4')"
            :is="current.section4.component"
            :options="current.section4"
          >
            <template #layoutTitle="{ options }">
              <layout-title
                :options="current.section4"
                @delete-section="
                  () => {
                    deleteSection('section4')
                  }
                "
                @refresh-section="
                  () => {
                    refreshSection('section4')
                  }
                "
              >
                <template #default>
                  <el-select
                    v-model="options.condition.unit"
                    placeholder="请选择"
                    class="map-unit-condition"
                  >
                    <el-option
                      v-for="item in options.units"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </template>
              </layout-title>
            </template>
          </component>
        </div>
        <template v-else>
          <div class="row">
            <div class="section two">
              <customize
                v-if="!current.section5 || !current.section5.component"
                :options="
                  customizeOptions.filter(item =>
                    item.section.includes('section5')
                  )
                "
                @node-click="
                  (obj, node) => {
                    handleNodeClick('section5', obj, node)
                  }
                "
              />
              <component
                v-else
                :ref="r => setRef(r, 'section5')"
                :is="current.section5.component"
                :options="current.section5"
              >
                <template #layoutTitle>
                  <layout-title
                    :options="current.section5"
                    @delete-section="
                      () => {
                        deleteSection('section5')
                      }
                    "
                    @refresh-section="
                      () => {
                        refreshSection('section5')
                      }
                    "
                  />
                </template>
              </component>
            </div>
            <div class="section two">
              <customize
                v-if="!current.section6 || !current.section6.component"
                :options="
                  customizeOptions.filter(item =>
                    item.section.includes('section6')
                  )
                "
                @node-click="
                  (obj, node) => {
                    handleNodeClick('section6', obj, node)
                  }
                "
              />
              <component
                v-else
                :ref="r => setRef(r, 'section6')"
                :is="current.section6.component"
                :options="current.section6"
              >
                <template #layoutTitle>
                  <layout-title
                    :options="current.section6"
                    @delete-section="
                      () => {
                        deleteSection('section6')
                      }
                    "
                    @refresh-section="
                      () => {
                        refreshSection('section6')
                      }
                    "
                  />
                </template>
              </component>
            </div>
          </div>
          <div class="row">
            <div class="section two">
              <customize
                v-if="!current.section7 || !current.section7.component"
                :options="
                  customizeOptions.filter(item =>
                    item.section.includes('section7')
                  )
                "
                @node-click="
                  (obj, node) => {
                    handleNodeClick('section7', obj, node)
                  }
                "
              />
              <component
                v-else
                :ref="r => setRef(r, 'section7')"
                :is="current.section7.component"
                :options="current.section7"
              >
                <template #layoutTitle>
                  <layout-title
                    :options="current.section7"
                    @delete-section="
                      () => {
                        deleteSection('section7')
                      }
                    "
                    @refresh-section="
                      () => {
                        refreshSection('section7')
                      }
                    "
                  />
                </template>
              </component>
            </div>
            <div class="section two">
              <customize
                v-if="!current.section8 || !current.section8.component"
                :options="
                  customizeOptions.filter(item =>
                    item.section.includes('section8')
                  )
                "
                @node-click="
                  (obj, node) => {
                    handleNodeClick('section8', obj, node)
                  }
                "
              />
              <component
                v-else
                :ref="r => setRef(r, 'section8')"
                :is="current.section8.component"
                :options="current.section8"
              >
                <template #layoutTitle>
                  <layout-title
                    :options="current.section8"
                    @delete-section="
                      () => {
                        deleteSection('section8')
                      }
                    "
                    @refresh-section="
                      () => {
                        refreshSection('section8')
                      }
                    "
                  />
                </template>
              </component>
            </div>
          </div>
        </template>
      </div>
      <div class="column right">
        <div class="section two">
          <wait :ref="r => setRef(r, 'wait')">
            <template #layoutTitle>
              <layout-title
                :options="{ label: '我的待办' }"
                :show-delete-icon="false"
                @refresh-section="
                  () => {
                    refreshSection('wait')
                  }
                "
              />
            </template>
          </wait>
        </div>
        <div class="section two">
          <message :ref="r => setRef(r, 'message')">
            <template #layoutTitle>
              <layout-title
                :options="{ label: '消息提醒' }"
                :show-delete-icon="false"
                @refresh-section="
                  () => {
                    refreshSection('message')
                  }
                "
              />
            </template>
          </message>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import { getHomeSetting, setHomeSetting } from '#/utils'
import { useStoreEffect } from '#/effects/computedStore'
import CUSTOMIZE_OPTIONS from './data'
import LayoutTitle from './components/Title.vue'
import User from './components/User.vue'
import Application from './components/Application.vue'
import Wait from './components/Wait.vue'
import Message from './components/Message.vue'
import Customize from './components/Customize.vue'
import {
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  defineAsyncComponent
} from 'vue'

export default {
  name: 'Home',
  props: {
    isFullScreen: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LayoutTitle,
    User,
    Application,
    Wait,
    Message,
    Customize,
    Out: defineAsyncComponent(
      () => import(/* webpackChunkName: "out" */ './components/Out')
    ),
    In: defineAsyncComponent(
      () => import(/* webpackChunkName: "in" */ './components/In')
    ),
    Sale: defineAsyncComponent(
      () => import(/* webpackChunkName: "sale" */ './components/Sale')
    ),
    Resource: defineAsyncComponent(
      () => import(/* webpackChunkName: "resource" */ './components/Resource')
    ),
    Bar: defineAsyncComponent(
      () => import(/* webpackChunkName: "bar" */ './components/Bar')
    ),
    Storage: defineAsyncComponent(
      () => import(/* webpackChunkName: "storage" */ './components/Storage')
    ),
    Map: defineAsyncComponent(
      () => import(/* webpackChunkName: "map" */ './components/Map')
    )
  },
  setup(props, context) {
    const { currentMenuCollapse, currentMenuLayout } = useStoreEffect()
    // 定义元素
    const sectionRef = ref({
      section1: null,
      section2: null,
      section3: null,
      section4: null,
      section5: null,
      section6: null,
      section7: null,
      section8: null,
      wait: null,
      message: null
    })
    const setRef = (r, val) => {
      sectionRef.value[val] = r
    }
    // 自定义配置选项
    const customizeOptions = ref(CUSTOMIZE_OPTIONS)
    // 获取区块默认组件
    const getDefaultComp = val => {
      const arr = customizeOptions.value.filter(item => item.current === val)
      if (arr.length > 0) {
        return arr[0]
      } else {
        return ''
      }
    }
    // 初始化显示内容
    const current = ref({})
    const homeSetting = getHomeSetting()
    if (Object.keys(homeSetting).length > 0) {
      current.value = homeSetting
    } else {
      current.value = {
        section1: getDefaultComp('section1'),
        section2: getDefaultComp('section2'),
        section3: getDefaultComp('section3'),
        section4: getDefaultComp('section4'),
        section5: getDefaultComp('section5'),
        section6: getDefaultComp('section6'),
        section7: getDefaultComp('section7'),
        section8: getDefaultComp('section8'),
        middleStatus: true // 中间区块是否显示地图
      }
    }
    // 删除区块
    const deleteSection = val => {
      current.value[val] = ''
    }
    // 刷新区块
    const refreshSection = val => {
      sectionRef.value[val].refreshSection()
    }
    // 自定义区块
    const handleNodeClick = (val, obj, node) => {
      // 中间区块的显示方式
      if (['section5', 'section6', 'section7', 'section8'].includes(val)) {
        if (obj.span === 4) {
          current.value.section4 = obj
          current.value.middleStatus = true
          current.value.section5 = ''
          current.value.section6 = ''
          current.value.section7 = ''
          current.value.section8 = ''
        } else {
          current.value.section4 = ''
          current.value.middleStatus = false
          current.value[val] = obj
        }
      } else if (['section4'].includes(val)) {
        if (obj.span === 4) {
          current.value.section4 = obj
          current.value.middleStatus = true
          current.value.section5 = ''
          current.value.section6 = ''
          current.value.section7 = ''
          current.value.section8 = ''
        } else {
          current.value.section4 = ''
          current.value.middleStatus = false
          current.value.section5 = obj
        }
      } else {
        current.value[val] = obj
      }
    }

    // resize echarts
    const resizeGraph = time => {
      nextTick(() => {
        setTimeout(() => {
          for (const key in sectionRef.value) {
            if (
              sectionRef.value[key] &&
              sectionRef.value[key].resizeGraph &&
              current.value[key]
            ) {
              sectionRef.value[[key]].resizeGraph()
            }
          }
        }, time || 0)
      })
    }

    // resize事件监听
    onMounted(() => {
      window.onresize = () => {
        resizeGraph()
      }
      if (screenfull.isEnabled) {
        // 判断是否支持全屏
        screenfull.on('change', resizeGraph) // 开启监听change事件
      }
    })
    onBeforeUnmount(() => {
      window.onresize = null
    })

    watch(
      () => current.value,
      () => {
        setHomeSetting(current.value)
      },
      {
        immediate: true,
        deep: true
      }
    )
    // resize echarts
    watch(
      () => [currentMenuLayout.value, props.isFullScreen],
      () => {
        resizeGraph()
      }
    )
    watch(
      () => currentMenuCollapse.value,
      () => {
        resizeGraph(300)
      }
    )

    return {
      sectionRef,
      customizeOptions,
      current,
      deleteSection,
      refreshSection,
      handleNodeClick,
      setRef
    }
  }
}
</script>

<style lang="scss">
@import '~#/styles/home.scss';
</style>
