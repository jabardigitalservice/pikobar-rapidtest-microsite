<template>
  <div class="container mx-auto p-6">
    <logo />

    <h2 class="text-xl text-gray-900 text-center">
      COVID-19 Rapid Test
    </h2>

    <div class="mt-8">
      <template v-if="enableRegistration">
        <nuxt-link to="/terms-conditions" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
          Pendaftaran Baru
        </nuxt-link>
      </template>
      <template v-else>
        <div class="bg-gray-50 sm:rounded-lg border border-gray-300">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="leading-6 font-bold text-gray-900">
              Pendaftaran Baru
            </h3>
            <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <p>
                Pendaftaran dapat dilakukan melalui <strong><a href="https://play.google.com/store/apps/details?id=id.go.jabarprov.pikobar" target="_blank">Aplikasi PIKOBAR</a></strong>.
              </p>
            </div>
          </div>
        </div>
      </template>

      <nuxt-link to="/check_registration" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Cek Pendaftaran &amp; Hasil
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash'
import { mapGetters } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  data () {
    return {
      //
    }
  },

  computed: {
    ...mapGetters('form', [
      'sessionId',
      'pikobarUid'
    ]),

    enableRegistration () {
      return process.env.enableRegistration || this.sessionId !== null
    }
  },

  mounted () {
    const sessionId = this.$route.query.sessionId
    const pikobarUid = this.$route.query.uid

    if (sessionId) {
      this.$store.commit('form/SET_SESSION_ID', sessionId)

      // const newRouteQuery = _.omit(this.$route.query, 'sessionId')
      // this.$router.replace({ query: newRouteQuery })
    }

    if (pikobarUid) {
      this.$store.commit('form/SET_PIKOBAR_UID', pikobarUid)

      // const newRouteQuery = _.omit(this.$route.query, 'uid')
      // this.$router.replace({ query: newRouteQuery })
    }
  }
}
</script>
