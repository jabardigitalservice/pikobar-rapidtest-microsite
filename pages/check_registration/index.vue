<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl text-gray-900 text-center">
      Cek Pendaftaran &amp; Hasil
    </h2>

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
      <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center" @click="submit">
        Lanjutkan
      </button>
      <a href="https://api.whatsapp.com/send?phone=628112093306" target="_blank" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Hubungi Pusat Bantuan PIKOBAR
      </a>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import VueRecaptcha from 'vue-recaptcha'

export default {
  components: {
    VueRecaptcha
  },

  data () {
    return {
      recaptcha_key: process.env.googleRecaptchaKey,
      recaptcha_response: null,
      registration_code: null
    }
  },

  methods: {
    updateRegistrationCode (newValue) {
      this.registration_code = newValue.toUpperCase()
    },

    async submit () {
      try {
        const { data } = await this.$axios.$post('/api/rdt/check', {
          'g-recaptcha-response': this.recaptcha_response,
          registration_code: this.registration_code
        })

        this.$store.commit('check/SET_DATA', {
          registrationCode: data.registration_code,
          name: data.name,
          qrcode: data.qrcode,
          event: data.event,
          status: data.status
        })

        this.$router.replace('/check_registration/result')
      } catch (error) {
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
      }
    },

    verifyCaptcha (response) {
      this.recaptcha_response = response
    }
  }
}
</script>
