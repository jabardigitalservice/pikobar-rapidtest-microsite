<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="text-lg text-brand-grey">
        Di mana <strong>lokasi tempat tinggal</strong> Anda sekarang?
      </p>
      <p class="mb-6 text-xs text-gray-700">
        Pastikan alamat yang dimasukan adalah <strong>alamat domisili tempat tinggal sekarang, bukan alamat KTP.</strong>
      </p>

      <pkbr-select
        v-model="city_code"
        class="mt-4"
        :items="cities"
        name="Kabupaten/Kota"
        label="Pilih Kabupaten/Kota"
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
        label="Pilih Kecamatan"
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
        label="Pilih Kelurahan/Desa"
        rules="required"
        item-text="name"
        item-value="code"
      />

      <pkbr-input
        v-model="address"
        class="mt-4"
        name="Alamat"
        label="Tulis Alamat Lengkap"
        placeholder="Tulis alamat tempat Anda tinggal"
        rules="required"
      />

      <form-actions class="mt-12 flex" @prev="backStep" @next="nextStep" />
    </ValidationObserver>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver } from 'vee-validate'

export default {
  components: { ValidationObserver },

  computed: {
    ...mapGetters('form', [
      'cities',
      'districts',
      'villages'
    ]),

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
    },

    address: {
      get () {
        return this.$store.state.form.address
      },
      set (value) {
        this.$store.commit('form/SET_ADDRESS', value)
      }
    }
  },

  async mounted () {
    // Enable navigation prompt
    window.onbeforeunload = function () {
      return true
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
        this.$emit('nextStep')
      }
    },
    backStep () {
      this.$emit('backStep')
    }
  }
}
</script>
