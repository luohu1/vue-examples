<template>
  <div>
    <router-link to='/'>
      <h1>{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      title: 'Vue Example'
    }
  }
}
</script>
