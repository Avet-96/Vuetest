<template>
  <div>
    <header class="footer text-center py-2 theme-bg-dark">
      <h5 class="text-center text-light">Welcome chat</h5>
    </header>
    <div class="theme-bg-light">
      <router-view/>
    </div>
    <footer class="footer text-center py-2 theme-bg-dark">
      <small class="copyright">Designed with by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying
        Riley</a> for developers</small>
    </footer>
  </div>
</template>

<script>


export default {
  name: "MainLayout",

}
</script>

<style scoped>

</style>
