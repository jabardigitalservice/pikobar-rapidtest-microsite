<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="text-lg text-brand-grey">
        <strong>Riwayat penyakit bawaan</strong> apa yang Anda miliki?
      </p>
      <p class="mb-6 text-xs text-gray-700">
        Anda bisa pilih lebih dari satu gejala.
      </p>

      <pkbr-check-group
        v-model="congenitalDisease"
        :items="congenitalDiseaseOptions"
        name="Penyakit bawaan"
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
      'congenitalDiseaseOptions'
    ]),

    congenitalDisease: {
      get () {
        return this.$store.state.form.congenitalDisease
      },
      set (value) {
        this.$store.commit('form/SET_CONGENITAL_DISEASE', value)
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
