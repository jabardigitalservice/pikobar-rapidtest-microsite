<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mt-4 text-sm">
        Masukkan Nomor Induk Kependudukan (NIK) calon peserta test COVID-19.
      </p>

      <pkbr-input v-model="nik" class="mb-3" name="NIK" rules="required|nik" type="tel" />

      <div class="mt-12">
        <button type="button" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center" @click="nextStep">
          Lanjutkan
        </button>
        <nuxt-link to="/terms-conditions" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
          Kembali
        </nuxt-link>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

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
  },

  methods: {
    async nextStep () {
      const valid = await this.$refs.form.validate()

      if (valid) {
        this.$router.replace('/registration/personal')
      }
    }
  }
}
</script>
