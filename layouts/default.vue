<template>
  <div class="main-layout">
    <div class="w-full bg-white leading-6 font-medium p-3 text-center sticky top-0 z-20">
      <nuxt-link to="/">
        <span>
          <img src="/pikobar-header1.svg" class="m-auto">
        </span>
      </nuxt-link>
    </div>
    <div class="content lg:px-80 h-full lg:h-screen">
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
