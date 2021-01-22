<template>
  <div class="w-full bg-white leading-6 font-medium p-3 text-center sticky bottom-0 z-20 h-16 shadow">
    <button type="button" class="block w-4/5 items-center justify-center m-auto px-5 py-2 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center" @click="nextStep">
      Ya, Saya Mengerti
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    nextStep () {
      this.$store.commit('form/RESET_FORM')

      this.$router.replace('/registration')
    }
  }
}
</script>
