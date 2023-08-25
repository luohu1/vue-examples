<template>
  <div class="content-main">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script setup lang="ts">
// ~ is an alias to /src
import HelloWorld from '~/components/HelloWorld.vue';
</script>

<style scoped>
.content-main {
  text-align: center;
}
</style>
