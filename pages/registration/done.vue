<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl text-gray-900 text-center">
      Terima Kasih
    </h2>

    <div class="bg-gray-100 sm:rounded-lg my-6">
      <div class="px-4 py-5 sm:p-6">
        <div class="mt-2 max-w-xl text-gray-900 text-center">
          <p>
            Nomor Pendaftaran
          </p>
          <p class="text-3xl font-bold">
            {{ registrationCode }}
          </p>
        </div>
      </div>
    </div>

    <p class="mt-4 text-sm">
      Simpan nomor pendaftaran Anda berikut ini.
    </p>

    <p class="mt-4 text-sm">
      Data Anda telah tersimpan dalam sistem. Selanjutnya Dinas Kesehatan Kabupaten/Kota dan Dinas Kesehatan Provinsi Jawa Barat akan melakukan verifikasi sesuai kriteria.
    </p>

    <p class="mt-4 text-sm">
      Jika Anda memenuhi syarat dan verifikasi, Anda akan mendapatkan pemberitahuan undangan melalui Nomor Telepon (SMS, Whatsapp) untuk mengikuti COVID-19 Test.
    </p>

    <p class="mt-4 text-sm">
      Untuk memeriksa status proses pendaftaran Anda, gunakan fitur <strong>Cek Status Pendaftaran</strong> pada halaman depan.
    </p>

    <div class="mt-12 text-center">
      <a :href="downloadUrl" target="_blank" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Unduh Bukti Pendaftaran
      </a>
      <nuxt-link to="/" class="inline-flex items-center justify-center px-2 mb-3 text-base leading-6 font-medium text-brand-green-dark text-center mt-5">
        <svg
          class="h-5 w-auto inline-block mr-2"
          fill="currentColor"
          viewBox="0 0 256 512"
        ><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" /></svg>
        Kembali Ke Depan
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('form', [
      'registrationCode',
      'downloadUrl'
    ])
  },

  mounted () {
    // Enable navigation prompt
    window.onbeforeunload = function () {
      return true
    }
  }
}
</script>
