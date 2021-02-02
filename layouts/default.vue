<template>
  <div class="flex flex-wrap main-layout h-screen lg:h-screen">
    <div class="w-full bg-brand-green h-16 leading-6 font-medium p-3 text-center sticky top-0 z-20">
      <nuxt-link to="/">
        <span>
          <img src="/pikobar-header1.svg" class="m-auto">
        </span>
      </nuxt-link>
    </div>
    <div class="content overflow-auto lg:w-5/12 m-auto h-5/6 lg:h-6/6 flex flex-wrap content-center">
      <nuxt />
    </div>
    <footer class="w-full flex content-end bg-black">
      <!-- <Footer class="lg:hidden" /> -->
    </footer>
  </div>
</template>

<script>
// import Footer from '@/layouts/footer.vue'
export default {
  components: {
    // Footer
  },
  mounted () {
    console.log(this.$router.history.current.name)
    // Enable navigation prompt
    // window.onbeforeunload = function () {
    //   return true
    // }
  }
}
</script>
