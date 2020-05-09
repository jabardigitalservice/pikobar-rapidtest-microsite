<template>
  <div class="container mx-auto p-6">
    <p class="mt-4 text-sm">
      Silahkan isi kelengkapan formulir informasi pekerjaan/profesi calon peserta test COVID-19.
    </p>

    <ValidationObserver ref="form">
      <div class="mt-6">
        <validation-provider v-slot="{ errors }" name="Jenis Pekerjaan" rules="required">
          <label class="block text-sm font-medium leading-5 text-gray-700">Jenis Pekerjaan</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <select v-model="occupation_type" class="form-select block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }">
              <option :value="null">
                Pilih...
              </option>
              <option value="7">
                Petugas Pelayanan Publik (Kasir/Customer Service Bank, Petugas Keamanan, Loket Layanan Publik)
              </option>
              <option value="8">
                Petugas Transportasi (Terminal, Airport, Stasiun, Ojol)
              </option>
              <option value="9">
                Petugas Kebersihan
              </option>
              <option value="10">
                Wartawan
              </option>
              <option value="11">
                Pedagang Pasar
              </option>
              <option value="12">
                Pemuka Agama
              </option>
              <option value="13">
                Lainnya
              </option>
            </select>
            <div v-if="errors.length > 0" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <p class="mt-2 text-sm text-red-600">
            {{ errors[0] }}
          </p>
        </validation-provider>
      </div>

      <div class="mt-6">
        <validation-provider v-slot="{ errors }" name="Nama Tempat Kerja/Institusi" rules="required">
          <label class="block text-sm font-medium leading-5 text-gray-700">Nama Tempat Kerja/Institusi</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model="workplace_name" type="text" class="form-input block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }">
            <div v-if="errors.length > 0" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <p class="mt-2 text-sm text-red-600">
            {{ errors[0] }}
          </p>
        </validation-provider>
      </div>
    </ValidationObserver>

    <div class="mt-12">
      <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center" @click="nextStep">
        Lanjutkan
      </button>
      <nuxt-link to="/registration/personal" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
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

  computed: {
    occupation_type: {
      get () {
        return this.$store.state.form.occupation_type
      },
      set (value) {
        this.$store.commit('form/SET_OCCUPATION_TYPE', value)
      }
    },

    workplace_name: {
      get () {
        return this.$store.state.form.workplace_name
      },
      set (value) {
        this.$store.commit('form/SET_WORKPLACE_NAME', value)
      }
    }
  },

  methods: {
    async nextStep () {
      const valid = await this.$refs.form.validate()

      if (valid) {
        this.$router.push('/registration/additional')
      }
    }
  }
}
</script>
