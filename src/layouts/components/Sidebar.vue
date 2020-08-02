<template>
  <div>
    <a-menu mode="inline">
      <a-menu-item>
        <a-icon type="desktop" />
        <span>Dashboard</span>
      </a-menu-item>
      <a-sub-menu>
        <span slot="title">
          <a-icon type="user" />
          <span>User</span>
        </span>
        <a-menu-item>Tom</a-menu-item>
        <a-menu-item>Bill</a-menu-item>
      </a-sub-menu>
      <a-sub-menu>
        <span slot="title">
          <a-icon type="team" />
          <span>Team</span>
        </span>
        <a-menu-item>Team 1</a-menu-item>
        <a-menu-item>Team 2</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
