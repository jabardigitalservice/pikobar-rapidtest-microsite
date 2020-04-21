<template>
  <div class="container mx-auto p-6">
    <h1 v-if="error.statusCode === 404">
      Halaman tidak ditemukan.
    </h1>
    <h1 v-else>
      An error occurred
    </h1>

    <nuxt-link to="/" class="mt-24 block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
      Halaman Depan
    </nuxt-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>
