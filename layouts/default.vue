<template>
  <div class="flex flex-wrap main-layout h-screen lg:h-screen">
    <div class="relative sticky w-full z-20">
      <div class="w-full bg-white h-16 leading-6 font-medium p-3 text-center top-0 z-20">
        <nuxt-link to="/">
          <span>
            <img src="/pikobar-header1.svg" class="m-auto">
          </span>
        </nuxt-link>
      </div>
      <div class="overflow-hidden h-1 text-xs flex rounded bg-brand-green-light">
        <div :style="{ width: progress }" class="shadow-none flex flex-col text-center text-white justify-center bg-brand-green" />
      </div>
    </div>
    <div class="content lg:w-5/12 w-full m-auto h-5/6 lg:h-5/6 flex flex-wrap content-center">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    progress: {
      get () {
        return this.$store.state.form.progress
      }
    }
  }
}
</script>
