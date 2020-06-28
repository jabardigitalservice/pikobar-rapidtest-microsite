<template>
  <div class="container mx-auto p-6">
    <ValidationObserver ref="form">
      <pkbr-select-group
        v-model="status"
        label="Apakah Anda orang dengan salah satu status berikut?"
        :items="statusOptions"
        name="Status"
      >
        <template slot="info">
          <p class="mt-3 text-sm text-gray-700">
            <strong>ODP:</strong>
            <ul class="list-disc pl-4 mt-2 mb-4">
              <li>Memiliki gejala demam >38°C; atau gejala gangguan sistem pernapasan seperti batuk, pilek, sakit tenggorokan.</li>
              <li>Memiliki riwayat perjalanan dalam/ luar negeri dengan transmisi lokal dan riwayat kontak dengan penderita.</li>
            </ul>
            <strong>PDP:</strong>
            <ul class="list-disc pl-4 mt-2 mb-4">
              <li>Memiliki Infeksi Saluran Pernapasan Akut (ISPA) atau demam  >38°C.</li>
              <li>Memiliki gejala batuk, pilek, sakit tenggorokan, sesak nafas, pneumonia berat/ radang paru-paru.</li>
              <li>Memiliki riwayat perjalanan dalam/ luar negeri dengan transmisi lokal dan riwayat kontak dengan penderita.</li>
            </ul>
            <strong>OTG:</strong>
            <ul class="list-disc pl-4 mt-2 mb-1">
              <li>Tidak ada gejala.</li>
              <li>Memiliki resiko tertular.</li>
              <li>
                Memiliki riwayat kontak erat dengan kasus positif
                Kontak erat high risk <strong>(2)</strong>.
              </li>
              <li>
                Memiliki riwayat kontak langsung dengan kasus konfirmasi/ probabel
                Kontak erat low risk <strong>(2)</strong>.
              </li>
            </ul>
            <strong>Kasus probable (2):</strong>
            <ul class="list-disc pl-4 mt-1 mb-1">
              <li>
                Pasien Dalam Pengawasan (PDP) yang yang diperiksa untuk Covid-19 tetapi inkonklusif (tidak dapat disimpulkan).
              </li>
            </ul>
            <strong>Kasus konfirmasi (2):</strong>
            <ul class="list-disc pl-4 mt-1">
              <li>
                Pasien yang terinfeksi Covid-19 dengan hasil test PCR positif.
              </li>
            </ul>
          </p>
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
