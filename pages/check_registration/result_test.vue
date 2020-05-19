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
                Yoga Hanggara
              </dd>
            </div>
            <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Tanggal
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Senin, 18 Mei 2020 08:00 WIB
              </dd>
            </div>
            <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Tempat
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Dinkes Kota Bandung, Jalan Supratman No 73, Cihapit, Bandung
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <content-result-reactive v-if="labResult === 'REACTIVE'" />
    <content-result-non-reactive v-if="labResult === 'NONREACTIVE'" />

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

export default {
  middleware: 'check_result',

  components: {
    ContentResultReactive,
    ContentResultNonReactive
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
