<template>
  <div class="flex justify-between">
    <button class="w-auto flex items-center justify-center text-base leading-6 font-medium text-brand-green-dark text-center mr-2" @click="prev">
      <svg
        class="h-5 w-auto inline-block mr-2"
        fill="currentColor"
        viewBox="0 0 256 512"
      ><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" /></svg>
      Kembali
    </button>
    <button type="button" class="flex w-1/2 items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center ml-2" @click="nextStep">
      Lanjutkan
      <svg
        class="h-5 w-auto inline-block ml-2"
        viewBox="0 0 256 512"
      ><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" /></svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    backLink: {
      type: String,
      default: null
    }
  },
  methods: {
    nextStep () {
      this.$emit('next')
    },
    prev () {
      if (this.backLink) {
        this.$router.push(this.backLink)
      } else {
        this.$emit('prev')
      }
    }
  }
}
</script>
