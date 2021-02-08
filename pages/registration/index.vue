<template>
  <div class="container mx-auto p-6">
    <form-nik v-if="step === 1" @nextStep="nextKuy" />
    <form-name v-if="step === 2" @nextStep="nextKuy" />
    <form-gender v-if="step === 3" @nextStep="nextKuy" />
    <form-birth-place v-if="step === 4" @nextStep="nextKuy" />
    <form-birth-date v-if="step === 5" @nextStep="nextKuy" />
    <form-phone v-if="step === 6" @nextStep="nextKuy" />
    <form-email v-if="step === 7" @nextStep="nextKuy" />
    <form-address v-if="step === 8" @nextStep="nextKuy" />
    <form-occupation v-if="step === 9" @nextStep="nextKuy" />
    <form-symptoms v-if="step === 10" @nextStep="nextKuy" />
    <form-conginetal-disease v-if="step === 11" @nextStep="nextKuy" />
    <form-city-visited v-if="step === 12" @nextStep="nextKuy" />
    <form-city-visited-name v-if="step === 13" @nextStep="nextKuy" />
    <form-status v-if="step === 14" @nextStep="nextKuy" />
    <form-have-interacted v-if="step === 15" @nextStep="nextKuy" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      step: 1
    }
  },

  computed: {
    nik: {
      get () {
        return this.$store.state.form.nik
      },
      set (value) {
        this.$store.commit('form/SET_NIK', value)
      }
    },
    isCityVisited: {
      get () {
        return this.$store.state.form.isCityVisited
      }
    }
  },

  mounted () {
    // Enable navigation prompt
    window.onbeforeunload = function () {
      return true
    }
    // extend('nik_registered', {
    //   validate: this.nikRegistered,
    //   message: 'NIK telah terdaftar'
    // })
  },

  methods: {
    nextKuy () {
      this.step++
    },
    async nextStep () {
      const valid = await this.$refs.form.validate()

      if (valid) {
        // this.$router.replace('/registration/personal')
        this.step++
      }
    },
    async nikRegistered () {
      try {
        await this.$axios.$post('/api/register/check-nik', {
          nik: this.$store.state.form.nik
        })
        return true
      } catch (error) {
        if (error.response.status === 422) {
          return false
        }
      }
    }
  }
}
</script>
