<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#1677ff',
        fontSize: 16,
        sizeStep: 4,
      },
    }">
    <a-layout class="layout">
      <a-layout-header class="site-header">
        <div class="logo"></div>
      </a-layout-header>
      <a-layout-content class="site-content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="site-footer">
        <a-typography-text>Copyright ©2023 LuoHui</a-typography-text>
      </a-layout-footer>
    </a-layout>
  </a-config-provider>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout .site-header .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px 0;
}

.layout .site-content {
  flex: 1 1 auto;
}

.layout .site-footer {
  text-align: center;
}
</style>
