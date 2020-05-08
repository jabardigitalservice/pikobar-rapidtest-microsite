<template>
  <div class="container mx-auto p-6">
    <p class="mt-4 text-sm">
      Silahkan isi kelengkapan informasi tempat tinggal sekarang (domisili) calon peserta test COVID-19.
    </p>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Nama Lengkap</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="text" class="form-input block w-full">
      </div>
    </div>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Tanggal Lahir</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <select class="form-select block w-full">
          <option>Tanggal</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
        </select>
      </div>
      <div class="mt-1 relative rounded-md shadow-sm">
        <select class="form-select block w-full">
          <option>Bulan</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
        </select>
      </div>
      <div class="mt-1 relative rounded-md shadow-sm">
        <select class="form-select block w-full">
          <option>Tahun</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
          <option>Option</option>
        </select>
      </div>
    </div>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Kabupaten/Kota</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <select class="form-select block w-full" @change="changeCity">
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
        <select class="form-select block w-full" @change="changeDistrict">
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
        <select class="form-select block w-full">
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
        <textarea class="form-input block w-full" />
      </div>
    </div>

    <div class="mt-4">
      <label class="block text-sm font-medium leading-5 text-gray-700">Nomor Telepon</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="text" class="form-input block w-full">
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
export default {
  data () {
    return {
      city_code: null,
      cities: [],
      district_code: null,
      districts: [],
      village_code: null,
      villages: []
    }
  },

  mounted () {
    this.getCities()
  },

  methods: {
    async getCities () {
      const { data } = await this.$axios.$get('/api/master/areas')

      this.cities = data
    },

    async getDistricts (cityCode) {
      const { data } = await this.$axios.$get(`/api/master/areas?parent_code_kemendagri=${cityCode}`)

      this.districts = data
    },

    async getVillages (districtCode) {
      const { data } = await this.$axios.$get(`/api/master/areas?parent_code_kemendagri=${districtCode}`)

      this.villages = data
    },

    changeCity (e) {
      this.district_code = null
      this.districts = []

      this.village_code = null
      this.villages = []

      this.getDistricts(e.target.value)
    },

    changeDistrict (e) {
      this.village_code = null
      this.villages = []

      this.getVillages(e.target.value)
    }
  }
}
</script>
