<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mb-4 text-lg text-brand-grey">
        Hallo <strong>{{ name }}.</strong> Apa <strong>jenis kelamin</strong> Anda?
      </p>

      <pkbr-select
        v-model="gender"
        class="mt-4"
        :items="[
          {text: 'Laki-laki', value: 'M'},
          {text: 'Perempuan', value: 'F'}
        ]"
        name="Jenis Kelamin"
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
    gender: {
      get () {
        return this.$store.state.form.gender
      },
      set (value) {
        this.$store.commit('form/SET_GENDER', value)
      }
    },
    name: {
      get () {
        return this.$store.state.form.name
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
