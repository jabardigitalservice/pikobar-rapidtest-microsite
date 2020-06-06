<template>
  <div class="container mx-auto">
    <div class="relative h-screen w-full p-6" style="height: calc(100vh - 48px); max-height: 640px">
      <p>
        Apakah Anda pernah mendapatkan undangan mengikuti Tes Masif COVID-19 dari PIKOBAR?
      </p>
      <div class="absolute inset-x-0 bottom-0 p-6">
        <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white text-center" @click="nextStep">
          Ya
        </button>
        <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white text-center mt-2">
          Tidak
        </button>
      </div>
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
