<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mb-4 text-lg text-brand-grey">
        Pernahkah Anda <strong>berkunjung ke luar kota</strong> dalam 14 hari terakhir?
      </p>

      <pkbr-select-group
        v-model="isCityVisited"
        class="mt-6"
        :items="cityVisitedOptions"
        name="Kota kunjungan"
        rules="required"
      />

      <form-actions class="mt-12 flex" back-link="/terms-conditions" @next="nextStep" />
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import { mapGetters } from 'vuex'

export default {
  components: { ValidationObserver },

  computed: {
    ...mapGetters('form', [
      'cityVisitedOptions'
    ]),

    isCityVisited: {
      get () {
        return this.$store.state.form.isCityVisited
      },
      set (value) {
        this.$store.commit('form/SET_IS_CITY_VISITED', value)
      }
    }
  },

  mounted () {
    // Enable navigation prompt
    window.onbeforeunload = function () {
      return true
    }
  },

  methods: {
    async nextStep () {
      const valid = await this.$refs.form.validate()

      if (valid) {
        // this.$router.replace('/registration/personal')
        this.$emit('nextStep')
      }
    }
  }
}
</script>
