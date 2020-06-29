<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl text-gray-900 text-center">
      Syarat dan Ketentuan
    </h2>
    <div class="mt-4 text-sm">
      <p>
        Pendaftaran Peserta Tes Masif COVID-19 bersifat terbatas dan diprioritaskan bagi orang yang paling rentan terjangkit wabah virus COVID-19.
      </p>
      <p class="mt-4">
        Mendaftarkan diri tidak secara otomatis menjamin akses untuk melakukan pengetesan.
      </p>
      <p class="mt-4">
        Peserta akan melalui proses verifikasi dan validasi dari Dinas Kesehatan Kota/Kabupaten dan Dinas Kesehatan Provinsi Jawa Barat, sebelum mendapat undangan melakukan pengetesan.
      </p>
    </div>

    <div class="mt-12 text-center">
      <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center" @click="nextStep">
        Ya, Saya Mengerti
      </button>
      <nuxt-link to="/" class="inline-flex items-center justify-center px-2 mb-3 text-base leading-6 font-medium text-brand-green-dark text-center mt-5">
        <svg
          class="h-5 w-auto inline-block mr-2"
          fill="currentColor"
          viewBox="0 0 256 512"
        ><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" /></svg>
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

      this.$router.replace('/registration')
    }
  }
}
</script>
