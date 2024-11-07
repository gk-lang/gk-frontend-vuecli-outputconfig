<!-- 我的应用 -->
<template>
  <div class="application">
    <div class="application-title layout-title">
      <div class="layout-title-left">
        <span class="title">我的应用</span>
      </div>
      <div class="layout-title-right">
        <div
          v-if="applicationListWidth > applicationBodyWidth"
          class="layout-title-icon"
          @click="scrollToLeft"
        >
          <jzt-global-svg
            icon-class="icon-shouye-gengduo1"
            icon-class-name="icon-prev"
          />
        </div>
        <div
          v-if="applicationListWidth > applicationBodyWidth"
          class="layout-title-icon"
          @click="scrollToRight"
        >
          <jzt-global-svg
            icon-class="icon-shouye-gengduo1"
            icon-class-name="icon-next"
          />
        </div>
      </div>
    </div>
    <div ref="applicationBodyRef" class="application-body">
      <div
        :class="{
          'application-list-flex': applicationListWidth > applicationBodyWidth
        }"
      >
        <el-scrollbar ref="applicationScrollRef">
          <draggable
            ref="applicationListRef"
            v-model="collectMenu"
            item-key="menu_id"
            ghost-class="ghostClass"
            chosen-class="chosenClass"
            :force-fallback="true"
            animation="300"
            :class="{
              'application-list': collectMenu.length > 0
            }"
            @end="onDraggableEnd"
          >
            <template #item="{ element }">
              <div class="application-item-wrapper">
                <div
                  class="application-item"
                  @click="handleApplicationClick(element)"
                >
                  <div class="menu">
                    <div class="menu-icon">
                      <img
                        :src="
                          require(
                            `@/assets/images/home/menu-icon-${element.index % 10 === 0 ? 10 : element.index % 10}.png`
                          )
                        "
                      />
                    </div>
                    <span class="menu-name">{{ element.menu_name }}</span>
                  </div>
                  <div
                    class="application-delete"
                    @click.stop="deleteApplication(element)"
                  >
                    <jzt-global-icon icon-class-name="icon-delete">
                      <i-ep-circle-close-filled />
                    </jzt-global-icon>
                  </div>
                </div>
              </div>
            </template>
          </draggable>
          <!-- <ul
            ref="applicationListRef"
            :class="{'application-list': collectMenu.length > 0}"
          >
            <li
              class="application-item"
              v-for="(item, index) in collectMenu"
              :key="index"
              @click="handleApplicationClick(item)"
            >
              <div class="menu">
                <div class="menu-icon">
                  <img :src="require(`@/assets/images/home/menu-icon-${(index % 10) + 1}.png`)" />
                </div>
                <span class="menu-name">{{ item.menu_name }}</span>
              </div>
              <div
                class="application-delete"
                @click.stop="deleteApplication(item)"
              >
                <jzt-global-icon icon-class-name="icon-delete">
                  <i-ep-circle-close-filled />
                </jzt-global-icon>
              </div>
            </li>
          </ul> -->
        </el-scrollbar>
      </div>

      <div class="add" v-if="collectMenu.length < 10">
        <customize
          :options="currentUser.menuData"
          :default-props="{ label: 'menu_name', children: 'children' }"
          :disabled-parent-node="false"
          @node-click="handleNodeClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
// 拖曳排序插件
import draggable from 'vuedraggable'
import Customize from './Customize.vue'
import { useStoreEffect } from '#/effects/computedStore'
import { useOpenMenu } from '#/effects/menu'
import { getFontSize, errorMessage } from '#/utils'
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
  name: 'Application',
  components: {
    draggable,
    Customize
  },
  setup(props, context) {
    const { currentUser } = useStoreEffect()
    // 打开菜单
    const { handleMenuClick } = useOpenMenu(
      {
        isOpen: true,
        menuObjField: {
          // 菜单对象字段名
          menuId: 'menu_id',
          menuName: 'menu_name',
          menuIcon: 'menu_icon',
          menuConfig: 'menu_config',
          menuUrl: 'menu_url',
          docUrl: 'doc_url',
          singleTenant: 'single_tenant',
          singleWarehouse: 'single_warehouse'
        },
        router: false
      },
      context
    )

    const cookieApplication = localStorage.getItem('application')
    const collectMenu = ref(
      cookieApplication ? JSON.parse(cookieApplication) : []
    )
    const applicationBodyRef = ref(null)
    const applicationListRef = ref(null)
    const applicationScrollRef = ref(null)
    const applicationBodyWidth = ref(0)
    const applicationListWidth = ref(0)

    // 新增
    const handleNodeClick = (obj, node) => {
      if (collectMenu.value.length >= 10) {
        errorMessage('最多只能添加10个菜单快捷方式')
        return false
      }
      obj.index = collectMenu.value.length + 1
      obj.order = collectMenu.value.length + 1
      collectMenu.value.push(obj)
      localStorage.setItem('application', JSON.stringify(collectMenu.value))
      // 先加一个宽度做缓冲，避免页面出现一闪的滚动条
      applicationListWidth.value =
        getApplicationListWidth() + getFontSize() * 1.28
      nextTick(() => {
        // 页面渲染完成，再获取真实的宽度
        if (applicationListRef.value) {
          applicationListWidth.value = getApplicationListWidth()
        }
      })
    }

    // 删除
    const deleteApplication = obj => {
      collectMenu.value = collectMenu.value.filter(
        item => item.order !== obj.order
      )
      localStorage.setItem('application', JSON.stringify(collectMenu.value))
      nextTick(() => {
        // 页面渲染完成，再获取真实的宽度
        if (applicationListRef.value) {
          applicationListWidth.value = getApplicationListWidth()
        }
      })
    }

    // 拖动结束，改变顺序
    const onDraggableEnd = () => {
      collectMenu.value.forEach((item, index) => {
        item.order = index + 1
      })
      localStorage.setItem('application', JSON.stringify(collectMenu.value))
    }

    // 点击应用
    const handleApplicationClick = obj => {
      handleMenuClick(obj)
    }

    // 获取application-body的宽度
    const getApplicationBodyWidth = () => {
      return applicationBodyRef.value?.clientWidth - getFontSize() * 1.2
    }

    // 获取application-list的宽度
    const getApplicationListWidth = () => {
      return applicationListRef.value?.$el?.scrollWidth
    }

    const scrollToRight = () => {
      const scrollLeft = applicationScrollRef.value.wrapRef.scrollLeft
      applicationScrollRef.value.setScrollLeft(scrollLeft + 120)
    }

    const scrollToLeft = () => {
      const scrollLeft = applicationScrollRef.value.wrapRef.scrollLeft
      applicationScrollRef.value.setScrollLeft(scrollLeft - 120)
    }

    watch(
      () => applicationBodyRef.value,
      () => {
        if (applicationBodyRef.value) {
          applicationBodyWidth.value = getApplicationBodyWidth()
        }
      }
    )
    watch(
      () => applicationListRef.value,
      () => {
        if (applicationListRef.value) {
          applicationListWidth.value = getApplicationListWidth()
        }
      }
    )

    return {
      collectMenu,
      applicationBodyRef,
      applicationListRef,
      applicationScrollRef,
      currentUser,
      handleNodeClick,
      deleteApplication,
      onDraggableEnd,
      handleApplicationClick,
      applicationBodyWidth,
      applicationListWidth,
      scrollToRight,
      scrollToLeft
    }
  }
}
</script>

<style lang="scss" scoped>
.application {
  width: 100%;
  .application-body {
    display: flex;
  }
  .application-list {
    display: flex;
    padding-right: 0.08rem;
    // overflow: hidden;
    padding-top: 0.08rem;
    margin-left: -0.08rem;
    .application-item {
      background: #f5f8ff;
      border-radius: 0.04rem;
      // padding: 0.06rem 0.16rem 0.16rem;
      padding: 0 0.16rem;
      box-sizing: border-box;
      cursor: pointer;
      position: relative;
      height: 1.2rem;
      .menu {
        @include jztFlexColumnCenter();
        .menu-name {
          font-size: 0.16rem;
          white-space: nowrap;
        }
        .menu-icon {
          width: 0.8rem;
          height: 0.8rem;
          overflow: hidden;
        }
      }
      .application-delete {
        display: none;
        position: absolute;
        right: -0.08rem;
        top: -0.08rem;
        :deep(.icon-delete) {
          color: $jzt-color-border-1;
          &:hover {
            color: var(--el-color-primary);
          }
        }
      }
      // & + .application-item {
      //   margin-left: 0.16rem;
      // }
      &:hover {
        .application-delete {
          display: block;
        }
      }
      &-wrapper {
        padding: 0 0.08rem;
      }
    }
    &-flex {
      flex: 1;
      width: 0;
      & + .add {
        margin-left: 0.08rem;
      }
    }
  }
  .add {
    margin-top: 0.08rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.04rem;
    border: 0.02rem dashed $jzt-color-border-1;
    box-sizing: border-box;
    @include jztFlexRowCenter();
  }
}
</style>
