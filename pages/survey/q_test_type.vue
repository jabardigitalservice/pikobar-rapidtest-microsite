<template>
  <div class="container mx-auto">
    <div class="mobile-screen relative h-screen w-full p-6">
      <ValidationObserver ref="form">
        <div class="mobile-content">
          <validation-provider v-slot="{ errors }" name="Metode Tes" rules="required">
            <p>
              Metode tes COVID-19 apakah yang Anda ikuti tersebut?
            </p>

            <p v-if="errors.length > 0" class="mt-2 text-sm text-red-600">
              <svg class="h-5 w-5 text-red-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              {{ errors[0] }}
            </p>

            <div class="mt-6">
              <a href="#" class="flex items-start border rounded-lg p-4" @click.prevent="testMethod = 1">
                <div class="absolute flex items-center h-5">
                  <input v-model="testMethod" name="test_method" type="radio" class="form-radio h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out" :value="1">
                </div>
                <div class="pl-7 text-sm leading-5">
                  <label class="font-medium text-gray-700">Rapid Test
                  </label>
                  <p class="text-gray-500">
                    Menggunakan sampel uji darah.
                  </p>
                </div>
              </a>

              <a href="#" class="flex items-start border rounded-lg p-4 mt-4" @click.prevent="testMethod = 2">
                <div class="absolute flex items-center h-5">
                  <input v-model="testMethod" name="test_method" type="radio" class="form-radio h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out" :value="2">
                </div>
                <div class="pl-7 text-sm leading-5">
                  <label class="font-medium text-gray-700">Swab/PCR Test
                  </label>
                  <p class="text-gray-500">
                    Menggunakan sampel usap dari dalam hidung atau tenggorokan.
                  </p>
                </div>
              </a>

              <a href="#" class="flex items-start border rounded-lg p-4 mt-4" @click.prevent="testMethod = 0">
                <div class="absolute flex items-center h-5">
                  <input v-model="testMethod" name="test_method" type="radio" class="form-radio h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out" :value="0">
                </div>
                <div class="pl-7 text-sm leading-5">
                  <label class="font-medium text-gray-700">Tidak Tahu
                  </label>
                </div>
              </a>
            </div>
          </validation-provider>
        </div>
      </ValidationObserver>
      <form-actions class="mobile-actions absolute inset-x-0 bottom-0" back-link="/survey/q_attend" @next="nextStep" />
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/id.json'

extend('required', {
  ...required,
  message: messages.required
})

export default {
  middleware: 'survey_form',
  components: { ValidationObserver, ValidationProvider },

  data () {
    return {
      //
    }
  },

  computed: {
    testMethod: {
      get () {
        return this.$store.state.survey.testMethod
      },
      set (value) {
        this.$store.commit('survey/SET_TEST_METHOD', value)
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
        this.$router.push({ path: '/survey/thankyou', query: { type: 'attended' } })
      }
    }
  }
}
</script>
