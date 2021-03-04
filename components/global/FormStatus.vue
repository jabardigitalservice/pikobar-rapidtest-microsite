<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="text-lg text-brand-grey">
        Apakah Anda termasuk salah satu <strong>status</strong> berikut?
      </p>
      <modal-detail-status />

      <pkbr-select-group
        v-model="status"
        :items="statusOptions"
        name="Status"
        rules="required"
        @next="nextStep"
      />
      <form-actions class="mt-12 flex" @prev="backStep" @next="nextStep" />
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import { mapGetters } from 'vuex'
import ModalDetailStatus from '../ModalDetailStatus.vue'

export default {
  components: { ValidationObserver, ModalDetailStatus },

  computed: {
    ...mapGetters('form', [
      'statusOptions'
    ]),

    status: {
      get () {
        return this.$store.state.form.status
      },
      set (value) {
        this.$store.commit('form/SET_STATUS', value)
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
