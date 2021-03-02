<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mb-4 text-lg text-brand-grey">
        <strong>Tanggal berapa</strong> Anda lahir?
      </p>

      <pkbr-select
        v-model="birth_day"
        class="mt-4"
        :items="days"
        name="Tanggal Lahir"
        placeholder="Tanggal"
        rules="required"
      />

      <pkbr-select
        v-model="birth_month"
        :items="months"
        name="Bulan"
        placeholder="Bulan"
        rules="required"
      />

      <pkbr-select
        v-model="birth_year"
        :items="years"
        name="Tahun"
        placeholder="Tahun"
        rules="required"
      />

      <form-actions class="mt-12 flex" @prev="backStep" @next="nextStep" />
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import _ from 'lodash'

export default {
  components: { ValidationObserver },

  computed: {
    days () {
      const days = _.range(1, 32)

      return Array.from(days, x => x.toString().padStart(2, '0'))
    },

    months () {
      return [
        { value: 0, text: 'Januari' },
        { value: 1, text: 'Februari' },
        { value: 2, text: 'Maret' },
        { value: 3, text: 'April' },
        { value: 4, text: 'Mei' },
        { value: 5, text: 'Juni' },
        { value: 6, text: 'Juli' },
        { value: 7, text: 'Agustus' },
        { value: 8, text: 'September' },
        { value: 9, text: 'Oktober' },
        { value: 10, text: 'November' },
        { value: 11, text: 'Desember' }
      ]
    },

    years () {
      const year = new Date().getFullYear() - 1
      return Array.from({ length: year - 1930 }, (value, index) => (1931 + index).toString())
    },

    birth_day: {
      get () {
        return this.$store.state.form.birth_day
      },
      set (value) {
        this.$store.commit('form/SET_BIRTH_DAY', value)
      }
    },

    birth_month: {
      get () {
        return this.$store.state.form.birth_month
      },
      set (value) {
        this.$store.commit('form/SET_BIRTH_MONTH', value)
      }
    },

    birth_year: {
      get () {
        return this.$store.state.form.birth_year
      },
      set (value) {
        this.$store.commit('form/SET_BIRTH_YEAR', value)
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
