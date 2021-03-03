<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mb-4 text-lg text-brand-grey">
        Masukan alamat <strong>email</strong> Anda.
      </p>

      <pkbr-input
        v-model="email"
        class="mt-4"
        name="Alamat Email"
        placeholder="Contoh: nama@email.com"
        note="Tidak Wajib"
        rules="email"
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
    email: {
      get () {
        return this.$store.state.form.email
      },
      set (value) {
        this.$store.commit('form/SET_EMAIL', value)
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
