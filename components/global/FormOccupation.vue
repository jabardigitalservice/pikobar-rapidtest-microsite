<template>
  <div class="container mx-auto p-6">
    <p class="mb-4 text-lg text-brand-grey">
      Apa <strong>pekerjaan</strong> Anda sekarang?
    </p>

    <ValidationObserver ref="form">
      <pkbr-input
        v-model="workplaceName"
        class="mt-4"
        name="Nama Tempat Bekerja"
        label="Nama Tempat Bekerja"
        placeholder="Contoh: Dinas Komunikasi dan Informasi Jawa Barat"
        rules="required"
        @next="nextStep"
      />

      <pkbr-input
        v-model="occupationName"
        class="mt-4"
        name="Nama Profesi/Pekerjaan/Sub Bagian"
        label="Nama Profesi/Pekerjaan/Sub Bagian"
        placeholder="Contoh: PNS/Kepala Dinas/Guru/Ibu Rumah Tangga"
        rules="required"
        @next="nextStep"
      />
    </ValidationObserver>

    <form-actions class="mt-12" @prev="backStep" @next="nextStep" />
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  components: { ValidationObserver },

  computed: {
    occupationName: {
      get () {
        return this.$store.state.form.occupationName
      },
      set (value) {
        this.$store.commit('form/SET_OCCUPATION_NAME', value)
      }
    },

    workplaceName: {
      get () {
        return this.$store.state.form.workplaceName
      },
      set (value) {
        this.$store.commit('form/SET_WORKPLACE_NAME', value)
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
