<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mb-4 text-lg text-brand-grey">
        Apakah Anda pernah <strong>berinteraksi dengan kasus suspek/probable/konfirmasi.</strong>
      </p>

      <pkbr-select-group
        v-model="haveInteracted"
        class="mt-6"
        :items="haveInteractedOptions"
        name="Suspect/probable/konfirmasi"
        rules="required"
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
      'haveInteractedOptions'
    ]),

    haveInteracted: {
      get () {
        return this.$store.state.form.haveInteracted
      },
      set (value) {
        this.$store.commit('form/SET_HAVE_INTERACTED', value)
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
