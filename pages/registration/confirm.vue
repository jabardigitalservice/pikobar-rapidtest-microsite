<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl text-gray-900 text-center">
      Periksa Isian Data
    </h2>

    <p class="mt-4 text-sm">
      Klik tombol <strong>Kirim</strong> untuk menyelesaikan proses pendaftaran Anda.
    </p>

    <div class="px-4 py-5">
      <dl>
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Nama Lengkap
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ name }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            NIK
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ nik }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Tanggal Lahir
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            15 November 1989
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Alamat Domisili
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ address }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Nomor Telepon (Whatsapp)
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {{ phone_number }}
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Jenis Pekerjaan
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Pedagang Pasar
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Nama Tempat Bekerja
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Pasar Ciroyom
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Gejala Dialami
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Batuk, Demam
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Riwayat Kontak
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Ya
          </dd>
        </div>
        <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            Riwayat Kegiatan
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            Tidak Ada
          </dd>
        </div>
      </dl>
    </div>

    <div class="bg-red-50 sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="leading-6 font-bold text-gray-900">
          Perhatian
        </h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <p>
            Data yang tidak lengkap akan membuat proses verifikasi menjadi terkendala. Pastikan data yang Anda isikan benar dan lengkap.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <nuxt-link to="/registration/done" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-orange text-center">
        Kirim
      </nuxt-link>
      <nuxt-link to="/registration/additional" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('form', [
      'nik',
      'name',
      'address',
      'phone_number'
    ])
  }
}
</script>
