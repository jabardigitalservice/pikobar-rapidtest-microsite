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
      <form-actions back-link="/survey" @next="nextStep" />
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
