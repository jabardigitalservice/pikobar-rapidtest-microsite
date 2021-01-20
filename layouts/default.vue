<template>
  <div class="main-layout">
    <div class="w-full bg-white leading-6 font-medium p-3 text-center sticky top-0 z-20">
      <nuxt-link to="/">
        <span>
          <img src="/pikobar-header2.png" class="m-auto" width="300px" height="80px">
        </span>
      </nuxt-link>
    </div>
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    // Enable navigation prompt
    // window.onbeforeunload = function () {
    //   return true
    // }
  }
}
</script>
