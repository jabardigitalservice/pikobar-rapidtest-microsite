<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl text-gray-900 text-center">
      Cek Pendaftaran &amp; Hasil
    </h2>

    <form @submit.prevent="onSubmit">
      <div class="mt-4">
        <label class="block text-sm font-medium leading-5 text-gray-700">Nomor Pendaftaran</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input :value="registration_code" type="text" class="form-input block w-full" @input="updateRegistrationCode($event.target.value)">
        </div>
      </div>

      <div class="mt-4">
        <label class="block text-sm font-medium leading-5 text-gray-700">Berilah Tanda Centang</label>
        <div class="mt-1">
          <vue-recaptcha ref="recaptcha" :sitekey="recaptcha_key" :load-recaptcha-script="true" @verify="verifyCaptcha" />
        </div>
      </div>

      <div class="mt-12">
        <button type="submit" class="w-full flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center" :disabled="loading">
          <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Lanjutkan
        </button>
        <button-link-call-center />
      </div>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import VueRecaptcha from 'vue-recaptcha'
import ButtonLinkCallCenter from '@/components/ButtonLinkCallCenter'

export default {
  components: {
    VueRecaptcha,
    ButtonLinkCallCenter
  },

  data () {
    return {
      recaptcha_key: process.env.googleRecaptchaKey,
      recaptcha_response: null,
      registration_code: null,
      loading: false
    }
  },

  methods: {
    updateRegistrationCode (newValue) {
      this.registration_code = newValue.toUpperCase()
    },

    async onSubmit () {
      this.loading = true

      try {
        const { data } = await this.$axios.$post('/api/rdt/check', {
          'g-recaptcha-response': this.recaptcha_response,
          registration_code: this.registration_code
        })

        let lastInvitation = null

        if (data.invitations.length > 0) {
          [lastInvitation] = data.invitations.slice(-1)
        }

        this.$store.commit('check/SET_DATA', {
          registrationCode: data.registration_code,
          name: data.name,
          qrcode: data.qrcode,
          registrationPdf: data.registration_pdf,
          invitations: data.invitations,
          lastInvitation,
          status: data.status
        })

        if (lastInvitation && lastInvitation.lab_result_type) {
          return this.$router.replace('/check_registration/result_test')
        }

        return this.$router.replace('/check_registration/result')
      } catch (error) {
        if (typeof error.response === 'undefined') {
          return await Swal.fire('', 'Gagal menyambungkan ke server, silahkan coba beberapa saat kembali.', 'error')
        }

        if (error.response.status === 422) {
          const firstErrorKey = Object.keys(error.response.data.errors)[0]
          const firstMessage = error.response.data.errors[firstErrorKey][0]

          return await Swal.fire('', firstMessage, 'error')
        }

        if (error.response.status === 404) {
          return await Swal.fire('', 'Nomor Pendaftaran tidak ditemukan.', 'error')
        }

        return await Swal.fire('Telah terjadi kesalahan sistem', 'Silahkan ulangi beberapa saat kembali.', 'error')
      } finally {
        this.recaptcha_response = null
        this.$refs.recaptcha.reset()
        this.loading = false
      }
    },

    verifyCaptcha (response) {
      this.recaptcha_response = response
    }
  }
}
</script>
