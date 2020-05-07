// state
export const state = () => ({
  nik: null
})

// getters
export const getters = {
  form: state => state.form
}

// mutations
export const mutations = {
  RESET_FORM (state) {
    state.nik = null
  },

  SET_FIELD_STEP_INDEX (state, data) {
    state.nik = data.nik
  }
}

// actions
export const actions = {
  //
}
