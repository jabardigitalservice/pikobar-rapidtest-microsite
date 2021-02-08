<template>
  <div>
    <span>
      <p class="text-xs text-gray-700 inline">Keterangan status</p>
      <button class="text-brand-green inline background-transparent font-bold py-1 text-xs outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all 0.15s ease;" @click="toggleModal()">
        Lihat detail
      </button>
    </span>
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--body-->
          <div class="relative p-6 flex-auto">
            <div class="mt-8 text-sm text-gray-700">
              <h3 class="font-bold">
                Kontak Erat:
              </h3>
              <p>
                Orang yang memiliki riwayat kontak dengan kasus probable atau konfirmasi COVID-19. Riwayat kontak yang dimaksud antara lain:
              </p>
              <ul class="list-disc pl-4 mt-2 mb-4">
                <li>
                  Kontak tatap muka/berdekatan dengan kasus probable atau kasus konfirmasi dalam radius 1 meter dan dalam jangka waktu 15 menit atau lebih.
                </li>
                <li>
                  Sentuhan fisik langsung dengan kasus probable atau konfirmasi (seperti bersalaman, berpegangan tangan, dan lain-lain).
                </li>
                <li>
                  Orang yang memberikan perawatan langsung terhadap kasus probable atau konfirmasi tanpa menggunakan APD yang sesuai standar.
                </li>
                <li>
                  Situasi lainnya yang mengindikasikan adanya kontak berdasarkan penilaian risiko lokal yang ditetapkan oleh tim penyelidikan epidemiologi setempat (penjelasan sebagaimana terlampir).
                </li>
              </ul>

              <h3 class="font-bold">
                Suspek:
              </h3>
              <ul class="list-disc pl-4 mt-2 mb-4">
                <li>Sesak napas pada 14 hari terakhir sebelum timbul gejala memiliki riwayat perjalanan atau tinggal di negara/wilayah Indonesia yang melaporkan transmisi lokal.</li>
                <li>Memiliki salah satu gejala sesak napas  dan pada 14 hari terakhir sebelum timbul gejala memiliki riwayat kontak dengan kasus konfirmasi/probable COVID-19.</li>
                <li>Sesak napas berat  yang membutuhkan perawatan di rumah sakit DAN tidak ada penyebab lain berdasarkan gambaran klinis yang meyakinkan.</li>
              </ul>

              <h3 class="font-bold">
                Probable:
              </h3>
              <ul class="list-disc pl-4 mt-2 mb-4">
                <li>Kasus suspek dengan ISPA Berat dengan gambaran klinis yang meyakinkan COVID-19 DAN belum ada hasil pemeriksaan laboratorium RT-PCR.</li>
              </ul>

              <h3 class="font-bold">
                Konfirmasi:
              </h3>
              <ul class="list-disc pl-4 mt-2 mb-4">
                <li>Seseorang yang dinyatakan positif terinfeksi virus COVID-19 yang dibuktikan dengan pemeriksaan laboratorium RT-PCR.</li>
              </ul>
            </div>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-4 rounded-b">
            <button class="text-brand-green bg-transparent border border-solid border-brand-green hover:bg-brand-green hover:text-white active:bg-brand-green font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all 0.15s ease;" @click="toggleModal()">
              Keluar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>
