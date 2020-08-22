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
      'eventsOptions'
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
