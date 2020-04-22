<template>
  <div class="container mx-auto p-6">
    <h2 class="text-gray-900 text-center">
      Undangan Rapid Test COVID-19
    </h2>

    <div class="mt-4 text-center">
      <qrcode />

      <h1 class="text-4xl mt-2">
        A236AXQ
      </h1>

      <p class="mt-4">
        <strong>Waktu:</strong><br>
        Senin, 1 Mei 2020 08:00-10:00 WIB
      </p>
      <p class="mt-4">
        <strong>Tempat:</strong><br>
        Gedung Sate, Bandung
      </p>
    </div>

    <div class="mt-12">
      <nuxt-link to="/check_registration" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Qrcode from '~/components/Qrcode'

export default {
  components: {
    Qrcode
  }
}
</script>
