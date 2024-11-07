<template>
  <div class="layout-title">
    <div v-if="options.label" class="layout-title-left">
      <span class="title">{{ options.label }}</span>
    </div>
    <div class="layout-title-right">
      <slot />
      <jzt-global-dropdown
        v-if="showDropdown"
        popover-class="title-tool-popover"
      >
        <template #jztGlobalDropdownLind>
          <div class="layout-title-icon">
            <jzt-global-svg icon-class="icon-daohang-shezhi" size="14" />
          </div>
        </template>
        <template #jztGlobalDropdown>
          <el-dropdown-item v-if="showRefreshIcon" @click="refreshSection">
            <jzt-global-svg icon-class="icon-biaoge-shuaxin" size="12" />
            <span>刷新</span>
          </el-dropdown-item>
          <el-dropdown-item v-if="showDeleteIcon" @click="deleteSection">
            <jzt-global-svg icon-class="icon-shanchu" size="12" />
            <span>删除</span>
          </el-dropdown-item>
        </template>
      </jzt-global-dropdown>
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
  name: 'Title',
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    showDropdown: {
      type: Boolean,
      default: true
    },
    // 删除
    showDeleteIcon: {
      type: Boolean,
      default: true
    },
    // 刷新
    showRefreshIcon: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    // 删除区块
    const deleteSection = () => {
      context.emit('deleteSection')
    }

    // 刷新区块
    const refreshSection = () => {
      context.emit('refreshSection')
    }

    return { deleteSection, refreshSection }
  }
}
</script>
