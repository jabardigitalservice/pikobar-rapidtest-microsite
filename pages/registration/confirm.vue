<template>
  <div class="container mx-auto p-6 h-full">
    <p class="text-base text-brand-grey-dark">
      {{ progress }} Selesai
    </p>
    <div class="text-xl text-brand-grey font-bold mt-4">
      <p>Periksa Isian Data</p>
    </div>
    <div class="py-5 grid gap-4 grid-cols-2">
      <div>
        <p class="text-xs text-brand-grey-dark">
          NIK
        </p>
        <p class="text-lg text-brand-grey">
          {{ nik }}
        </p>
      </div>

      <div>
        <p class="text-xs text-brand-grey-dark">
          Nama Lengkap
        </p>
        <p class="text-lg text-brand-grey">
          {{ name }}
        </p>
      </div>

      <div>
        <p class="text-xs text-brand-grey-dark">
          Tempat Lahir
        </p>
        <p class="text-lg text-brand-grey">
          {{ birth_place }}
        </p>
      </div>

      <div>
        <p class="text-xs text-brand-grey-dark">
          Tanggal Lahir
        </p>
        <p class="text-lg text-brand-grey">
          {{ format(new Date(birth_year, birth_month, birth_day), 'dd-MM-yyyy') }}
        </p>
      </div>

      <div class="col-span-2">
        <p class="text-xs text-brand-grey-dark">
          Tempat tinggal
        </p>
        <p class="text-lg text-brand-grey">
          {{ address }}
        </p>
      </div>

      <div>
        <p class="text-xs text-brand-grey-dark">
          Nomor Telepon (Whatsapp)
        </p>
        <p class="text-lg text-brand-grey">
          {{ phone_number }}
        </p>
      </div>

      <div>
        <p class="text-xs text-brand-grey-dark">
          Email
        </p>
        <p class="text-lg text-brand-grey">
          {{ email || '-' }}
        </p>
      </div>

      <div>
        <p class="text-xs text-brand-grey-dark">
          Jenis Pekerjaan
        </p>
        <p class="text-lg text-brand-grey">
          {{ occupationType ? getOccupationName(occupationType) : '-' }}
        </p>
      </div>

      <div v-if="occupationType === 13">
        <p class="text-xs text-brand-grey-dark">
          Nama Pekerjaan
        </p>
        <p class="text-lg text-brand-grey">
          {{ occupationName }}
        </p>
      </div>

      <div>
        <p class="text-xs text-brand-grey-dark">
          Nama Tempat Bekerja
        </p>
        <p class="text-lg text-brand-grey">
          {{ workplaceName }}
        </p>
      </div>

      <div class="col-span-2">
        <p class="text-xs text-brand-grey-dark">
          Gejala Dialami
        </p>
        <p class="text-lg text-brand-grey">
          <span v-if="symptoms.length > 0">
            <span v-for="symptomValue in symptoms" :key="`event-${symptomValue}`" class="mb-4">
              <svg class="h-4 w-4 inline fill-current text-brand-green-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" /></svg>
              {{ symptomValue ? getSymptomName(symptomValue) : '-' }}.
            </span>
          </span>
        </p>
      </div>

      <div class="col-span-2">
        <p class="text-xs text-brand-grey-dark">
          Penyakit bawaan
        </p>
        <p class="text-lg text-brand-grey">
          <span v-if="congenitalDisease.length > 0">
            <span v-for="disease in congenitalDisease" :key="`event-${disease}`" class="mb-4">
              <svg class="h-4 w-4 inline fill-current text-brand-green-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" /></svg>
              {{ disease ? getCongenitalDisease(disease) : '-' }}.
            </span>
          </span>
        </p>
      </div>

      <div>
        <p class="text-xs text-brand-grey-dark">
          Catatan Lain
        </p>
        <p class="text-lg text-brand-grey">
          {{ symptomsNotes || '-' }}
        </p>
      </div>

      <div>
        <p class="text-xs text-brand-grey-dark">
          Status
        </p>
        <p class="text-lg text-brand-grey">
          {{ status ? getStatusName(status) : '-' }}
        </p>
      </div>

      <div>
        <p class="text-xs text-brand-grey-dark">
          Berkunjung ke luar kota
        </p>
        <p class="text-lg text-brand-grey">
          {{ isCityVisited ? getIsCityVisited(isCityVisited) : '-' }}
        </p>
      </div>

      <div>
        <p class="text-xs text-brand-grey-dark">
          Tujuan Kunjungan
        </p>
        <p class="text-lg text-brand-grey">
          {{ cityVisited }}
        </p>
      </div>
    </div>

    <div class="bg-brand-yellow-lighter border border-brand-yellow-light sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="leading-6 font-bold text-gray-900">
          Perhatian!
        </h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <p>
            Data yang tidak lengkap akan membuat proses verifikasi menjadi terkendala. Pastikan Anda mengisi data dengan benar dan lengkap. Klik "kirim" untuk menyelesaikan proses pendaftaran.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <vue-recaptcha ref="recaptcha" :sitekey="recaptcha_key" :load-recaptcha-script="true" @verify="verifyCaptcha" />
    </div>

    <div class="mt-6 text-center">
      <button type="button" class="block flex w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green text-center" @click="submit">
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
      <nuxt-link to="/registration" class="inline-flex items-center justify-center px-2 mb-3 text-base leading-6 font-medium text-brand-grey-dark text-center mt-5">
        <img src="/back-icon.svg" class="pr-2" alt="Tombol kembali">
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
      'birth_place',
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
      'cityVisited',
      'isCityVisited',
      'cityVisitedOptions',
      'congenitalDiseaseOptions'
    ]),

    progress: {
      get () {
        return this.$store.state.form.progress
      }
    }
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

    getCongenitalDisease (value) {
      const event = this.congenitalDiseaseOptions.find(x => x.value === value)

      return event.text
    },

    getIsCityVisited (value) {
      const data = this.cityVisitedOptions.find(x => x.value === value)

      return data.text
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
          birth_place: this.birth_place,
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
          city_visited: this.cityVisited
        })

        this.$store.commit('form/SET_RESULT_REGISTRATION_RESULT', {
          registrationCode: data.registration_code,
          downloadUrl: data.download_url
        })

        await Swal.fire('', 'Pendaftaran berhasil. Silahkan unduh bukti pendaftaran pada halaman berikutnya.', 'success')
        // conditional route, checking by sessionId
        if (data.status === 'APPROVED') {
          let lastInvitation = null
          lastInvitation = {
            rdt_event_schedule_id: null,
            attended_at: null,
            event: {
              event_name: data.event_name,
              event_location: data.event_location,
              end_at: data.event_end_at,
              start_at: data.event_start_at
            },
            schedule: {
              end_at: data.event_schedule_end_at,
              start_at: data.event_schedule_start_at,
              id: data.registration_code
            }
          }

          this.$store.commit('check/SET_DATA', {
            registrationCode: data.registration_code,
            name: data.name,
            qrcode: data.qr_code,
            registrationPdf: data.download_url,
            invitations: data.invitations,
            lastInvitation,
            status: data.status
          })
          this.$router.replace('/check_registration/result')
        } else {
          this.$router.replace('/registration/done')
        }
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
