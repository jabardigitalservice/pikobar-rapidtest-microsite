<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl text-gray-900 text-center">
      Syarat dan Ketentuan
    </h2>
    <div class="mt-4 text-sm">
      <p>
        Pendaftaran Peserta Rapid Test COVID-19 bersifat terbatas dan diprioritaskan bagi orang yang paling rentan terjangkit wabah virus COVID-19.
      </p>
      <p class="mt-4">
        Mendaftarkan diri tidak secara otomatis menjamin akses untuk melakukan pengetesan.
      </p>
      <p class="mt-4">
        Peserta akan melalui proses verifikasi dan validasi dari Dinas Kesehatan Kota/Kabupaten dan Dinas Kesehatan Provinsi Jawa Barat, sebelum mendapat undangan melakukan pengetesan.
      </p>
    </div>

    <div class="mt-12">
      <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center" @click="nextStep">
        Ya, Saya Mengerti
      </button>
      <nuxt-link to="/" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep () {
      this.$store.commit('form/RESET_FORM')

      this.$router.push('/registration')
    }
  }
}
</script>
