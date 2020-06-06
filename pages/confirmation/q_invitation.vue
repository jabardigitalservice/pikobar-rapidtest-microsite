<template>
  <div class="container mx-auto p-6">
    <p>
      Apakah Anda pernah mendapatkan undangan mengikuti Tes Masif COVID-19 dari PIKOBAR?
    </p>

    <div class="mt-24">
      <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white text-center" @click="nextStep">
        Ya
      </button>
      <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white text-center mt-2">
        Tidak
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep () {
      return this.$router.push('/confirmation/q_attend')
    }
  }
}
</script>
