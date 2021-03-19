<template>
  <div class="container mx-auto">
    <div class="relative w-full p-6">
      <div class="mt-12">
        <div class="lg:w-10/12">
          <h1 class="text-xl font-bold text-brand-grey">
            Selamat Datang,
          </h1>

          <template v-if="enableRegistration">
            <div v-if="event !== null" class="lg:w-10/12">
              <p v-if="event.is_ended" class="text-content">
                Anda berada di halaman Pikobar Tes Masif COVID-19 Jawa Barat. Mohon maaf Kegiatan <span class="font-bold text-red-700"><strong>{{ event.event_name }}.</strong> Sudah Selesai.</span>
              </p>
              <p v-else class="text-content">
                Anda berada di halaman Pikobar Tes Masif COVID-19 Jawa Barat. Anda dapat mengikuti kegiatan <strong>{{ event.event_name }}.</strong> Silahkan pilih menu <strong>Pendaftaran Baru</strong> di bawah, untuk melengkapi data-data Anda.
              </p>
            </div>
            <div v-else class="lg:w-10/12">
              <p class="text-content">
                Anda berada di halaman Pikobar Tes Masif COVID-19 Jawa Barat. Anda dapat mendaftarkan diri sebagai calon peserta tes. Silahkan pilih menu <strong>Pendaftaran Baru</strong> di bawah, untuk melengkapi data-data Anda.
              </p>
            </div>
          </template>
          <template v-else>
            <p class="text-content">
              Anda berada di halaman Pikobar Tes Masif COVID-19 Jawa Barat. Pendaftaran dapat dilakukan melalui <strong>Aplikasi PIKOBAR</strong> pada menu <strong>Periksa Mandiri</strong>.
            </p>
            <p class="mt-4">
              Unduh melalui <a href="https://play.google.com/store/apps/details?id=id.go.jabarprov.pikobar" class="font-bold underline" target="_blank">Google Play</a> atau <a href="https://apps.apple.com/us/app/pikobar-jawa-barat/id1509760172" class="font-bold underline" target="_blank">Apple Store</a>.
            </p>
          </template>
        </div>

        <div class="mt-8">
          <h1 class="text-xl font-bold text-brand-green w-9/12 lg:w-full">
            Apa yang ingin Anda Lakukan?
          </h1>
        </div>

        <div v-for="data in actionButton" :key="data.id">
          <a v-if="data.id === 'hotline'" :href="data.url" target="_blank">
            <button-action :image="data.image" :text="data.text" />
          </a>
          <nuxt-link v-else :to="data.url">
            <button-action :image="data.image" :text="data.text" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isAfter } from 'date-fns'
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'
import ButtonAction from '@/components/ButtonAction'

export default {
  components: {
    ButtonAction
  },
  data () {
    return {
      event: null,
      actionButton: [
        { id: 'registration', text: 'Pendaftaran Baru', image: '/registration-icon1.svg', url: '/terms-conditions' },
        { id: 'cekStatus', text: 'Cek Status & Hasil Test', image: '/check-status-icon1.svg', url: '/check_registration' },
        { id: 'hotline', text: 'Hubungi Pusat Bantuan PIKOBAR', image: '/hotline-icon.svg', url: 'https://s.id/HotlinePikobar' }
      ]
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
    } else {
      return this.actionButton.shift()
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

        if (!this.enableRegistration) { return }
        if (!this.event) { return }
        if (!this.event.is_ended) { return this.actionButton } else { return this.actionButton.shift() }
      } catch (e) {
        //
      }
    }
  }
}
</script>
