<template>
  <div class="container mx-auto">
    <div class="mobile-screen relative w-full p-6">
      <div class="mobile-content">
        <logo />

        <div class="mt-8">
          <template v-if="enableRegistration === false">
            <div class="bg-gray-50 sm:rounded-lg border border-gray-300">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="leading-6 font-bold text-gray-900">
                  Pendaftaran Baru
                </h3>
                <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                  <p>
                    Pendaftaran dapat dilakukan melalui <strong>Aplikasi PIKOBAR</strong> pada menu <strong>Periksa Mandiri</strong>.
                  </p>
                  <p class="mt-4">
                    Unduh melalui <a href="https://play.google.com/store/apps/details?id=id.go.jabarprov.pikobar" class="font-bold underline" target="_blank">Google Play</a> atau <a href="https://apps.apple.com/us/app/pikobar-jawa-barat/id1509760172" class="font-bold underline" target="_blank">Apple Store</a>.
                  </p>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div>
          <template v-if="enableRegistration">
            <template v-if="event !== null">
              <div class="bg-gray-50 sm:rounded-lg border border-gray-300 mb-8">
                <div class="px-4 py-5 sm:p-6">
                  <div class="mt-2 max-w-xl text-sm leading-5 text-gray-800">
                    <p class="mb-2">
                      <strong>Pendaftaran Peserta</strong>
                    </p>
                    <p>
                      {{ event.event_name }}
                    </p>
                    <p v-if="event.is_ended" class="mt-4 font-bold text-red-700">
                      Kegiatan Tes Masif Sudah Selesai
                    </p>
                  </div>
                </div>
              </div>
            </template>

            <nuxt-link to="/terms-conditions" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
              Pendaftaran Baru
            </nuxt-link>
          </template>
          <nuxt-link to="/check_registration" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-center mt-2" :class="{ 'bg-brand-green-dark text-white': enableRegistration === false, 'text-brand-green-dark': enableRegistration === true }">
            Cek Pendaftaran &amp; Hasil
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash'
import { isAfter } from 'date-fns'
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  data () {
    return {
      event: null
    }
  },

  computed: {
    ...mapGetters('form', [
      'sessionId',
      'pikobarUid'
    ]),

    enableRegistration () {
      return process.env.enableRegistration || (this.sessionId !== null && this.event !== null)
    }
  },

  methods: {
    async getEventDetail (sessionId) {
      try {
        this.event = await this.$axios.$get(`/api/rdt/check-event?event_code=${sessionId}`)

        const today = new Date()
        const eventEndDate = new Date(this.event.end_at)

        this.event.is_ended = isAfter(today, eventEndDate)
      } catch (e) {
        //
      }
    }
  },

  mounted () {
    const sessionId = this.$route.query.sessionId
    const pikobarUid = this.$route.query.uid

    if (sessionId) {
      Cookies.set('session_id', sessionId)

      this.$store.commit('form/SET_SESSION_ID', sessionId)

      this.$store.dispatch('form/saveSessionId', { sessionId })

      this.getEventDetail(sessionId)
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
