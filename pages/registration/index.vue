<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mb-4 text-lg text-brand-grey">
        Silahkan isi <strong>Nomor Induk Kependudukan (NIK)</strong> Anda.
      </p>

      <pkbr-input
        v-model="nik"
        class="mb-3"
        name="NIK"
        rules="required|nik"
        type="tel"
      />

      <form-actions class="mt-12 hidden lg:flex" back-link="/terms-conditions" @next="nextStep" />
    </ValidationObserver>
    <!-- <Footer class="lg:hidden buttom-0" /> -->
  </div>
</template>

<script>
import { ValidationObserver, extend } from 'vee-validate'
// import Footer from '@/layouts/footer.vue'

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
