// state
export const state = () => ({
  registrationCode: null,
  downloadUrl: null,
  nik: null,
  name: null,
  latitude: null,
  longitude: null,
  birth_date: null,
  birth_day: null,
  birth_month: null,
  birth_year: null,
  gender: null,
  address: null,
  phone_number: null,
  email: null,
  city_code: null,
  district_code: null,
  village_code: null,
  occupationType: null,
  occupationName: null,
  workplaceName: null,
  symptoms: [],
  symptomsNotes: null,
  symptomsInteraction: null,
  symptomsActivity: [],
  cities: [],
  districts: [],
  villages: [],
  occupationTypeOptions: [
    { value: 7, text: 'Petugas Pelayanan Publik (Kasir/Customer Service Bank, Petugas Keamanan, Loket Layanan Publik)' },
    { value: 8, text: 'Petugas Transportasi (Terminal, Airport, Stasiun, Ojol)' },
    { value: 9, text: 'Petugas Kebersihan' },
    { value: 10, text: 'Wartawan' },
    { value: 11, text: 'Pedagang Pasar' },
    { value: 12, text: 'Pemuka Agama' },
    { value: 13, text: 'Lainnya' }
  ],
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
    { value: 12, text: 'Suhu Tubuh >= 38 C' },
    { value: 99, text: 'Tidak ada Gejala' }
  ],
  eventsOptions: [
    { value: 1, text: 'Seminar Platform Bisnis Tanpa Riba di Sentul, Kabupaten Bogor (25-28 Februari)' },
    { value: 2, text: 'Seminar Gereja Protestan di Indonesia Bagian Barat / GPIB di Hotel Aston Bogor (26 - 29 Februari)' },
    { value: 3, text: 'Seminar Gereja Bethel Indonesia / GBI di Lembang, Kabupaten Bandung Barat (3-5 Maret)' },
    { value: 4, text: 'Musyawarah Daerah Himpunan Pengusaha Muda Indonesia / HIPMI Jabar di Kabupaten Karawang (9 Maret)' },
    { value: 99, text: 'Tidak pernah mengikuti ke event/kegiatan di atas.' }
  ]
})

// getters
export const getters = {
  registrationCode: state => state.registrationCode,
  downloadUrl: state => state.downloadUrl,
  nik: state => state.nik,
  name: state => state.name,
  latitude: state => state.latitude,
  longitude: state => state.longitude,
  city_code: state => state.city_code,
  district_code: state => state.district_code,
  village_code: state => state.village_code,
  gender: state => state.gender,
  address: state => state.address,
  birth_day: state => state.birth_day,
  birth_month: state => state.birth_month,
  birth_year: state => state.birth_year,
  birth_date: (state) => {
    if (state.birth_year === null || state.birth_month === null || state.birth_day === null) {
      return null
    }

    const birthMonth = (state.birth_month + 1).toString().padStart(2, '0')

    return `${state.birth_year}-${birthMonth}-${state.birth_day}`
  },
  phone_number: state => state.phone_number,
  email: state => state.email,
  occupationType: state => state.occupationType,
  occupationName: state => state.occupationName,
  workplaceName: state => state.workplaceName,
  cities: state => state.cities,
  districts: state => state.districts,
  villages: state => state.villages,
  symptoms: state => state.symptoms,
  symptomsNotes: state => state.symptomsNotes,
  symptomsInteraction: state => state.symptomsInteraction,
  symptomsActivity: state => state.symptomsActivity,
  symptomsOptions: state => state.symptomsOptions,
  eventsOptions: state => state.eventsOptions,
  occupationTypeOptions: state => state.occupationTypeOptions
}

// mutations
export const mutations = {
  RESET_FORM (state) {
    state.registrationCode = null
    state.downloadUrl = null
    state.nik = null
    state.name = null
    state.latitude = null
    state.longitude = null
    state.city_code = null
    state.district_code = null
    state.village_code = null
    state.gender = null
    state.address = null
    state.birth_day = null
    state.birth_month = null
    state.birth_year = null
    state.phone_number = null
    state.email = null
    state.occupationType = null
    state.occupationName = null
    state.workplaceName = null
    state.cities = []
    state.districts = []
    state.villages = []
    state.symptoms = []
    state.symptomsNotes = null
    state.symptomsInteraction = null
    state.symptomsActivity = []
  },

  SET_NIK (state, payload) {
    state.nik = payload
  },

  SET_NAME (state, payload) {
    state.name = payload
  },

  SET_GENDER (state, payload) {
    state.gender = payload
  },

  SET_BIRTH_DAY (state, payload) {
    state.birth_day = payload
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

  SET_LATLON (state, { latitude, longitude }) {
    state.latitude = latitude
    state.longitude = longitude
  },

  SET_PHONE_NUMBER (state, payload) {
    state.phone_number = payload
  },

  SET_EMAIL (state, payload) {
    state.email = payload
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
  },

  SET_OCCUPATION_TYPE (state, payload) {
    state.occupationType = payload
  },

  SET_OCCUPATION_NAME (state, payload) {
    state.occupationName = payload
  },

  SET_WORKPLACE_NAME (state, payload) {
    state.workplaceName = payload
  },

  SET_SYMPTOMS (state, payload) {
    state.symptoms = payload
  },

  SET_SYMPTOMS_INTERACTION (state, payload) {
    state.symptomsInteraction = payload
  },

  SET_SYMPTOMS_ACTIVITY (state, payload) {
    state.symptomsActivity = payload
  },

  SET_SYMPTOMS_NOTES (state, payload) {
    state.symptomsNotes = payload
  },

  SET_RESULT_REGISTRATION_RESULT (state, { registrationCode, downloadUrl }) {
    state.registrationCode = registrationCode
    state.downloadUrl = downloadUrl
  }
}

// actions
export const actions = {
  //
}
