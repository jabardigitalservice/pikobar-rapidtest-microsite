<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mb-4 text-lg text-brand-grey">
        Di mana <strong>tempat lahir</strong> Anda?
      </p>

      <pkbr-input
        v-model="birth_place"
        class="mt-4"
        name="Tempat Lahir"
        placeholder="Contoh: Bandung"
        rules="required"
        @next="nextStep"
      />

      <form-actions class="mt-12 flex" @prev="backStep" @next="nextStep" />
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  components: { ValidationObserver },

  computed: {
    birth_place: {
      get () {
        return this.$store.state.form.birth_place
      },
      set (value) {
        this.$store.commit('form/SET_BIRTH_PLACE', value)
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
