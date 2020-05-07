<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mt-4 text-sm">
        Masukkan Nomor Induk Kependudukan (NIK) calon peserta test COVID-19.
      </p>

      <div class="mt-6">
        <validation-provider v-slot="{ errors }" name="NIK" rules="required">
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model="nik" type="text" class="form-input block w-full">
          </div>
          <p class="mt-2 text-sm text-red-600">
            {{ errors[0] }}
          </p>
        </validation-provider>
      </div>

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
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/id.json'

extend('required', {
  ...required,
  message: messages.required
})

export default {
  components: { ValidationObserver, ValidationProvider },

  data () {
    return {
      nik: null
    }
  },

  mounted () {
    this.nik = this.$store.state.form.nik
  },

  methods: {
    async nextStep () {
      const valid = await this.$refs.form.validate()

      if (valid) {
        this.$store.commit('form/SET_FIELD_STEP_INDEX', { nik: this.nik })

        this.$router.push('/registration/personal')
      }
    }
  }
}
</script>
