<template>
  <div class="main-layout h-screen lg:h-screen">
    <div class="w-full bg-white leading-6 font-medium p-3 text-center sticky top-0 z-20">
      <nuxt-link to="/">
        <span>
          <img src="/pikobar-header1.svg" class="m-auto">
        </span>
      </nuxt-link>
    </div>
    <div class="content lg:w-5/12 m-auto h-5/6 lg:h-6/6 flex flex-wrap content-center">
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
