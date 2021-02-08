<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mb-4 text-lg text-brand-grey">
        Hallo <strong>{{ name }}.</strong> Apa <strong>jenis kelamin</strong> Anda?
      </p>

      <!-- <pkbr-select-button
        v-model="gender"
        class="mt-4"
        :items="[
          {text: 'Laki-laki', value: 'M'},
          {text: 'Perempuan', value: 'F'}
        ]"
        name="Jenis Kelamin"
        label="Jenis Kelamin"
        rules="required"
      /> -->

      <pkbr-select
        v-model="gender"
        class="mt-4"
        :items="[
          {text: 'Laki-laki', value: 'M'},
          {text: 'Perempuan', value: 'F'}
        ]"
        name="Jenis Kelamin"
        rules="required"
      />

      {{ gender }}

      <form-actions class="mt-12 flex" back-link="/terms-conditions" @next="nextStep" />
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  components: { ValidationObserver },

  data () {
    return {
      //
    }
  },

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
        // this.$router.replace('/registration/personal')
        this.$emit('nextStep')
      }
    }
  }
}
</script>
