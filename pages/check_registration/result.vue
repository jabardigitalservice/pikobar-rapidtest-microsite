<template>
  <div class="container mx-auto p-6">
    <h2 class="text-gray-900 text-center">
      Pendaftaran Test COVID-19
    </h2>

    <div class="mt-4">
      <img :src="qrcode" height="320">

      <h1 class="mt-4 text-center">
        <strong>Nomor Pendaftaran:</strong><br>
        <h3 class="text-6xl">
          {{ registrationCode }}
        </h3>
      </h1>

      <h1 class="mt-4 text-center">
        <strong>Nama Peserta:</strong><br>
        {{ name }}
      </h1>

      <template v-if="status === 'NEW'">
        <div class="bg-gray-50 sm:rounded-lg border border-gray-300 mt-8">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="leading-6 font-bold text-gray-900">
              Proses Verifikasi
            </h3>
            <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <p>
                Permohonan pendaftaran Anda masih dalam proses verifikasi untuk memenuhi syarat.
              </p>

              <p class="mt-4">
                Hanya yang sudah diverifikasi oleh Dinas Kesehatan Provinsi atau Dinas Kesehatan Kabupaten/Kota akan mendapatkan undangan untuk mengikuti COVID-19 Test. Undangan akan dikirimkan melalui SMS, Whatsapp, dan Email yang digunakan untuk mendaftar.
              </p>
            </div>
          </div>
        </div>
      </template>

      <template v-if="status === 'APPROVED' && event !== null">
        <p class="mt-4 text-center">
          <strong>Waktu:</strong><br>
          {{ format(new Date(event.start_at), 'eeee, dd MMMM yyyy HH:mm', {locale: lang}) }} WIB
        </p>
        <p class="mt-4 text-center">
          <strong>Tempat:</strong><br>
          {{ event.event_location }}
        </p>
      </template>
    </div>

    <div class="mt-6">
      <nuxt-link to="/check_registration" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export default {
  layout: 'full-layout',

  components: {
    //
  },

  data () {
    return {
      lang: id
    }
  },

  computed: {
    ...mapGetters('check', [
      'registrationCode',
      'name',
      'qrcode',
      'event',
      'status'
    ])
  },

  methods: {
    format
  }
}
</script>
