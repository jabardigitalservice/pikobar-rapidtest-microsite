<template>
  <div class="container mx-auto p-6">
    <p>
      Masukkan Nomor Induk Kependudukan (NIK) calon peserta test COVID-19.
    </p>

    <div class="mt-6">
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="text" id="nik" class="form-input block w-full">
      </div>
    </div>

    <div class="mt-12">
      <nuxt-link to="/registration/personal" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Lanjutkan
      </nuxt-link>
      <nuxt-link to="/terms-conditions" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  //
}
</script>
