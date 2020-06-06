<template>
  <div class="container mx-auto p-6">
    <img src="/check-ilustration.png" class="mx-auto">

    <h1 class="text-xl font-bold mt-6">
      Hi, Ahmad Yurianto
    </h1>
    <p class="mt-4 text-sm">
      Selamat Datang di halaman konfirmasi undangan Tes Masif COVID-19 PIKOBAR Jawa Barat. Untuk melengkapi data Anda kami ingin menanyakan beberapa pertanyaan berikut.
    </p>
    <div class="mt-6">
      <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center" @click="nextStep">
        Lanjutkan
      </button>
      <nuxt-link to="/confirmation" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep () {
      return this.$router.push('/confirmation/q_invitation')
    }
  }
}
</script>
