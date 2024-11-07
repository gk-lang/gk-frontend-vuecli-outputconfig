<template>
  <el-config-provider :z-index="3000" :locale="locale" size="small">
    <router-view />
  </el-config-provider>
</template>

<script>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useVueApiEffect, useStoreEffect } from '#/effects/computedStore'
import { getTokenCookie, getQueryString, setTokenCookie } from '#/utils'


export default {
  setup() {
    const { store, router, route } = useVueApiEffect()

    const { currentTabNav } = useStoreEffect()
    // 监听浏览器的刷新

    if (getTokenCookie()) {
      window.addEventListener('load', () => {
        const urlParams = getQueryString(route.fullPath)
        // 链接中带有token的不执行后面操作
        if (urlParams.token) {
          setTokenCookie(urlParams.token)
          return false
        }
        // console.log('浏览器刷新了')
        store.commit('setTabsNavData', [store.state.homeNavData])
        store.commit('setCurrentTabNav', 'Home')
        router.push({
          path: '/'
        })
      })
      // 浏览器前进后退监听
      window.addEventListener('popstate', () => {
        const urlParams = getQueryString(route.fullPath)
        // 链接中带有token的不执行后面操作
        if (urlParams.token) {
          setTokenCookie(urlParams.token)
          return false
        }
        if (urlParams.menuId !== currentTabNav.value) {
          store.commit('setCurrentTabNav', urlParams.menuId)
        }
      })
    }
    // end

    return {
      locale: zhCn
    }
  }
}
</script>

<style lang="scss"></style>
