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

      <pkbr-select-group
        v-model="contact"
        label="Apakah pernah berinteraksi dengan ODP/PDP/Positif COVID-19?"
        :items="[
          {value: '0', text: 'Ya'},
          {value: '1', text: 'Tidak'},
          {value: '2', text: 'Tidak Tahu'},
        ]"
        name="Riwayat Kontak"
        rules="required"
      >
        <template slot="prepend-info">
          <p class="mt-3 text-sm text-gray-700">
            <strong>ODP:</strong> Orang Dalam Pemantauan (orang ini sempat bepergian ke negara yang menjadi pusat COVID 19. ODP juga adalah orang yang pernah berinteraksi dengan pasien positif COVID 19, tapi belum menunjukan gejala.<br><br>
            <strong>PDP:</strong> Pasien Dalam Pengawasan (pasien ini sudah dirawat oleh tenaga kesehatan (menjadi pasien) dan menunjukkan gejala sakit seperti demam, batuk, pilek dan sesak napas.
          </p>
        </template>
      </pkbr-select-group>

      <pkbr-check-group
        v-model="events"
        label="Apakah pernah datang di kegiatan-kegiatan berikut ini?"
        :items="eventsOptions"
        name="Riwayat Kegiatan"
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
        this.$router.replace('/registration/confirm')
      }
    }
  }
}
</script>
