<template>
  <div class="flex items-center rounded-lg border-2 border-brand-green my-4">
    <div class="flex-shrink-0 text-grey-darker text-center px-4 py-2 m-2">
      <img :src="image" :alt="text" width="112" height="72">
    </div>
    <div class="flex-grow text-grey-darker text-left bg-grey-light px-2 py-2 m-2">
      <p class="text-base font-bold text-brand-green">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    }
  }
}
</script>
