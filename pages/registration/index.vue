<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <p class="mt-4 text-sm">
        Masukkan Nomor Induk Kependudukan (NIK) calon peserta test COVID-19.
      </p>

      <div class="mt-6">
        <validation-provider v-slot="{ errors }" name="NIK" rules="required|nik">
          <div class="mt-1 relative rounded-md shadow-sm">
            <input v-model.lazy="nik" type="text" class="form-input block w-full" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': errors.length > 0 }">
            <div v-if="errors.length > 0" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
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

extend('nik', {
  validate: (value) => {
    const allowedPrefix = [
      '11', '12', '13', '14', '15', '16', '17', '18', '19', '21',
      '31', '32', '33', '34', '35', '36', '51', '52', '53', '61',
      '62', '63', '64', '65', '71', '72', '73', '74', '75', '76',
      '81', '82', '91', '92'
    ]

    const prefix = value.substring(0, 2)

    return allowedPrefix.includes(prefix) && value.match(/^[1-9]{1}[0-9]{11}(?!0{4})[0-9]{4}$/g)
  },
  message: 'Format NIK tidak benar'
})

export default {
  components: { ValidationObserver, ValidationProvider },

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
