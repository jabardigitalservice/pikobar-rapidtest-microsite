<template>
  <div class="container mx-auto p-6">
    <p class="mt-4 text-sm">
      Silahkan isi kelengkapan informasi tempat tinggal sekarang (domisili) calon peserta test COVID-19.
    </p>

    <ValidationObserver ref="form">
      <pkbr-input v-model="name" class="mt-6" name="Nama Lengkap" label="Nama Lengkap" rules="required" />

      <pkbr-select
        v-model="gender"
        class="mt-4"
        :items="[
          {text: 'Laki-laki', value: 'M'},
          {text: 'Perempuan', value: 'F'}
        ]"
        name="Jenis Kelamin"
        label="Jenis Kelamin"
        rules="required"
      />

      <pkbr-select
        v-model="birth_day"
        class="mt-4"
        :items="days"
        name="Tanggal Lahir"
        label="Tanggal Lahir"
        placeholder="Tanggal"
        rules="required"
      />

      <pkbr-select
        v-model="birth_month"
        :items="months"
        name="Bulan"
        placeholder="Bulan"
        rules="required"
      />

      <pkbr-select
        v-model="birth_year"
        :items="years"
        name="Tahun"
        placeholder="Tahun"
        rules="required"
      />

      <pkbr-select
        v-model="city_code"
        class="mt-4"
        :items="cities"
        name="Kabupaten/Kota"
        label="Kabupaten/Kota"
        rules="required"
        item-text="name"
        item-value="code"
        @change="changeCity"
      />

      <pkbr-select
        v-model="district_code"
        class="mt-4"
        :items="districts"
        name="Kecamatan"
        label="Kecamatan"
        rules="required"
        item-text="name"
        item-value="code"
        @change="changeDistrict"
      />

      <pkbr-select
        v-model="village_code"
        class="mt-4"
        :items="villages"
        name="Kelurahan/Desa"
        label="Kelurahan/Desa"
        rules="required"
        item-text="name"
        item-value="code"
      />

      <pkbr-input
        v-model="address"
        class="mt-4"
        name="Alamat"
        label="Alamat"
        rules="required"
        type="textarea"
      />

      <pkbr-input
        v-model="phone_number"
        class="mt-4"
        name="Nomor Telepon"
        label="Nomor Telepon (Whatsapp)"
        rules="required|phone_number"
        type="tel"
      />

      <pkbr-input
        v-model="email"
        class="mt-4"
        name="Alamat Email"
        label="Alamat Email"
        rules="required|email"
      />
    </ValidationObserver>

    <form-actions class="mt-12" back-link="/registration" @next="nextStep" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver } from 'vee-validate'
import _ from 'lodash'
import VueGeolocation from 'vue-browser-geolocation'

export default {
  components: { ValidationObserver },

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
        { value: 0, text: 'Januari' },
        { value: 1, text: 'Februari' },
        { value: 2, text: 'Maret' },
        { value: 3, text: 'April' },
        { value: 4, text: 'Mei' },
        { value: 5, text: 'Juni' },
        { value: 6, text: 'Juli' },
        { value: 7, text: 'Agustus' },
        { value: 8, text: 'September' },
        { value: 9, text: 'Oktober' },
        { value: 10, text: 'November' },
        { value: 11, text: 'Desember' }
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

    gender: {
      get () {
        return this.$store.state.form.gender
      },
      set (value) {
        this.$store.commit('form/SET_GENDER', value)
      }
    },

    birth_day: {
      get () {
        return this.$store.state.form.birth_day
      },
      set (value) {
        this.$store.commit('form/SET_BIRTH_DAY', value)
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

  async mounted () {
    // Enable navigation prompt
    window.onbeforeunload = function () {
      return true
    }

    try {
      const { lat, lng } = await VueGeolocation.getLocation({ enableHighAccuracy: true })

      if (lat && lng) {
        this.$store.commit('form/SET_LATLON', { latitude: lat, longitude: lng })
      }
    } catch (e) {
      // console.log(e)
    }

    await this.getCities()
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

    changeCity (code) {
      this.district_code = null
      this.village_code = null

      this.getDistricts(code)
    },

    changeDistrict (code) {
      this.village_code = null

      this.getVillages(code)
    },

    async nextStep () {
      const valid = await this.$refs.form.validate()

      if (valid) {
        this.$router.replace('/registration/occupation')
      }
    }
  }
}
</script>
