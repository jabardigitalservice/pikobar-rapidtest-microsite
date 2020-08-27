<template>
  <a :href="registrationPdfUrl" target="_blank" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
    Unduh Bukti Pendaftaran
  </a>
</template>

<script>
export default {
  props: {
    registrationPdfUrl: {
      type: String,
      default: ''
    }
  }
}
</script>
