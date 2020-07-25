<template>
  <div class="container mx-auto p-6">
    <p class="mt-4 text-sm">
      Silahkan isi kelengkapan formulir informasi pekerjaan/profesi calon peserta test COVID-19.
    </p>

    <ValidationObserver ref="form">
      <pkbr-select
        v-model="occupationType"
        class="mt-6"
        :items="occupationTypeOptions"
        name="Jenis Pekerjaan"
        label="Jenis Pekerjaan"
        rules="required"
      />

      <pkbr-input
        v-if="occupationType === 13"
        v-model="occupationName"
        class="mt-4"
        name="Nama Pekerjaan"
        label="Nama Pekerjaan"
        rules="required"
      />

      <pkbr-select
        v-if="occupationType === 14"
        v-model="workplaceName"
        :items="JabarOptions"
        class="mt-4"
        name="Unit Kerja"
        label="Unit Kerja"
        rules="required"
      />

      <pkbr-input
        v-if="occupationType !== 14"
        v-model="workplaceName"
        class="mt-4"
        name="Nama Tempat Bekerja"
        label="Nama Tempat Bekerja"
        rules="required"
      />
    </ValidationObserver>

    <form-actions class="mt-12" back-link="/registration/personal" @next="nextStep" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver } from 'vee-validate'

export default {
  components: { ValidationObserver },

  computed: {
    ...mapGetters('form', [
      'occupationTypeOptions',
      'JabarOptions'
    ]),

    occupationType: {
      get () {
        return this.$store.state.form.occupationType
      },
      set (value) {
        this.$store.commit('form/SET_OCCUPATION_TYPE', value)
      }
    },

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
        this.$router.replace('/registration/additional')
      }
    }
  }
}
</script>
