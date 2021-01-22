<template>
  <div class="container mx-auto">
    <div class="mobile-screen relative w-full p-6">
      <div class="mobile-content mt-12">
        <template v-if="enableRegistration === false">
          <div>
            <h1 class="text-xl font-bold text-brand-grey">
              Selamat Datang,
            </h1>
            <p class="text-base mt-4 text-brand-grey">
              Anda berada di halaman Pikobar Tes Masif COVID-19 Jawa Barat. Pendaftaran dapat dilakukan melalui <strong>Aplikasi PIKOBAR</strong> pada menu <strong>Periksa Mandiri</strong>.
            </p>
            <p class="mt-4">
              Unduh melalui <a href="https://play.google.com/store/apps/details?id=id.go.jabarprov.pikobar" class="font-bold underline" target="_blank">Google Play</a> atau <a href="https://apps.apple.com/us/app/pikobar-jawa-barat/id1509760172" class="font-bold underline" target="_blank">Apple Store</a>.
            </p>
          </div>
        </template>
        <template v-if="enableRegistration">
          <div v-if="event !== null">
            <h1 class="text-xl font-bold text-brand-grey">
              Selamat Datang,
            </h1>
            <p v-if="event.is_ended" class="text-base mt-4 text-brand-grey">
              Anda berada di halaman Pikobar Tes Masif COVID-19 Jawa Barat. Mohon maaf Kegiatan <span class="font-bold text-red-700"><strong>{{ event.event_name }}.</strong> Sudah Selesai.</span>
            </p>
            <p v-else class="text-base mt-4 text-brand-grey">
              Anda berada di halaman Pikobar Tes Masif COVID-19 Jawa Barat. Anda dapat mengikuti kegiatan <strong>{{ event.event_name }}.</strong> Silahkan pilih menu <strong>Pendaftaran Baru</strong> di bawah, untuk melengkapi data-data Anda.
            </p>
          </div>
        </template>

        <div class="mt-8">
          <h1 class="text-xl font-bold text-brand-green">
            Apa yang ingin Anda
          </h1>
          <h1 class="text-xl font-bold text-brand-green">
            Lakukan?
          </h1>
        </div>

        <div>
          <template v-if="enableRegistration && !(event && event.is_ended)">
            <nuxt-link to="/terms-conditions">
              <div class="flex items-center rounded-lg border-2 border-brand-green my-4">
                <div class="flex-1 text-grey-darker text-center px-4 py-2 m-2">
                  <img src="/registration-icon1.svg" alt="Cek-status" width="112px" height="600">
                </div>
                <div class="flex-1 text-grey-darker text-left bg-grey-light px-4 py-2 m-2">
                  <p class="text-base font-bold text-brand-green">
                    Pendaftaran Baru
                  </p>
                </div>
              </div>
            </nuxt-link>
          </template>

          <nuxt-link to="/check_registration">
            <div class="flex items-center rounded-lg border-2 border-brand-green my-4">
              <div class="flex-1 text-grey-darker text-center px-4 py-2 m-2">
                <img src="/check-status-icon1.svg" alt="Cek-status" width="112px" height="96px">
              </div>
              <div class="flex-1 text-grey-darker text-left bg-grey-light px-4 py-2 m-2">
                <p class="text-base font-bold text-brand-green">
                  Cek Status &amp; Hasil Test
                </p>
              </div>
            </div>
          </nuxt-link>
          <a href="https://s.id/HotlinePikobar" target="_blank">
            <div class="flex items-center rounded-lg border-2 border-brand-green my-4">
              <div class="flex-1 text-grey-darker text-center px-4 py-2 m-2">
                <img src="/hotline-icon.svg" alt="Cek-status" width="112px" height="96px">
              </div>
              <div class="flex-1 text-grey-darker text-left bg-grey-light px-2 py-2 m-2">
                <p class="text-base font-bold text-brand-green">
                  Hubungi Pusat Bantuan PIKOBAR
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isAfter } from 'date-fns'
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'

export default {
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
      return process.env.enableRegistration || this.sessionId !== null
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
    }

    if (pikobarUid) {
      this.$store.commit('form/SET_PIKOBAR_UID', pikobarUid)
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
  }
}
</script>
