<template>
  <div class="container mx-auto p-6">
    <div class="ml-6">
      <p class="text-base text-brand-grey-dark">
        {{ percent }}% Selesai
      </p>
    </div>
    <form-nik v-if="step === 0" @nextStep="nextStep" />
    <form-name v-if="step === 1" @nextStep="nextStep" @backStep="backStep" />
    <form-gender v-if="step === 2" @nextStep="nextStep" @backStep="backStep" />
    <form-birth-place v-if="step === 3" @nextStep="nextStep" @backStep="backStep" />
    <form-birth-date v-if="step === 4" @nextStep="nextStep" @backStep="backStep" />
    <form-phone v-if="step === 5" @nextStep="nextStep" @backStep="backStep" />
    <form-email v-if="step === 6" @nextStep="nextStep" @backStep="backStep" />
    <form-address v-if="step === 7" @nextStep="nextStep" @backStep="backStep" />
    <form-occupation v-if="step === 8" @nextStep="nextStep" @backStep="backStep" />
    <form-symptoms v-if="step === 9" @nextStep="nextStep" @backStep="backStep" />
    <form-conginetal-disease v-if="step === 10" @nextStep="nextStep" @backStep="backStep" />
    <form-city-visited v-if="step === 11" @nextStep="nextStep" @backStep="backStep" />
    <form-city-visited-name v-if="step === 12" @nextStep="nextStep" @backStep="backStep" />
    <form-status v-if="step === 13" @nextStep="nextStep" @backStep="backStep" />
    <form-have-interacted v-if="step === 14" @nextStep="nextStep" @backStep="backStep" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      step: 9
    }
  },

  computed: {
    percent () {
      return parseInt((this.step / 15) * 100)
    }
  },

  watch: {
    percent (val) {
      val = val + '%'
      this.$store.commit('form/SET_PERCENT_PROGRESS', val)
    }
  },

  mounted () {
    // Enable navigation prompt
    window.onbeforeunload = function () {
      return true
    }
  },

  methods: {
    nextStep () {
      this.step++
    },
    backStep () {
      this.step--
    }
  }
}
</script>
