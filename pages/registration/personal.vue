<template>
  <div class="container mx-auto p-6">
    <p class="mt-4 text-sm">
      Silahkan isi kelengkapan informasi tempat tinggal sekarang (domisili) calon peserta test COVID-19.
    </p>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Nama Lengkap</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input v-model.lazy="name" type="text" class="form-input block w-full">
      </div>
    </div>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Tanggal Lahir</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <select v-model="birth_date" class="form-select block w-full">
          <option :value="null">
            Tanggal
          </option>
          <option v-for="n in days" :key="n" :value="n">
            {{ n }}
          </option>
        </select>
      </div>
      <div class="mt-1 relative rounded-md shadow-sm">
        <select v-model="birth_month" class="form-select block w-full">
          <option :value="null">
            Bulan
          </option>
          <option v-for="(month, index) in months" :key="index" :value="index">
            {{ month }}
          </option>
        </select>
      </div>
      <div class="mt-1 relative rounded-md shadow-sm">
        <select v-model="birth_year" class="form-select block w-full">
          <option :value="null">
            Tahun
          </option>
          <option v-for="year in years" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </div>
    </div>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Kabupaten/Kota</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <select v-model="city_code" class="form-select block w-full" @change="changeCity">
          <option :value="null">
            Pilih
          </option>
          <option v-for="city in cities" :key="city.id" :value="city.code_kemendagri">
            {{ city.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Kecamatan</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <select v-model="district_code" class="form-select block w-full" @change="changeDistrict">
          <option :value="null">
            Pilih
          </option>
          <option v-for="district in districts" :key="district.id" :value="district.code_kemendagri">
            {{ district.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Kelurahan/Desa</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <select v-model="village_code" class="form-select block w-full">
          <option :value="null">
            Pilih
          </option>
          <option v-for="village in villages" :key="village.id" :value="village.code_kemendagri">
            {{ village.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="mt-4">
      <label class="block text-sm font-medium leading-5 text-gray-700">Alamat</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <textarea v-model.lazy="address" class="form-input block w-full" />
      </div>
    </div>

    <div class="mt-4">
      <label class="block text-sm font-medium leading-5 text-gray-700">Nomor Telepon</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input v-model.lazy="phone_number" type="text" class="form-input block w-full">
      </div>
    </div>

    <div class="mt-12">
      <nuxt-link to="/registration/occupation" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Lanjutkan
      </nuxt-link>
      <nuxt-link to="/registration" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default {
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
    }
  }
}
</script>
