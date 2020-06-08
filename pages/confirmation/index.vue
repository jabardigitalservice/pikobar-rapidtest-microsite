<template>
  <div class="container mx-auto p-6">
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
        <button type="submit" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
          Lanjutkan
        </button>
        <a href="https://api.whatsapp.com/send?phone=628112093306" target="_blank" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg bg-brand-yellow-darkest text-white text-center mt-2">
          Hubungi Pusat Bantuan PIKOBAR
        </a>
      </div>
    </form>
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

    async onSubmit () {
      try {
        const { data } = await this.$axios.$post('/api/rdt/check', {
          'g-recaptcha-response': this.recaptcha_response,
          registration_code: this.registration_code
        })

        this.$store.commit('survey/SET_DATA', {
          registrationCode: data.registration_code,
          name: data.name
        })

        return this.$router.replace('/confirmation/hello')
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
      }
    },

    verifyCaptcha (response) {
      this.recaptcha_response = response
    }
  }
}
</script>
