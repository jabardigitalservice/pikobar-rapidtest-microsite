<template>
  <div class="mobile-screen">
    <div class="mobile-content">
      <div class="container mx-auto p-8">
        <div class="mt-12 text-lg">
          <img src="/kutip.svg" alt="Tanda kutip" width="25" height="25">
          <div class="pl-8 pr-6">
            <p class="text-lg">
              Pendaftaran Peserta Tes Masif COVID-19 bersifat terbatas dan diprioritaskan <strong>bagi orang yang paling rentan terjangkit wabah virus COVID-19.</strong>
            </p>
            <p class="mt-4">
              Mendaftarkan diri tidak secara otomatis menjamin akses untuk melakukan pengetesan.
            </p>
            <p class="mt-4">
              Peserta akan melalui proses verifikasi dan validasi dari Dinas Kesehatan Kota/Kabupaten dan Dinas Kesehatan Provinsi Jawa Barat, sebelum mendapat undangan melakukan pengetesan.
            </p>
            <button type="button" class="hidden lg:block items-center justify-center px-5 py-3 mt-10 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center" @click="nextStep">
              Ya, Saya Mengerti
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer class="lg:hidden" />
  </div>
</template>

<script>
import Footer from '@/layouts/footer.vue'
export default {
  components: {
    Footer
  },
  methods: {
    nextStep () {
      this.$store.commit('form/RESET_FORM')

      this.$router.replace('/registration')
    }
  }
}
</script>
