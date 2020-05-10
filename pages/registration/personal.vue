<template>
  <div class="container mx-auto p-6">
    <p class="mt-4 text-sm">
      Silahkan isi kelengkapan informasi tempat tinggal sekarang (domisili) calon peserta test COVID-19.
    </p>

    <ValidationObserver ref="form">
      <div class="mt-6">
        <validation-provider v-slot="{ errors }" name="Nama Lengkap" rules="required">
          <label class="block text-sm font-medium leading-5 text-gray-700">Nama Lengkap</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model.lazy="name" type="text" class="form-input block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }">
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
        <label class="block text-sm font-medium leading-5 text-gray-700">Tanggal Lahir</label>
        <validation-provider v-slot="{ errors }" name="Tanggal" rules="required">
          <div class="mt-1 relative rounded-md shadow-sm">
            <select v-model="birth_date" class="form-select block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }">
              <option :value="null">
                Tanggal
              </option>
              <option v-for="n in days" :key="n" :value="n">
                {{ n }}
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

        <validation-provider v-slot="{ errors }" name="Bulan" rules="required">
          <div class="mt-1 relative rounded-md shadow-sm">
            <select v-model="birth_month" class="form-select block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }">
              <option :value="null">
                Bulan
              </option>
              <option v-for="(month, index) in months" :key="index" :value="index">
                {{ month }}
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

        <validation-provider v-slot="{ errors }" name="Tahun" rules="required">
          <div class="mt-1 relative rounded-md shadow-sm">
            <select v-model="birth_year" class="form-select block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }">
              <option :value="null">
                Tahun
              </option>
              <option v-for="year in years" :key="year" :value="year">
                {{ year }}
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
        <validation-provider v-slot="{ errors }" name="Kabupaten/Kota" rules="required">
          <label class="block text-sm font-medium leading-5 text-gray-700">Kabupaten/Kota</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <select v-model="city_code" class="form-select block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }" @change="changeCity">
              <option :value="null">
                Pilih
              </option>
              <option v-for="city in cities" :key="city.id" :value="city.code_kemendagri">
                {{ city.name }}
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
        <validation-provider v-slot="{ errors }" name="Kecamatan" rules="required">
          <label class="block text-sm font-medium leading-5 text-gray-700">Kecamatan</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <select v-model="district_code" class="form-select block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }" @change="changeDistrict">
              <option :value="null">
                Pilih
              </option>
              <option v-for="district in districts" :key="district.id" :value="district.code_kemendagri">
                {{ district.name }}
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
        <validation-provider v-slot="{ errors }" name="Kelurahan/Desa" rules="required">
          <label class="block text-sm font-medium leading-5 text-gray-700">Kelurahan/Desa</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <select v-model="village_code" class="form-select block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }">
              <option :value="null">
                Pilih
              </option>
              <option v-for="village in villages" :key="village.id" :value="village.code_kemendagri">
                {{ village.name }}
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

      <div class="mt-4">
        <validation-provider v-slot="{ errors }" name="Alamat" rules="required">
          <label class="block text-sm font-medium leading-5 text-gray-700">Alamat</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <textarea v-model.lazy="address" class="form-input block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }" />
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

      <div class="mt-4">
        <validation-provider v-slot="{ errors }" name="Nomor Telepon" rules="required|phone_number">
          <label class="block text-sm font-medium leading-5 text-gray-700">Nomor Telepon (Whatsapp)</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }">
              +62
            </span>
            <input v-model="phone_number" class="form-input flex-1 block w-full px-3 py-2 rounded-none rounded-r-md" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }">
          </div>
          <p class="mt-2 text-sm text-red-600">
            {{ errors[0] }}
          </p>
        </validation-provider>
      </div>

      <div class="mt-4">
        <validation-provider v-slot="{ errors }" name="Alamat Email" rules="required|email">
          <label class="block text-sm font-medium leading-5 text-gray-700">Alamat Email</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model.lazy="email" type="text" class="form-input block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }">
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
      <nuxt-link to="/registration" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/id.json'
import _ from 'lodash'

extend('required', {
  ...required,
  message: messages.required
})

extend('email', {
  ...email,
  message: messages.email
})

extend('phone_number', {
  validate: (value) => {
    return value.match(/^8{1}[0-9]{9,11}$/g)
  },
  message: 'Format Nomor Telepon tidak benar'
})

export default {
  components: { ValidationObserver, ValidationProvider },

  data () {
    return {
      //
    }
  },

  computed: {
    ...mapGetters('form', [
      'cities',
      'districts',
      'villages'
    ]),

    days () {
      const days = _.range(1, 32)

      return Array.from(days, x => x.toString().padStart(2, '0'))
    },

    months () {
      return [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus',
        'September', 'Oktober', 'November', 'Desember'
      ]
    },

    years () {
      const year = new Date().getFullYear() - 1
      return Array.from({ length: year - 1930 }, (value, index) => (1931 + index).toString())
    },

    name: {
      get () {
        return this.$store.state.form.name
      },
      set (value) {
        this.$store.commit('form/SET_NAME', value)
      }
    },

    birth_date: {
      get () {
        return this.$store.state.form.birth_date
      },
      set (value) {
        this.$store.commit('form/SET_BIRTH_DATE', value)
      }
    },

    birth_month: {
      get () {
        return this.$store.state.form.birth_month
      },
      set (value) {
        this.$store.commit('form/SET_BIRTH_MONTH', value)
      }
    },

    birth_year: {
      get () {
        return this.$store.state.form.birth_year
      },
      set (value) {
        this.$store.commit('form/SET_BIRTH_YEAR', value)
      }
    },

    address: {
      get () {
        return this.$store.state.form.address
      },
      set (value) {
        this.$store.commit('form/SET_ADDRESS', value)
      }
    },

    phone_number: {
      get () {
        return this.$store.state.form.phone_number
      },
      set (value) {
        this.$store.commit('form/SET_PHONE_NUMBER', value)
      }
    },

    email: {
      get () {
        return this.$store.state.form.email
      },
      set (value) {
        this.$store.commit('form/SET_EMAIL', value)
      }
    },

    city_code: {
      get () {
        return this.$store.state.form.city_code
      },
      set (value) {
        this.$store.commit('form/SET_CITY', value)
      }
    },

    district_code: {
      get () {
        return this.$store.state.form.district_code
      },
      set (value) {
        this.$store.commit('form/SET_DISTRICT', value)
      }
    },

    village_code: {
      get () {
        return this.$store.state.form.village_code
      },
      set (value) {
        this.$store.commit('form/SET_VILLAGE', value)
      }
    }
  },

  mounted () {
    this.getCities()
  },

  methods: {
    async getCities () {
      const { data } = await this.$axios.$get('/api/master/areas')

      this.$store.commit('form/SET_CITIES', data)
    },

    async getDistricts (cityCode) {
      const { data } = await this.$axios.$get(`/api/master/areas?parent_code_kemendagri=${cityCode}`)

      this.$store.commit('form/SET_DISTRICTS', data)
    },

    async getVillages (districtCode) {
      const { data } = await this.$axios.$get(`/api/master/areas?parent_code_kemendagri=${districtCode}`)

      this.$store.commit('form/SET_VILLAGES', data)
    },

    changeCity (e) {
      this.district_code = null
      this.village_code = null

      this.getDistricts(e.target.value)
    },

    changeDistrict (e) {
      this.village_code = null

      this.getVillages(e.target.value)
    },

    async nextStep () {
      const valid = await this.$refs.form.validate()

      if (valid) {
        this.$router.push('/registration/occupation')
      }
    }
  }
}
</script>
