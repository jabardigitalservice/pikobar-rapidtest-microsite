// state
export const state = () => ({
  registrationCode: null,
  name: null,
  qrcode: null
})

// getters
export const getters = {
  registrationCode: state => state.registrationCode,
  name: state => state.name,
  qrcode: state => state.qrcode
}

// mutations
export const mutations = {
  RESET_FORM (state) {
    state.registrationCode = null
    state.name = null
    state.qrcode = null
  },

  SET_DATA (state, payload) {
    state.registrationCode = payload.registrationCode
    state.name = payload.name
    state.qrcode = payload.qrcode
  }
}

// actions
export const actions = {
  //
}
