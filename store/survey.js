// state
export const state = () => ({
  registrationCode: null,
  applicantName: null,
  testInvited: null,
  testAttend: null,
  testMethod: null,
  testInterested: null
})

// getters
export const getters = {
  registrationCode: state => state.registrationCode,
  applicantName: state => state.applicantName,
  testInvited: state => state.testInvited,
  testAttend: state => state.testAttend,
  testMethod: state => state.testMethod,
  testInterested: state => state.testInterested
}

// mutations
export const mutations = {
  RESET_FORM (state) {
    state.registrationCode = null
    state.applicantName = null
    state.testMethod = null
    state.testInvited = null
    state.testAttend = null
    state.testInterested = null
  },

  SET_DATA (state, payload) {
    state.registrationCode = payload.registrationCode
    state.applicantName = payload.name
  },

  SET_REGISTRATION_CODE (state, payload) {
    state.registrationCode = payload
  },

  SET_APPLICANT_NAME (state, payload) {
    state.applicantName = payload
  },

  SET_TEST_INVITED (state, payload) {
    state.testInvited = payload
  },

  SET_TEST_ATTEND (state, payload) {
    state.testAttend = payload
  },

  SET_TEST_METHOD (state, payload) {
    state.testMethod = payload
  },

  SET_TEST_INTERESTED (state, payload) {
    state.testInterested = payload
  }
}

// actions
export const actions = {
  //
}
