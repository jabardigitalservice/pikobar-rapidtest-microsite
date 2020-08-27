<template>
  <div class="bg-gray-50 sm:rounded-lg border border-gray-300 mt-8">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="leading-6 font-bold text-gray-900">
        Terima Kasih
      </h3>
      <div class="mt-2 max-w-xl text-sm leading-5 text-gray-800">
        <p class="mt-4">
          Terima kasih telah menghadiri Tes Masif COVID-19 PIKOBAR Provinsi Jawa Barat.
        </p>

        <dl class="mt-4">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-1">
            <dt class="text-sm leading-5 font-bold text-gray-500">
              Tanggal
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {{ attendDate }}
            </dd>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-1 mt-4 sm:mt-0">
            <dt class="text-sm leading-5 font-bold text-gray-500">
              Waktu
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {{ attendTime }} WIB
            </dd>
          </div>
          <div v-if="invitation.attend_location !== null" class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-1 mt-4 sm:mt-0">
            <dt class="text-sm leading-5 font-bold text-gray-500">
              Tempat
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {{ attendLocation }}
            </dd>
          </div>
        </dl>

        <p class="mt-4">
          Saat ini masih dilakukan proses pemeriksaan di laboratorium. Hasil tes akan diberitahukan melalui SMS, Whatsapp, dan Website.
        </p>

        <p class="mt-4">
          Selama menunggu hasil tes, Anda diharapkan tetap memperbanyak aktivitas di rumah, menggunakan masker jika berpergian, menjaga jarak dan protokol kesehatan, serta melakukan pola hidup bersih dan sehat (PHBS).
        </p>

        <p class="mt-4">
          Hatur nuhun.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { id } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz'
import { format } from 'date-fns'

export default {
  props: {
    invitation: {
      type: Object,
      default: () => {
        return null
      }
    }
  },

  computed: {
    attendDate () {
      return format(utcToZonedTime(this.invitation.attended_at, process.env.localTimezone), 'eeee, dd MMMM yyyy', { locale: id })
    },

    attendTime () {
      return format(utcToZonedTime(this.invitation.attended_at, process.env.localTimezone), 'HH:mm', { locale: id })
    },

    attendLocation () {
      return this.invitation.attend_location
    }
  }
}
</script>
