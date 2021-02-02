<template>
  <div class="flex justify-between">
    <button class="w-auto flex items-center justify-center text-base leading-6 font-medium text-brand-grey-dark text-center mr-2" @click="prev">
      <img src="/back-icon.svg" class="pr-2" alt="Tombol kembali">
      Kembali
    </button>
    <button type="button" class="flex w-1/4 items-center justify-center px-5 py-2 text-base leading-6 font-medium rounded-lg text-white bg-brand-green text-center ml-2" @click="nextStep">
      Lanjutkan
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
