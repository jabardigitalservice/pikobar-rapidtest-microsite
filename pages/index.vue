<template>
  <div class="container mx-auto p-6">
    <logo />

    <h2 class="text-2xl font-extrabold text-gray-900 text-center">
      Rapid Test COVID-19
    </h2>

    <div class="mt-8">
      <nuxt-link to="/terms-conditions" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Pendaftaran Baru
      </nuxt-link>

      <a href="#" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Lihat Status Pendaftaran
      </a>

      <a href="#" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Lihat Hasil Test
      </a>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
