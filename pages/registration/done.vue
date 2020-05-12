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
      Data Anda telah tersimpan dalam sistem. Selanjutnya Dinas Kesehatan Kabupaten/Kota dan Dinas Kesehatan Provinsi Jawa Barat akan melakukan verifikasi sesuai kriteria.
    </p>

    <p class="mt-4 text-sm">
      Jika Anda memenuhi syarat dan verifikasi, Anda akan mendapatkan pemberitahuan undangan melalui Nomor Telepon (SMS, Whatsapp) serta Email.
    </p>

    <p class="mt-4 text-sm">
      Untuk memeriksa status proses pendaftaran Anda, gunakan fitur <strong>Cek Status Pendaftaran</strong> pada halaman depan.
    </p>

    <div class="mt-12">
      <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Unduh Bukti Pendaftaran
      </a>
      <nuxt-link to="/" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali ke Depan
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('form', [
      'registrationCode'
    ])
  }
}
</script>
