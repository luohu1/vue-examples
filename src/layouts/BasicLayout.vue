<template>
  <a-layout id="basic-layout">
    <a-layout-header id="layout-header">
      <div class="logo"/>
    </a-layout-header>
    <a-layout>
      <a-layout-sider id="layout-sider" theme="light">
        <a-menu mode="inline">
          <a-menu-item>
            <a-icon type="desktop" />
            <span>Dashboard</span>
          </a-menu-item>
          <a-sub-menu>
            <span slot="title"><a-icon type="user"/><span>User</span></span>
            <a-menu-item>Tom</a-menu-item>
            <a-menu-item>Bill</a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <span slot="title"><a-icon type="team"/><span>Team</span></span>
            <a-menu-item>Team 1</a-menu-item>
            <a-menu-item>Team 2</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content id="layout-content">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
          </div>
      </a-layout-content>
    </a-layout>
    <a-layout-footer id="layout-footer">
      Ant Design ©2019 Created by LH
    </a-layout-footer>
  </a-layout>
</template>

<style scoped lang="less">
#basic-layout {
  min-height: 100vh;
  #layout-header {
    background: #555;
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
  }
  // #layout-sider {
  // }
  #layout-content {
    background: #fff;
    padding: '0px';
  }
  #layout-footer {
    background: #555;
    text-align: center;
  }
}
</style>
