<template>
  <div class="container mx-auto p-6">
    <logo />

    <h2 class="text-xl text-gray-900 text-center">
      COVID-19 Rapid Test
    </h2>

    <div class="mt-8">
      <nuxt-link to="/terms-conditions" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Pendaftaran Baru
      </nuxt-link>

      <nuxt-link to="/check_registration" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Cek Pendaftaran &amp; Hasil
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import VueGeolocation from 'vue-browser-geolocation'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  async created () {
    await VueGeolocation.getLocation({ enableHighAccuracy: true })
  }
}
</script>
