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
        name="Catatan Gejala/Riwayat Kontak"
        label="Catatan Gejala/Riwayat Kontak"
        type="textarea"
        rules="required"
      />

      <pkbr-select-group
        v-model="haveInteracted"
        class="mt-6"
        :items="haveInteractedOptions"
        name="Suspect/probable/konfirmasi"
        label="Apakah pernah berinteraksi dengan kasus suspek/probable/konfirmasi"
        rules="required"
      />

      <pkbr-check-group
        v-model="congenitalDisease"
        label="Apakah Anda memiliki penyakit bawaan?"
        :items="congenitalDiseaseOptions"
        name="Penyakit bawaan"
        rules="required"
      />

      <pkbr-input
        v-model="cityVisited"
        class="mt-4"
        name="Kota kunjungan"
        label="Sebutkan kota-kota yang pernah bapak/ibu kunjungi dalam 14 hari terakhir"
        placeholder="Tuliskan Kota yang telah Anda kunjungi"
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
      'haveInteractedOptions',
      'congenitalDiseaseOptions'
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

    haveInteracted: {
      get () {
        return this.$store.state.form.haveInteracted
      },
      set (value) {
        this.$store.commit('form/SET_HAVE_INTERACTED', value)
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
