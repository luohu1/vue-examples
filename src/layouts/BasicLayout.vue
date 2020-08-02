<template>
  <a-layout id="basic-layout">
    <a-layout-header>
      <site-header />
    </a-layout-header>
    <a-layout id="basic-layout-content">
      <a-layout-sider theme="light">
        <sidebar />
      </a-layout-sider>
      <a-layout-content id="main-content">
        <router-view />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>
      <site-footer />
    </a-layout-footer>
  </a-layout>
</template>

<script>
import SiteHeader from './components/SiteHeader'
import Sidebar from './components/Sidebar'
import SiteFooter from './components/SiteFooter'

export default {
  name: 'BasicLayout',
  components: { SiteHeader, Sidebar, SiteFooter }
}
</script>

<style scoped lang="less">
#basic-layout {
  min-height: 100vh;
}
</style>
