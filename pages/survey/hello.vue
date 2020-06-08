<template>
  <div class="container mx-auto">
    <div class="mobile-screen content-long relative h-screen w-full p-6">
      <div class="mobile-content">
        <img src="/check-ilustration.png" class="mx-auto">

        <h1 class="text-xl font-bold mt-6">
          Hi, {{ applicantName }}
        </h1>
        <p class="mt-4 text-sm">
          Selamat Datang di halaman survei Tes Masif COVID-19 PIKOBAR Jawa Barat. Untuk melengkapi data Anda, kami ingin menanyakan beberapa pertanyaan berikut.
        </p>
      </div>
      <div class="mobile-actions absolute inset-x-0 bottom-0 p-6">
        <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center" @click="nextStep">
          Lanjutkan
        </button>
        <nuxt-link to="/survey" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
          Kembali
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'survey_form',

  computed: {
    ...mapGetters('survey', [
      'registrationCode',
      'applicantName'
    ])
  },

  mounted () {
    // Enable navigation prompt
    window.onbeforeunload = function () {
      return true
    }
  },

  methods: {
    nextStep () {
      return this.$router.push('/survey/q_invitation')
    }
  }
}
</script>
