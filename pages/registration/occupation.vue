<template>
  <div class="container mx-auto p-6">
    <p class="mt-4 text-sm">
      Silahkan isi kelengkapan formulir informasi pekerjaan/profesi calon peserta test COVID-19.
    </p>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Jenis Pekerjaan</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <select class="form-select block w-full">
          <option value="">
            Pilih Salah Satu...
          </option>
          <option value="7">
            Petugas Pelayanan Publik (Kasir/Customer Service Bank, Petugas Keamanan, Loket Layanan Publik)
          </option>
          <option value="8">
            Petugas Transportasi (Terminal, Airport, Stasiun, Ojol)
          </option>
          <option value="9">
            Petugas Kebersihan
          </option>
          <option value="10">
            Wartawan
          </option>
          <option value="11">
            Pedagang Pasar
          </option>
          <option value="12">
            Pemuka Agama
          </option>
          <option value="13">
            Lainnya
          </option>
        </select>
      </div>
    </div>

    <div class="mt-6">
      <label class="block text-sm font-medium leading-5 text-gray-700">Nama Tempat Kerja/Institusi</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="text" class="form-input block w-full">
      </div>
    </div>

    <div class="mt-12">
      <nuxt-link to="/registration/additional" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Lanjutkan
      </nuxt-link>
      <nuxt-link to="/registration/personal" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
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
