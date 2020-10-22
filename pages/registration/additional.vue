<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <pkbr-check-group
        v-model="symptoms"
        label="Apakah mengalami gejala-gejala berikut ini?"
        :items="symptomsOptions"
        name="Gejala"
        rules="required"
      />

      <pkbr-input
        v-model="notes"
        class="mt-6"
        name="Gejala lain yang dirasakan"
        label="Gejala lain yang dirasakan"
        type="textarea"
        rules="required"
      />

      <pkbr-check-group
        v-model="congenitalDisease"
        label="Apakah Anda memiliki penyakit bawaan?"
        :items="congenitalDiseaseOptions"
        name="Penyakit bawaan"
        rules="required"
      />

      <pkbr-select-group
        v-model="isCityVisited"
        class="mt-6"
        :items="cityVisitedOptions"
        name="Kota kunjungan"
        label="Apakah Anda pernah berkunjung ke luar kota dalam 14 hari terakhir?"
        rules="required"
      />

      <pkbr-input
        v-if="isCityVisited === 'YES'"
        v-model="cityVisited"
        class="mt-4"
        name="Kota kunjungan"
        label="Sebutkan kota-kota yang pernah bapak/ibu kunjungi dalam 14 hari terakhir"
        placeholder="Masukan kota-kota yang pernah Anda kunjungi"
        rules="required"
      />
    </ValidationObserver>

    <form-actions class="mt-12" back-link="/registration/occupation" @next="nextStep" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver } from 'vee-validate'

export default {
  components: { ValidationObserver },

  data () {
    return {
      //
    }
  },

  computed: {
    ...mapGetters('form', [
      'symptomsOptions',
      'eventsOptions',
      'congenitalDiseaseOptions',
      'cityVisitedOptions'
    ]),

    symptoms: {
      get () {
        return this.$store.state.form.symptoms
      },
      set (value) {
        this.$store.commit('form/SET_SYMPTOMS', value)
      }
    },

    contact: {
      get () {
        return this.$store.state.form.symptomsInteraction
      },
      set (value) {
        this.$store.commit('form/SET_SYMPTOMS_INTERACTION', value)
      }
    },

    events: {
      get () {
        return this.$store.state.form.symptomsActivity
      },
      set (value) {
        this.$store.commit('form/SET_SYMPTOMS_ACTIVITY', value)
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

    isCityVisited: {
      get () {
        return this.$store.state.form.isCityVisited
      },
      set (value) {
        this.$store.commit('form/SET_IS_CITY_VISITED', value)
      }
    },

    cityVisited: {
      get () {
        return this.$store.state.form.cityVisited
      },
      set (value) {
        this.$store.commit('form/SET_CITY_VISITED', value)
      }
    },

    congenitalDisease: {
      get () {
        return this.$store.state.form.congenitalDisease
      },
      set (value) {
        this.$store.commit('form/SET_CONGENITAL_DISEASE', value)
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
        this.$router.replace('/registration/status')
      }
    }
  }
}
</script>
