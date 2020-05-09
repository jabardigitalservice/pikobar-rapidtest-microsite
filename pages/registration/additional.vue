<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <validation-provider v-slot="{ errors }" name="Gejala" rules="required">
        <p class="mt-4 text-sm font-medium">
          Apakah mengalami gejala-gejala berikut ini?
        </p>
        <p v-if="errors.length > 0" class="mt-2 text-sm text-red-600">
          <svg class="h-5 w-5 text-red-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          {{ errors[0] }}
        </p>

        <div v-for="symptomOption in symptomsOptions" :key="`symtomp-${symptomOption.value}`" class="mt-3">
          <div class="relative flex items-start">
            <div class="absolute flex items-center h-5">
              <input v-model="symptoms" :value="symptomOption.value" type="checkbox" class="form-checkbox h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out">
            </div>
            <div class="pl-6 text-sm leading-5">
              <label class="text-gray-700">{{ symptomOption.text }}</label>
            </div>
          </div>
        </div>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="Riwayat Kontak" rules="required">
        <p class="mt-8 text-sm font-medium">
          Apakah pernah berinteraksi dengan ODP/PDP/Positif COVID-19?
        </p>

        <p class="mt-3 text-sm text-gray-700">
          <strong>ODP:</strong> Orang Dalam Pemantauan (orang ini sempat bepergian ke negara yang menjadi pusat COVID 19. ODP juga adalah orang yang pernah berinteraksi dengan pasien positif COVID 19, tapi belum menunjukan gejala.<br><br>
          <strong>PDP:</strong> Pasien Dalam Pengawasan (pasien ini sudah dirawat oleh tenaga kesehatan (menjadi pasien) dan menunjukkan gejala sakit seperti demam, batuk, pilek dan sesak napas.
        </p>

        <p v-if="errors.length > 0" class="mt-2 text-sm text-red-600">
          <svg class="h-5 w-5 text-red-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          {{ errors[0] }}
        </p>

        <div class="mt-6">
          <div class="flex items-center">
            <input v-model="contact" name="contact" type="radio" class="form-radio h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out" value="0">
            <label class="ml-3">
              <span class="block text-sm leading-5 font-medium text-gray-700">Ya</span>
            </label>
          </div>
          <div class="mt-2 flex items-center">
            <input v-model="contact" name="contact" type="radio" class="form-radio h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out" value="1">
            <label class="ml-3">
              <span class="block text-sm leading-5 font-medium text-gray-700">Tidak</span>
            </label>
          </div>
          <div class="mt-2 flex items-center">
            <input v-model="contact" name="contact" type="radio" class="form-radio h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out" value="2">
            <label class="ml-3">
              <span class="block text-sm leading-5 font-medium text-gray-700">Tidak Tahu</span>
            </label>
          </div>
        </div>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="Riwayat Kegiatan">
        <p class="mt-8 text-sm font-medium">
          Apakah pernah datang di kegiatan-kegiatan berikut ini?
        </p>

        <p v-if="errors.length > 0" class="mt-2 text-sm text-red-600">
          <svg class="h-5 w-5 text-red-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          {{ errors[0] }}
        </p>

        <div v-for="eventOption in eventsOptions" :key="`event-${eventOption.value}`" class="mt-3">
          <div class="relative flex items-start">
            <div class="absolute flex items-center h-5">
              <input v-model="events" :value="eventOption.value" type="checkbox" class="form-checkbox h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out">
            </div>
            <div class="pl-6 text-sm leading-5">
              <label class="text-gray-700">{{ eventOption.text }}</label>
            </div>
          </div>
        </div>
      </validation-provider>
    </ValidationObserver>

    <div class="mt-12">
      <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center" @click="nextStep">
        Lanjutkan
      </button>
      <nuxt-link to="/registration/occupation" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/id.json'

extend('required', {
  ...required,
  message: messages.required
})

export default {
  components: { ValidationObserver, ValidationProvider },

  data () {
    return {
      symptomsOptions: [
        { value: 1, text: 'Batuk' },
        { value: 2, text: 'Menggigil' },
        { value: 3, text: 'Nyeri Abdomen' },
        { value: 4, text: 'Pilek' },
        { value: 5, text: 'Sakit Tenggorokan' },
        { value: 6, text: 'Suhu Tubuh < 38' },
        { value: 7, text: 'Lemah (malaise)' },
        { value: 8, text: 'Mual atau Muntah' },
        { value: 9, text: 'Nyeri Otot' },
        { value: 10, text: 'Sakit Kepala' },
        { value: 11, text: 'Sesak Napas' },
        { value: 12, text: 'Suhu Tubuh >= 38 C' }
      ],
      eventsOptions: [
        { value: 1, text: 'Seminar Platform Bisnis Tanpa Riba di Sentul, Kabupaten Bogor (25-28 Februari)' },
        { value: 2, text: 'Seminar Gereja Protestan di Indonesia Bagian Barat / GPIB di Hotel Aston Bogor (26 - 29 Februari)' },
        { value: 3, text: 'Seminar Gereja Bethel Indonesia / GBI di Lembang, Kabupaten Bandung Barat (3-5 Maret)' },
        { value: 4, text: 'Musyawarah Daerah Himpunan Pengusaha Muda Indonesia / HIPMI Jabar di Kabupaten Karawang (9 Maret)' }
      ]
    }
  },

  computed: {
    symptoms: {
      get () {
        return this.$store.state.form.symptoms
      },
      set (value) {
        this.$store.commit('form/SET_SYMPTOMS', value)
      }
    },

    contact: {
      get () {
        return this.$store.state.form.symptoms_interaction
      },
      set (value) {
        this.$store.commit('form/SET_SYMPTOMS_INTERACTION', value)
      }
    },

    events: {
      get () {
        return this.$store.state.form.symptoms_activity
      },
      set (value) {
        this.$store.commit('form/SET_SYMPTOMS_ACTIVITY', value)
      }
    }
  },

  methods: {
    async nextStep () {
      const valid = await this.$refs.form.validate()

      if (valid) {
        this.$router.push('/registration/confirm')
      }
    }
  }
}
</script>
