<template>
  <div class="container mx-auto">
    <div class="relative h-screen w-full p-6" style="height: calc(100vh - 48px); max-height: 640px">
      <p>
        Metode tes COVID-19 apakah yang Anda ikuti tersebut?
      </p>
      <div class="absolute inset-x-0 bottom-0 p-6">
        <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white text-center">
          Tidak Tahu
        </button>
        <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white text-center mt-2">
          Rapid Test
        </button>
        <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white text-center mt-2">
          PCR/Swab
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep () {
      // return this.$router.push('/confirmation/q_invitation')
    }
  }
}
</script>
