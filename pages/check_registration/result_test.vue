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
            <div v-if="event" class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Tanggal
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ format(new Date(event.start_at), 'eeee, dd MMMM yyyy HH:mm', {locale: lang}) + '-' + format(new Date(event.end_at), 'HH:mm', {locale: lang}) }} WIB
              </dd>
            </div>
            <div v-if="event" class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Tempat
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ event.event_location }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <content-result-reactive v-if="labResult === 'REACTIVE'" />
    <content-result-non-reactive v-if="labResult === 'NONREACTIVE'" />
    <content-result-inconclusive v-if="labResult === 'INCONCLUSIVE'" />
    <content-result-positive v-if="labResult === 'POSITIVE'" />
    <content-result-negative v-if="labResult === 'NEGATIVE'" />

    <div class="mt-6">
      <a href="https://api.whatsapp.com/send?phone=628112093306" target="_blank" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Hubungi Pusat Bantuan PIKOBAR
      </a>
      <nuxt-link to="/check_registration" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import ContentResultReactive from '@/components/ContentResultReactive'
import ContentResultNonReactive from '@/components/ContentResultNonReactive'
import ContentResultInconclusive from '@/components/ContentResultInconclusive'
import ContentResultPositive from '@/components/ContentResultPositive'
import ContentResultNegative from '@/components/ContentResultNegative'

export default {
  middleware: 'check_result',

  components: {
    ContentResultReactive,
    ContentResultNonReactive,
    ContentResultInconclusive,
    ContentResultPositive,
    ContentResultNegative
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
      'event',
      'labResult',
      'status'
    ])
  },

  mounted () {
    //
  },

  methods: {
    format
  }
}
</script>
