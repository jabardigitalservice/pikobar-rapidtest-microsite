<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="text-lg text-brand-grey">
        Mohon isi <strong>nomor telepon/WhatsApp</strong> Anda.
      </p>
      <p class="mb-4 text-xs text-gray-700">
        Dengan ini Anda menyetujui akan menerima pesan notifikasi SMS/Whatsapp dari PIKOBAR.
        Pastikan data Anda benar karena undangan dan hasil tes akan dikirim ke nomor telepon Anda.
      </p>

      <pkbr-input
        v-model="phone_number"
        class="mt-4"
        name="Nomor Telepon"
        rules="required|phone_number"
        placeholder="Contoh: 081921678789"
        type="tel"
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
    phone_number: {
      get () {
        return this.$store.state.form.phone_number
      },
      set (value) {
        this.$store.commit('form/SET_PHONE_NUMBER', value)
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
