// state
export const state = () => ({
  registrationCode: null,
  testAttend: null,
  testMethod: null
})

// getters
export const getters = {
  registrationCode: state => state.registrationCode,
  testAttend: state => state.testAttend,
  testMethod: state => state.testMethod
}

// mutations
export const mutations = {
  RESET_FORM (state) {
    state.registrationCode = null
    state.testMethod = null
  },

  SET_TEST_ATTEND (state, payload) {
    state.testAttend = payload
  },

  SET_TEST_METHOD (state, payload) {
    state.testMethod = payload
  }
}

// actions
export const actions = {
  //
}
