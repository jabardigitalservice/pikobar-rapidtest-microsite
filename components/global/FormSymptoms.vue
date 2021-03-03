<template>
  <div class="container mx-auto p-6 mt-40">
    <div class="mb-6">
      <p class="text-base text-brand-grey-dark">
        {{ progress }} Selesai
      </p>
    </div>
    <ValidationObserver ref="form">
      <p class="text-lg text-brand-grey">
        <strong>Gejala</strong> apa yang Anda rasakan?
      </p>
      <p class="mb-6 text-xs text-gray-700">
        Anda bisa pilih lebih dari satu gejala.
      </p>

      <pkbr-check-group
        v-model="symptoms"
        :items="symptomsOptions"
        name="Gejala"
        rules="required"
        @next="nextStep"
      />

      <pkbr-input
        v-model="notes"
        class="mt-6"
        name="Gejala lain yang dirasakan"
        label="Gejala lain yang dirasakan"
        type="textarea"
        @next="nextStep"
      />

      <form-actions class="mt-12 flex" @prev="backStep" @next="nextStep" />
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
      'symptomsOptions'
    ]),

    symptoms: {
      get () {
        return this.$store.state.form.symptoms
      },
      set (value) {
        this.$store.commit('form/SET_SYMPTOMS', value)
      }
    },

    notes: {
      get () {
        return this.$store.state.form.symptomsNotes
      },
      set (value) {
        this.$store.commit('form/SET_SYMPTOMS_NOTES', value)
      }
    },

    progress: {
      get () {
        return this.$store.state.form.progress
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
        this.$emit('nextStep')
      }
    },
    backStep () {
      this.$emit('backStep')
    }
  }
}
</script>
