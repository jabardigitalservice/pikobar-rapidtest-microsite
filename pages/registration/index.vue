<template>
  <div class="container mx-auto p-6">
    <div class="bg-orange-50 sm:rounded-lg border border-orange-300 mt-4">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="leading-6 font-bold text-gray-900">
          Perhatian
        </h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-800">
          <p>NIK hanya bisa dimasukan sekali. NIK yang sudah dimasukan, tidak dapat dimasukan lagi.</p>
        </div>
      </div>
    </div>
    <ValidationObserver ref="form">
      <p class="mt-4 text-sm">
        Masukkan Nomor Induk Kependudukan (NIK) calon peserta test COVID-19.
      </p>

      <pkbr-input v-model="nik" class="mb-3" name="NIK" rules="required|nik|nik_registered" type="tel" />

      <form-actions class="mt-12" back-link="/terms-conditions" @next="nextStep" />
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, extend } from 'vee-validate'

export default {
  components: { ValidationObserver },

  data () {
    return {
      //
    }
  },

  computed: {
    nik: {
      get () {
        return this.$store.state.form.nik
      },
      set (value) {
        this.$store.commit('form/SET_NIK', value)
      }
    }
  },

  mounted () {
    // Enable navigation prompt
    window.onbeforeunload = function () {
      return true
    }
    extend('nik_registered', {
      validate: this.nikRegistered,
      message: 'NIK telah terdaftar'
    })
  },

  methods: {
    async nextStep () {
      const valid = await this.$refs.form.validate()

      if (valid) {
        this.$router.replace('/registration/personal')
      }
    },
    async nikRegistered () {
      try {
        await this.$axios.$post('/api/register/check-nik', {
          nik: this.$store.state.form.nik
        })
        return true
      } catch (error) {
        if (error.response.status === 422) {
          return false
        }
      }
    }
  }
}
</script>
