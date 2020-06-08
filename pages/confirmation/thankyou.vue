<template>
  <div class="container mx-auto">
    <div class="relative h-screen w-full p-6" style="height: calc(100vh - 48px); max-height: 640px">
      <img src="/check-ilustration.png" class="mx-auto">

      <h1 class="text-xl font-bold mt-6">
        Hi, Ahmad Yurianto
      </h1>
      <p class="mt-4 text-sm">
        {{ text }}
      </p>
      <div class="absolute inset-x-0 bottom-0 p-6">
        <nuxt-link to="/" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
          Selesai
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: null
    }
  },

  mounted () {
    this.setText()
  },

  methods: {
    setText () {
      this.text = 'Terima kasih atas kesediaan Anda telah mengisi survei dari kami.'

      const type = this.$route.query.type

      if (type === 'attended') {
        this.text = 'Terima kasih Anda sudah mengikuti tes tersebut.'
      }
    }
  }
}
</script>
