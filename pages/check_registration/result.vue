<template>
  <div class="container mx-auto p-6">
    <template v-if="status === 'NEW'" />
    <template v-if="status === 'APPROVED' && lastInvitation !== null" />

    <div>
      <h1 class="mb-4 text-center">
        <strong>Nama Peserta:</strong><br>
        {{ name }}
      </h1>

      <img :src="qrcode" height="320">

      <h1 class="mt-4 text-center">
        <strong>Nomor Pendaftaran:</strong><br>
        <h3 class="text-5xl">
          {{ registrationCode }}
        </h3>
      </h1>

      <template v-if="lastInvitation === null">
        <div class="bg-gray-50 sm:rounded-lg border border-gray-300 mt-8">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="leading-6 font-bold text-gray-900">
              Proses Verifikasi
            </h3>
            <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <p>
                Pendaftaran Anda masih dalam proses verifikasi.
              </p>

              <p class="mt-4">
                Hanya yang <strong>sudah diverifikasi dan dinyatakan memenuhi syarat</strong> oleh Dinas Kesehatan Provinsi atau Dinas Kesehatan Kabupaten/Kota yang akan mendapatkan undangan untuk mengikuti Tes Masif COVID-19 Provinsi Jawa Barat.
              </p>

              <p class="mt-4">
                Undangan akan dikirimkan melalui SMS, Whatsapp, dan Email yang digunakan untuk mendaftar.
              </p>
            </div>
          </div>
        </div>
      </template>

      <template v-if="lastInvitation !== null">
        <p class="mt-4 text-center">
          <strong>Waktu:</strong><br>
          <!-- eslint-disable vue/no-v-html -->
          <span v-html="getSchedule(lastInvitation)" />
          <!--eslint-enable-->
        </p>
        <p class="mt-4 text-center">
          <strong>Tempat:</strong><br>
          {{ lastInvitation.event.event_location }}
        </p>

        <info-attended-thankyou v-if="lastInvitation.attended_at !== null" :invitation="lastInvitation" />

        <div v-if="lastInvitation.attended_at === null" class="bg-gray-50 sm:rounded-lg border border-gray-300 mt-8">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="leading-6 font-bold text-gray-900">
              Informasi Penting
            </h3>
            <div class="mt-2 max-w-xl text-sm leading-5 text-gray-800">
              <ol style="list-style: decimal;" class="ml-4">
                <li>
                  Silahkan hadir pada jadwal waktu dan tempat yang sudah ditentukan pada undangan.
                </li>
                <li class="mt-2">
                  Tunjukkan undangan kode elektronik ini pada petugas checkin kehadiran saat tiba di lokasi.
                </li>
                <li class="mt-2">
                  Wajib membawa identitas (KTP) atau Kartu Keluarga (KK).
                </li>
                <li class="mt-2">
                  Wajib menggunakan masker serta mengikuti protokol kesehatan perlindungan diri dan orang lain.
                </li>
                <li class="mt-2">
                  Tes Masif COVID-19 ini tidak dipungut biaya.
                </li>
                <li class="mt-2">
                  Jangan membagikan nomor pendaftaran ini kepada orang lain. Pastikan identitas Anda tidak digunakan orang lain.
                </li>
                <li class="mt-2">
                  Informasi dan pertanyaan lebih lanjut hubungi Pusat Bantuan PIKOBAR: <a href="https://api.whatsapp.com/send?phone=628112093306" class="font-bold">08112093306</a> atau Dinas Kesehatan Kota/Kabupaten setempat.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </template>
    </div>

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
import { id } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz'
import ButtonLinkCallCenter from '@/components/ButtonLinkCallCenter'
import ButtonLinkRegistrationPdf from '@/components/ButtonLinkRegistrationPdf'
import InfoAttendedThankyou from '@/components/InfoAttendedThankyou'

export default {
  middleware: 'check_result',

  components: {
    InfoAttendedThankyou,
    ButtonLinkRegistrationPdf,
    ButtonLinkCallCenter
  },

  data () {
    return {
      //
    }
  },

  computed: {
    ...mapGetters('check', [
      'registrationCode',
      'name',
      'qrcode',
      'registrationPdf',
      'invitations',
      'lastInvitation',
      'status'
    ])
  },

  mounted () {
    //
  },

  methods: {
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

      const scheduleStartString = format(utcToZonedTime(scheduleStart, process.env.localTimezone), 'eeee, dd MMMM yyyy', { locale: id })
      const scheduleEndAtString = format(utcToZonedTime(scheduleEnd, process.env.localTimezone), 'eeee, dd MMMM yyyy', { locale: id })

      return `${scheduleStartString} <br />
      s/d <br />
      ${scheduleEndAtString}`
    }
  }
}
</script>
