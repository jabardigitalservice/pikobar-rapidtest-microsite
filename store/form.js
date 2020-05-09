// state
export const state = () => ({
  nik: null,
  name: null,
  birth_date: null,
  birth_month: null,
  birth_year: null,
  address: null,
  phone_number: null,
  city_code: null,
  district_code: null,
  village_code: null,
  cities: [],
  districts: [],
  villages: []
})

// getters
export const getters = {
  nik: state => state.nik,
  cities: state => state.cities,
  districts: state => state.districts,
  villages: state => state.villages
}

// mutations
export const mutations = {
  RESET_FORM (state) {
    state.nik = null
  },

  SET_NIK (state, payload) {
    state.nik = payload
  },

  SET_NAME (state, payload) {
    state.name = payload
  },

  SET_BIRTH_DATE (state, payload) {
    state.birth_date = payload
  },

  SET_BIRTH_MONTH (state, payload) {
    state.birth_month = payload
  },

  SET_BIRTH_YEAR (state, payload) {
    state.birth_year = payload
  },

  SET_ADDRESS (state, payload) {
    state.address = payload
  },

  SET_PHONE_NUMBER (state, payload) {
    state.phone_number = payload
  },

  SET_CITY (state, payload) {
    state.city_code = payload
  },

  SET_DISTRICT (state, payload) {
    state.district_code = payload
  },

  SET_VILLAGE (state, payload) {
    state.village_code = payload
  },

  SET_CITIES (state, payload) {
    state.cities = payload
  },

  SET_DISTRICTS (state, payload) {
    state.districts = payload
  },

  SET_VILLAGES (state, payload) {
    state.villages = payload
  }
}

// actions
export const actions = {
  //
}
