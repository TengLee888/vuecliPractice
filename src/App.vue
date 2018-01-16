<template>
  <div id="app">
    <p>i am App.vue</p>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss' scoped='' type='text/css'>
*{
  border:1px solid red;
}
</style>
