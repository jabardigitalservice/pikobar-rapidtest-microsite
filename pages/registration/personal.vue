<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl text-gray-900 text-center">
      Data Tempat Tinggal Sekarang
    </h2>

    <p class="mt-4 text-sm">
      Silahkan isi kelengkapan data tempat tinggal sekarang calon peserta test COVID-19.
    </p>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Nama Lengkap</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="text" class="form-input block w-full">
      </div>
    </div>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Kabupaten/Kota</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="text" class="form-input block w-full">
      </div>
    </div>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Kecamatan</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="text" class="form-input block w-full">
      </div>
    </div>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Kelurahan/Desa</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="text" class="form-input block w-full">
      </div>
    </div>

    <div class="mt-4">
      <label class="block text-sm font-medium leading-5 text-gray-700">Alamat</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <textarea class="form-input block w-full" />
      </div>
    </div>

    <div class="mt-4">
      <label class="block text-sm font-medium leading-5 text-gray-700">Nomor Telepon</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="text" class="form-input block w-full">
      </div>
    </div>

    <div class="mt-12">
      <nuxt-link to="/registration/occupation" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Lanjutkan
      </nuxt-link>
      <nuxt-link to="/registration" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
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
