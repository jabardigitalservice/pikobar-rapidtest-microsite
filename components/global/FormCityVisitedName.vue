<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mb-4 text-lg text-brand-grey">
        Sebutkan <strong>kota yang Anda kunjungi</strong> dalam 14 hari terakhir?
      </p>

      <pkbr-input
        v-model="cityVisited"
        class="mt-4"
        name="Kota kunjungan"
        placeholder="Contoh: Jakarta"
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
    isCityVisited: {
      get () {
        return this.$store.state.form.isCityVisited
      }
    },
    cityVisited: {
      get () {
        return this.$store.state.form.cityVisited
      },
      set (value) {
        this.$store.commit('form/SET_CITY_VISITED', value)
      }
    }
  },

  mounted () {
    // Enable navigation prompt
    window.onbeforeunload = function () {
      return true
    }

    if (this.isCityVisited === 'NO') {
      this.$emit('nextStep')
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
