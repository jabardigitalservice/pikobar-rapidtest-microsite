<template>
  <div class="container mx-auto">
    <div class="relative h-screen w-full p-6" style="height: calc(100vh - 48px); max-height: 640px">
      <img src="/check-ilustration.png" class="mx-auto">

      <template v-if="error === false">
        <h1 class="text-xl font-bold mt-6">
          Hi, {{ applicantName }}
        </h1>
        <p class="mt-4 text-sm">
          {{ text }}
        </p>
        <div class="absolute inset-x-0 bottom-0 p-6">
          <nuxt-link to="/" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
            Selesai
          </nuxt-link>
        </div>
      </template>
      <template v-else>
        <p class="mt-4 text-sm">
          Telah terjadi kesalahan sistem. Silahkan coba simpan ulang kembali.
        </p>
        <div class="absolute inset-x-0 bottom-0 p-6">
          <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-orange text-center" @click="submit">
            Simpan Ulang
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  middleware: 'survey_form',
  data () {
    return {
      error: false,
      text: null
    }
  },

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

    this.submit()
  },

  methods: {
    async submit () {
      try {
        await this.$axios.$post('/api/rdt/survey', {
          //
        })

        this.error = false
        this.setText()
        await Swal.fire('', 'Data berhasil disimpan.', 'success')

      } catch (error) {
        this.error = true
        if (error.response && error.response.status === 422) {
          const firstErrorKey = Object.keys(error.response.data.errors)[0]
          const firstMessage = error.response.data.errors[firstErrorKey][0]

          return await Swal.fire('', firstMessage, 'error')
        }

        return await Swal.fire('Telah terjadi kesalahan sistem', 'Silahkan ulangi beberapa saat kembali.', 'error')
      } finally {
        //
      }
    },

    setText () {
      this.text = 'Terima kasih atas kesediaan Anda telah mengisi survei dari kami.'

      const type = this.$route.query.type

      if (type === 'attended') {
        this.text = 'Terima kasih Anda sudah mengikuti tes tersebut.'
      }
    }
  }
}
</script>
