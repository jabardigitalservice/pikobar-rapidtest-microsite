<template>
  <div class="container mx-auto p-6">
    <h2 class="text-gray-900 text-center">
      Informasi Hasil Tes
    </h2>
    <div class="bg-gray-50 sm:rounded-lg border border-gray-300 mt-8 p-4 sm:p-0">
      <div>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <dl>
            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Nama
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ name }}
              </dd>
            </div>
            <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Nomor
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ registrationCode }}
              </dd>
            </div>
            <div v-if="lastInvitation.event" class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Tanggal
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <!-- eslint-disable vue/no-v-html -->
                <span v-html="getSchedule(lastInvitation)" />
                <!--eslint-enable-->
              </dd>
            </div>
            <div v-if="lastInvitation.event" class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Waktu
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ attendTime }}
              </dd>
            </div>
            <div v-if="lastInvitation.event" class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Tempat
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ lastInvitation.event.event_location }}
              </dd>
            </div>
            <div v-if="lastInvitation.event && lastInvitation.attend_location !== null" class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Lokasi
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ attendLocation }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <content-result-reactive v-if="lastInvitation.lab_result_type === 'REACTIVE'" />
    <content-result-non-reactive v-if="lastInvitation.lab_result_type === 'NONREACTIVE'" />
    <content-result-inconclusive v-if="lastInvitation.lab_result_type === 'INCONCLUSIVE'" />
    <content-result-positive v-if="lastInvitation.lab_result_type === 'POSITIVE'" />
    <content-result-negative v-if="lastInvitation.lab_result_type === 'NEGATIVE'" />

    <div class="mt-6 text-center">
      <button-link-registration-pdf :registration-pdf-url="registrationPdf" />
      <button-link-call-center />

      <nuxt-link to="/check_registration" class="inline-flex items-center justify-center px-2 mb-3 text-base leading-6 font-medium text-brand-green-dark text-center mt-5">
        <svg
          class="h-5 w-auto inline-block mr-2"
          fill="currentColor"
          viewBox="0 0 256 512"
        ><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" /></svg>
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { format, isSameDay } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { id } from 'date-fns/locale'
import ContentResultReactive from '@/components/ContentResultReactive'
import ContentResultNonReactive from '@/components/ContentResultNonReactive'
import ContentResultInconclusive from '@/components/ContentResultInconclusive'
import ContentResultPositive from '@/components/ContentResultPositive'
import ContentResultNegative from '@/components/ContentResultNegative'
import ButtonLinkCallCenter from '@/components/ButtonLinkCallCenter'
import ButtonLinkRegistrationPdf from '@/components/ButtonLinkRegistrationPdf'

export default {
  middleware: 'check_result',

  components: {
    ContentResultReactive,
    ContentResultNonReactive,
    ContentResultInconclusive,
    ContentResultPositive,
    ContentResultNegative,
    ButtonLinkCallCenter,
    ButtonLinkRegistrationPdf
  },

  data () {
    return {
      lang: id
    }
  },

  computed: {
    ...mapGetters('check', [
      'registrationCode',
      'name',
      'registrationPdf',
      'invitations',
      'lastInvitation',
      'status'
    ]),

    attendDate () {
      if (this.lastInvitation.attended_at === null) {
        return format(utcToZonedTime(this.lastInvitation.event.start_at, process.env.localTimezone), 'eeee, dd MMMM yyyy', { locale: id })
      }

      return format(utcToZonedTime(this.lastInvitation.attended_at, process.env.localTimezone), 'eeee, dd MMMM yyyy', { locale: id })
    },

    attendTime () {
      if (this.lastInvitation.attended_at === null) {
        return format(utcToZonedTime(this.lastInvitation.event.start_at, process.env.localTimezone), 'HH:mm', { locale: id }) + ' WIB'
      }

      return format(utcToZonedTime(this.lastInvitation.attended_at, process.env.localTimezone), 'HH:mm', { locale: id }) + ' WIB'
    },

    attendLocation () {
      return this.lastInvitation.attend_location
    }
  },

  mounted () {
    //
  },

  methods: {
    format,
    getSchedule (lastInvitation) {
      let scheduleStart = new Date(lastInvitation.event.start_at)
      let scheduleEnd = new Date(lastInvitation.event.end_at)

      if (lastInvitation.rdt_event_schedule_id !== null) {
        scheduleStart = new Date(lastInvitation.schedule.start_at)
        scheduleEnd = new Date(lastInvitation.schedule.end_at)
      }

      if (isSameDay(scheduleStart, scheduleEnd)) {
        const scheduleStartString = format(utcToZonedTime(scheduleStart, process.env.localTimezone), 'eeee, dd MMMM yyyy HH:mm', { locale: id })
        const scheduleEndAtString = format(utcToZonedTime(scheduleEnd, process.env.localTimezone), 'HH:mm', { locale: id })

        return `${scheduleStartString}-${scheduleEndAtString} WIB`
      }

      const scheduleStartString = format(utcToZonedTime(scheduleStart, process.env.localTimezone), 'dd MMMM yyyy', { locale: id })
      const scheduleEndAtString = format(utcToZonedTime(scheduleEnd, process.env.localTimezone), 'dd MMMM yyyy', { locale: id })

      return `${scheduleStartString} <br />
      s/d <br />
      ${scheduleEndAtString}`
    }
  }
}
</script>
