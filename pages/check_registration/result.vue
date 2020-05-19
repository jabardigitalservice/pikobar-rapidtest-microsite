<template>
  <div class="container mx-auto p-6">
    <template v-if="status === 'NEW'">
      <h2 class="text-gray-900 text-center">
        Pendaftaran Tes Masif COVID-19 Jawa Barat
      </h2>
    </template>
    <template v-if="status === 'APPROVED' && event !== null && labResult === null">
      <h2 class="text-gray-900 text-center">
        Undangan Tes Masif COVID-19 Jawa Barat
      </h2>
    </template>
    <template v-if="status === 'APPROVED' && labResult !== null">
      <h2 class="text-gray-900 text-center">
        Hasil Tes Masif COVID-19 Jawa Barat
      </h2>
    </template>

    <div class="mt-4">
      <img :src="qrcode" height="320">

      <h1 class="mt-4 text-center">
        <strong>Nomor Pendaftaran:</strong><br>
        <h3 class="text-5xl">
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
                Pendaftaran Anda masih dalam proses verifikasi.
              </p>

              <p class="mt-4">
                Hanya yang <strong>sudah diverifikasi dan dinyatakan memenuhi syarat</strong> oleh Dinas Kesehatan Provinsi atau Dinas Kesehatan Kabupaten/Kota yang akan mendapatkan undangan untuk mengikuti Tes Masif COVID-19 Provinsi Jawa Barat.
              </p>

              <p class="mt-4">
                Undangan akan dikirimkan melalui SMS, Whatsapp, dan Email yang digunakan untuk mendaftar.
              </p>
            </div>
          </div>
        </div>
      </template>

      <template v-if="status === 'APPROVED' && event !== null">
        <p class="mt-4 text-center">
          <strong>Waktu:</strong><br>
          {{ format(new Date(event.start_at), 'eeee, dd MMMM yyyy HH:mm', {locale: lang}) + '-' + format(new Date(event.end_at), 'HH:mm', {locale: lang}) }} WIB
        </p>
        <p class="mt-4 text-center">
          <strong>Tempat:</strong><br>
          {{ event.event_location }}
        </p>

        <template v-if="labResult === null">
          <div class="bg-gray-50 sm:rounded-lg border border-gray-300 mt-8">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="leading-6 font-bold text-gray-900">
                Informasi Penting
              </h3>
              <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                <ol style="list-style: decimal" class="ml-4">
                  <li>
                    Silahkan hadir pada jadwal waktu dan tempat yang sudah ditentukan.
                  </li>
                  <li class="mt-2">
                    Tunjukkan undangan kode elektronik ini pada petugas checkin kehadiran saat tiba di lokasi.
                  </li>
                  <li class="mt-2">
                    Wajib membawa fotokopi identitas (KTP) atau Kartu Keluarga (KK).
                  </li>
                  <li class="mt-2">
                    Wajib menggunakan masker serta mengikuti protokol kesehatan perlidungan diri dan orang lain.
                  </li>
                  <li class="mt-2">
                    Informasi dan pertanyaan lebih lanjut hubungi Pusat Bantuan PIKOBAR: <a href="https://api.whatsapp.com/send?phone=628112093306" class="font-bold">08112093306</a> atau Dinas Kesehatan Kota/Kabupaten setempat.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </template>
        <template v-if="labResult">
          <div class="bg-gray-50 sm:rounded-lg border border-gray-300 mt-8">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="leading-6 font-bold text-gray-900">
                Hasil Pemeriksaan Laboratorium
              </h3>
              <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                <dl>
                  <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                    <dt class="text-sm leading-5 font-bold text-gray-500">
                      {{ getResultCaption(labResult) }}
                    </dt>
                    <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                      <a :href="getResultLink(labResult)" target="_blank" class="font-bold text-blue-600 underline">Baca Penjelasan</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>

    <div class="mt-6">
      <a href="https://api.whatsapp.com/send?phone=628112093306" target="_blank" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Hubungi Pusat Bantuan PIKOBAR
      </a>
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

const resultsCaption = {
  REACTIVE: 'Reaktif',
  NONREACTIVE: 'Non Reaktif',
  INKONKLUSIF: 'Inkonklusif',
  POSITIVE: 'Positif',
  NEGATIVE: 'Negatif'
}

const resultsLink = {
  REACTIVE: 'https://bit.ly/r-PZUWcx',
  NONREACTIVE: 'https://bit.ly/n-7pxhuc',
  INKONKLUSIF: 'https://bit.ly/i-lBD6y',
  POSITIVE: 'https://bit.ly/p-4CaOK',
  NEGATIVE: 'https://bit.ly/n-lzVSM'
}

export default {
  middleware: 'check_result',
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
      'labResult',
      'status'
    ])
  },

  mounted () {
    // Enable navigation prompt
    window.onbeforeunload = function () {
      return true
    }
  },

  methods: {
    format,

    getResultCaption (value) {
      return resultsCaption[value]
    },

    getResultLink (value) {
      return resultsLink[value]
    }
  }
}
</script>
