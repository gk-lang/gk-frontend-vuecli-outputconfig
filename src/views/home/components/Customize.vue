<!-- 自定义配置 -->
<template>
  <jzt-global-popover
    v-model:visible="showPopover"
    trigger="click"
    popper-class="customize-config-popover"
  >
    <template #reference>
      <el-button type="primary" link>
        <jzt-global-svg icon-class="icon-xinzeng" icon-class-name="icon-plus" />
      </el-button>
    </template>
    <el-input
      class="jzt-global-condition-search"
      suffix-icon="search"
      placeholder="搜索过滤条件"
      v-model="keyword"
      @input="handleInput"
    />
    <el-scrollbar max-height="200">
      <jzt-global-tree
        ref="customizeTreeRef"
        :data="options"
        :default-props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
        @handle-node-click="handleNodeClick"
      />
    </el-scrollbar>
  </jzt-global-popover>
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
  name: 'Customize',
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    defaultProps: {
      type: Object
    }
  },
  setup(props, context) {
    const keyword = ref('')
    const customizeTreeRef = ref(null)
    const showPopover = ref(false)

    const filterNode = (value, data) => {
      if (!value) return true
      return data[props.defaultProps?.label || 'label'].includes(value)
    }

    // 筛选
    const handleInput = () => {
      customizeTreeRef.value.treeRef.filter(keyword.value)
    }

    const handleNodeClick = (obj, node) => {
      showPopover.value = false
      context.emit('nodeClick', obj, node)
    }

    return {
      keyword,
      customizeTreeRef,
      showPopover,
      filterNode,
      handleInput,
      handleNodeClick
    }
  }
}
</script>
