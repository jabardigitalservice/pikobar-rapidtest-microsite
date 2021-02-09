<template>
  <div class="container mx-auto p-6">
    <p class="mb-4 text-lg text-brand-grey">
      Apa <strong>pekerjaan</strong> Anda sekarang?
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

      <pkbr-select
        v-if="occupationType === 14"
        v-model="workplaceName"
        :items="jabarOptions"
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

      <pkbr-select
        v-if="occupationType === 14"
        v-model="employeeType"
        :items="employeeTypeOptions"
        class="mt-4"
        name="Tipe Kepegawaian"
        label="Tipe Kepegawaian"
        rules="required"
      />

      <pkbr-input
        v-model="occupationName"
        class="mt-4"
        name="Nama Profesi/Pekerjaan/Sub Bagian"
        label="Nama Profesi/Pekerjaan/Sub Bagian"
        rules="required"
      />
    </ValidationObserver>

    <form-actions class="mt-12" @prev="backStep" @next="nextStep" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver } from 'vee-validate'

export default {
  components: { ValidationObserver },

  data () {
    return {
      employeeTypeOptions: [
        { value: 'PNS', text: 'PNS' },
        { value: 'NON-PNS', text: 'Non PNS' }
      ]
    }
  },

  computed: {
    ...mapGetters('form', [
      'occupationTypeOptions',
      'jabarOptions'
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
    },

    employeeType: {
      get () {
        return this.$store.state.form.employeeType
      },
      set (value) {
        this.$store.commit('form/SET_EMPLOYEE_TYPE', value)
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
