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
            {{ format(new Date(birth_year, birth_month, birth_day), 'dd-MM-yyyy') }}
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
        <div v-if="occupationType === 13" class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Nama Pekerjaan
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ occupationName }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Nama Tempat Bekerja
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
            Catatan Lain
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ symptomsNotes }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Status
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ getStatusName(status) }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Pernah berinteraksi dengan dengan kasus suspect/probable/konfirmasi
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ getSuspectProbable(suspectProbable) }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Kota-kota yang dikunjungi dalam 14 hari terakhir
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ cityVisited }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Penyakit bawaan
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            <ul v-if="congenitalDisease.length > 0">
              <li v-for="disease in congenitalDisease" :key="`event-${disease}`" class="mb-4">
                <svg class="h-4 w-4 inline fill-current text-brand-green-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" /></svg>
                {{ getCongenitalDisease(disease) }}
              </li>
            </ul>
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

    <div class="mt-6 text-center">
      <button type="button" class="block flex w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-orange text-center" @click="submit">
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
        Kirim
      </button>
      <nuxt-link to="/registration/status" class="inline-flex items-center justify-center px-2 mb-3 text-base leading-6 font-medium text-brand-green-dark text-center mt-5">
        <svg
          class="h-5 w-auto inline-block mr-2"
          fill="currentColor"
          viewBox="0 0 256 512"
        ><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" /></svg>
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueRecaptcha from 'vue-recaptcha'
import Swal from 'sweetalert2'
import { format } from 'date-fns'
import Cookies from 'js-cookie'

export default {
  components: { VueRecaptcha },

  data () {
    return {
      recaptcha_key: process.env.googleRecaptchaKey,
      recaptcha_response: null,
      registration_code: null,
      loading: false
    }
  },

  computed: {
    ...mapGetters('form', [
      'sessionId',
      'nik',
      'name',
      'address',
      'city_code',
      'district_code',
      'village_code',
      'birth_date',
      'birth_day',
      'birth_month',
      'birth_year',
      'gender',
      'phone_number',
      'email',
      'occupationType',
      'employeeType',
      'occupationName',
      'workplaceName',
      'symptoms',
      'symptomsInteraction',
      'symptomsActivity',
      'symptomsNotes',
      'latitude',
      'longitude',
      'eventsOptions',
      'symptomsOptions',
      'occupationTypeOptions',
      'statusOptions',
      'status',
      'congenitalDisease',
      'suspectProbable',
      'cityVisited',
      'suspectProbableOptions',
      'congenitalDiseaseOptions'
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

    getOccupationName (value) {
      const occupation = this.occupationTypeOptions.find(x => x.value === value)

      return occupation.text
    },

    getSymptomName (value) {
      const symptom = this.symptomsOptions.find(x => x.value === value)

      return symptom.text
    },

    getStatusName (value) {
      const status = this.statusOptions.find(x => x.value === value)

      return status.text
    },

    getEventName (value) {
      const event = this.eventsOptions.find(x => x.value === value)

      return event.text
    },

    getSuspectProbable (value) {
      const event = this.suspectProbableOptions.find(x => x.value === value)

      return event.text
    },

    getCongenitalDisease (value) {
      const event = this.congenitalDiseaseOptions.find(x => x.value === value)

      return event.text
    },

    async submit () {
      this.loading = true

      try {
        const sessionId = Cookies.get('session_id')

        const data = await this.$axios.$post('/api/rdt/register', {
          'g-recaptcha-response': this.recaptcha_response,
          pikobar_session_id: sessionId,
          pikobar_user_id: this.pikobar_user_id,
          nik: this.nik,
          name: this.name,
          address: this.address,
          city_code: this.city_code,
          district_code: this.district_code,
          village_code: this.village_code,
          email: this.email,
          phone_number: this.phone_number,
          gender: this.gender,
          birth_date: this.birth_date,
          occupation_type: this.occupationType,
          occupation_name: `${this.employeeType !== null ? this.employeeType + ' - ' : ''}${this.occupationName}`,
          workplace_name: this.workplaceName,
          symptoms: this.symptoms,
          symptoms_activity: this.symptomsActivity,
          symptoms_interaction: this.symptomsInteraction,
          symptoms_notes: this.symptomsNotes,
          person_status: this.status,
          latitude: this.latitude,
          longitude: this.longitude,
          congenital_disease: this.congenitalDisease,
          suspect_probable: this.suspectProbable,
          city_visited: this.cityVisited
        })

        this.$store.commit('form/SET_RESULT_REGISTRATION_RESULT', {
          registrationCode: data.registration_code,
          downloadUrl: data.download_url
        })

        await Swal.fire('', 'Pendaftaran berhasil. Silahkan unduh bukti pendaftaran pada halaman berikutnya.', 'success')

        this.$router.replace('/registration/done')
      } catch (error) {
        if (error.response && error.response.status === 422) {
          const firstErrorKey = Object.keys(error.response.data.errors)[0]
          const firstMessage = error.response.data.errors[firstErrorKey][0]

          return await Swal.fire('', firstMessage, 'error')
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
