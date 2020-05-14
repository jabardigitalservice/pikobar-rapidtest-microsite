// state
export const state = () => ({
  registrationCode: null,
  name: null,
  qrcode: null,
  status: null
})

// getters
export const getters = {
  registrationCode: state => state.registrationCode,
  name: state => state.name,
  qrcode: state => state.qrcode,
  status: state => state.status
}

// mutations
export const mutations = {
  RESET_FORM (state) {
    state.registrationCode = null
    state.name = null
    state.qrcode = null
    state.status = null
  },

  SET_DATA (state, payload) {
    state.registrationCode = payload.registrationCode
    state.name = payload.name
    state.qrcode = payload.qrcode
    state.status = payload.status
  }
}

// actions
export const actions = {
  //
}
