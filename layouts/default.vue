<template>
  <div class="main-layout">
    <div class="w-full bg-brand-green-dark text-white text-sm leading-6 font-medium p-3 text-center sticky top-0 z-20">
      <nuxt-link to="/">
        Tes Masif COVID-19
      </nuxt-link>
    </div>
    <nuxt />
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
