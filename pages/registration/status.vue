<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <pkbr-select-group
        v-model="status"
        label="Apakah Anda orang dengan salah satu status kesehatan berikut?"
        :items="statusOptions"
        name="Status"
      >
        <template slot="info">
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
        </template>
      </pkbr-select-group>
    </ValidationObserver>

    <form-actions class="mt-12" back-link="/registration/additional" @next="nextStep" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver } from 'vee-validate'

export default {
  components: { ValidationObserver },

  data () {
    return {
      //
    }
  },

  computed: {

    ...mapGetters('form', [
      'statusOptions'
    ]),

    status: {
      get () {
        return this.$store.state.form.status
      },
      set (value) {
        this.$store.commit('form/SET_STATUS', value)
      }
    }
  },

  mounted () {
    // Enable navigation prompt
    window.onbeforeunload = function () {
      return true
    }
  },

  methods: {
    async nextStep () {
      const valid = await this.$refs.form.validate()

      if (valid) {
        this.$router.replace('/registration/confirm')
      }
    }
  }
}
</script>
