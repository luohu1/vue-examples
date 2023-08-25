<template>
  <div class="layout-wrapper">
    <router-view />
    <footer>Copyright © 2019-{{ new Date().getFullYear() }} LuoHui</footer>
  </div>
</template>

<style scoped>
.layout-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
