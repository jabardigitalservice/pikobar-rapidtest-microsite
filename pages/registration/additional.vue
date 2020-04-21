<template>
  <div class="container mx-auto p-6">
    <h2 class="text-xl text-gray-900 text-center">
      Gejala dan Riwayat Kontak
    </h2>

    <p class="mt-4 text-sm font-medium">
      Apakah mengalami gejala-gejala berikut ini?
    </p>

    <div v-for="symptom in symptoms" :key="symptom.value" class="mt-3">
      <div class="relative flex items-start">
        <div class="absolute flex items-center h-5">
          <input type="checkbox" class="form-checkbox h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out">
        </div>
        <div class="pl-6 text-sm leading-5">
          <label class="text-gray-700">{{ symptom.text }}</label>
        </div>
      </div>
    </div>

    <p class="mt-8 text-sm font-medium">
      Apakah pernah berinteraksi dengan ODP/PDP/Positif COVID-19?
    </p>

    <p class="mt-3 text-sm text-gray-700">
      <strong>ODP:</strong> Orang Dalam Pemantauan (orang ini sempat bepergian ke negara yang menjadi pusat COVID 19. ODP juga adalah orang yang pernah berinteraksi dengan pasien positif COVID 19, tapi belum menunjukan gejala.<br><br>
      <strong>PDP:</strong> Pasien Dalam Pengawasan (pasien ini sudah dirawat oleh tenaga kesehatan (menjadi pasien) dan menunjukkan gejala sakit seperti demam, batuk, pilek dan sesak napas.
    </p>

    <div class="mt-6">
      <div class="flex items-center">
        <input name="form-input push_notifications" type="radio" class="form-radio h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out" value="0">
        <label class="ml-3">
          <span class="block text-sm leading-5 font-medium text-gray-700">Ya</span>
        </label>
      </div>
      <div class="mt-2 flex items-center">
        <input name="form-input push_notifications" type="radio" class="form-radio h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out" value="1">
        <label class="ml-3">
          <span class="block text-sm leading-5 font-medium text-gray-700">Tidak</span>
        </label>
      </div>
      <div class="mt-2 flex items-center">
        <input name="form-input push_notifications" type="radio" class="form-radio h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out" value="2">
        <label class="ml-3">
          <span class="block text-sm leading-5 font-medium text-gray-700">Tidak Tahu</span>
        </label>
      </div>
    </div>

    <p class="mt-8 text-sm font-medium">
      Apakah pernah datang di kegiatan-kegiatan berikut ini?
    </p>

    <div v-for="event in events" :key="event.value" class="mt-3">
      <div class="relative flex items-start">
        <div class="absolute flex items-center h-5">
          <input type="checkbox" class="form-checkbox h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out">
        </div>
        <div class="pl-6 text-sm leading-5">
          <label class="text-gray-700">{{ event.text }}</label>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <nuxt-link to="/registration/confirm" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Lanjutkan
      </nuxt-link>
      <nuxt-link to="/registration/occupation" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      symptoms: [
        { value: 1, text: 'Batuk' },
        { value: 2, text: 'Menggigil' },
        { value: 3, text: 'Nyeri Abdomen' },
        { value: 4, text: 'Pilek' },
        { value: 5, text: 'Sakit Tenggorokan' },
        { value: 6, text: 'Suhu Tubuh < 38' },
        { value: 7, text: 'Lemah (malaise)' },
        { value: 8, text: 'Mual atau Muntah' },
        { value: 9, text: 'Nyeri Otot' },
        { value: 10, text: 'Sakit Kepala' },
        { value: 11, text: 'Sesak Napas' },
        { value: 12, text: 'Suhu Tubuh >= 38 C' }
      ],
      events: [
        { value: 1, text: 'Seminar Platform Bisnis Tanpa Riba di Sentul, Kabupaten Bogor (25-28 Februari)' },
        { value: 2, text: 'Seminar Gereja Protestan di Indonesia Bagian Barat / GPIB di Hotel Aston Bogor (26 - 29 Februari)' },
        { value: 3, text: 'Seminar Gereja Bethel Indonesia / GBI di Lembang, Kabupaten Bandung Barat (3-5 Maret)' },
        { value: 4, text: 'Musyawarah Daerah Himpunan Pengusaha Muda Indonesia / HIPMI Jabar di Kabupaten Karawang (9 Maret)' }
      ]
    }
  }
}
</script>
