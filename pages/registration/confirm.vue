<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl text-gray-900 text-center">
      Periksa Isian Data
    </h2>

    <p class="mt-4 text-sm">
      Klik tombol <strong>Kirim</strong> untuk menyelesaikan proses pendaftaran Anda.
    </p>

    <div class="py-5">
      <dl>
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Nama Lengkap
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ name }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            NIK
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ nik }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Tanggal Lahir
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            15 November 1989
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Alamat Domisili
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ address }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Nomor Telepon (Whatsapp)
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ phone_number }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Email
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ email }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Jenis Pekerjaan
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ getOccupationName(occupationType) }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Nama Pekerjaan
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ workplaceName }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Gejala Dialami
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            <ul v-if="symptoms.length > 0">
              <li v-for="symptomValue in symptoms" :key="`event-${symptomValue}`" class="mb-4">
                <svg class="h-4 w-4 inline fill-current text-brand-green-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" /></svg>
                {{ getSymptomName(symptomValue) }}
              </li>
            </ul>
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Riwayat Kontak
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Ya
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Riwayat Kegiatan
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            <ul v-if="symptomsActivity.length > 0">
              <li v-for="eventValue in symptomsActivity" :key="`event-${eventValue}`" class="mb-4">
                <svg class="h-4 w-4 inline fill-current text-brand-green-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" /></svg>
                {{ getEventName(eventValue) }}
              </li>
            </ul>
            <p v-if="symptomsActivity.length === 0">
              Tidak ada.
            </p>
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Catatan Lain
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ symptomsNotes }}
          </dd>
        </div>
      </dl>
    </div>

    <div class="bg-red-50 sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="leading-6 font-bold text-gray-900">
          Perhatian
        </h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <p>
            Data yang tidak lengkap akan membuat proses verifikasi menjadi terkendala. Pastikan data yang Anda isikan benar dan lengkap.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <vue-recaptcha ref="recaptcha" :sitekey="recaptcha_key" :load-recaptcha-script="true" @verify="verifyCaptcha" />
    </div>

    <div class="mt-6">
      <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-orange text-center" @click="submit">
        Kirim
      </button>
      <nuxt-link to="/registration/additional" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueRecaptcha from 'vue-recaptcha'
import Swal from 'sweetalert2'

export default {
  components: { VueRecaptcha },

  data () {
    return {
      recaptcha_key: process.env.googleRecaptchaKey,
      recaptcha_response: null,
      registration_code: null
    }
  },

  computed: {
    ...mapGetters('form', [
      'nik',
      'name',
      'address',
      'phone_number',
      'email',
      'occupationType',
      'workplaceName',
      'symptoms',
      'symptomsInteraction',
      'symptomsActivity',
      'symptomsNotes',
      'eventsOptions',
      'symptomsOptions',
      'occupationTypeOptions'
    ])
  },

  methods: {
    getOccupationName (value) {
      const occupation = this.occupationTypeOptions.find(x => x.value === value)

      return occupation.text
    },

    getSymptomName (value) {
      const symptom = this.symptomsOptions.find(x => x.value === value)

      return symptom.text
    },

    getEventName (value) {
      const event = this.eventsOptions.find(x => x.value === value)

      return event.text
    },

    async submit () {
      try {
        await this.$axios.$post('/api/rdt/register', {
          'g-recaptcha-response': this.recaptcha_response
        })

        return await Swal.fire('', 'Sukses', 'success')
      } catch (error) {
        if (error.response.status === 422) {
          const firstErrorKey = Object.keys(error.response.data.errors)[0]
          const firstMessage = error.response.data.errors[firstErrorKey][0]

          return await Swal.fire('', firstMessage, 'error')
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
