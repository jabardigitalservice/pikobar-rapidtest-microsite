// state
export const state = () => ({
  registrationCode: null,
  name: null,
  qrcode: null,
  invitations: [],
  lastInvitation: null,
  status: null
})

// getters
export const getters = {
  registrationCode: state => state.registrationCode,
  name: state => state.name,
  qrcode: state => state.qrcode,
  invitations: state => state.invitations,
  lastInvitation: state => state.lastInvitation,
  status: state => state.status
}

// mutations
export const mutations = {
  RESET_FORM (state) {
    state.registrationCode = null
    state.name = null
    state.qrcode = null
    state.invitations = []
    state.lastInvitation = null
    state.status = null
  },

  SET_DATA (state, payload) {
    state.registrationCode = payload.registrationCode
    state.name = payload.name
    state.qrcode = payload.qrcode
    state.invitations = payload.invitations
    state.lastInvitation = payload.lastInvitation
    state.status = payload.status
  }
}

// actions
export const actions = {
  //
}
