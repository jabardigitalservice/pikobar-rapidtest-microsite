<template>
  <div class="container mx-auto p-6">
    <h2 class="text-gray-900 text-center">
      Informasi Hasil Tes
    </h2>
    <div class="bg-gray-50 sm:rounded-lg border border-gray-300 mt-8">
      <div>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <dl>
            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Nama
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Yoga Hanggara
              </dd>
            </div>
            <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Tanggal
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Senin, 18 Mei 2020 08:00 WIB
              </dd>
            </div>
            <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt class="text-sm leading-5 font-bold text-gray-500">
                Tempat
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Dinkes Kota Bandung, Jalan Supratman No 73, Cihapit, Bandung
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div class="html-content mt-8 text-sm">
      <p> Wargi Jabar yang baik, </p>
      <p> Terima kasih telah memenuhi panggilan Tes Masif COVID-19. </p>
      <p>
        Hasil tes menunjukkan bahwa Anda <b>Reaktif</b>, artinya ditemukan adanya antibodi terhadap virus penyebab
        COVID-19.
      </p>
      <p>
        Anda diminta tetap tenang dan tidak panik. Sebagai tindak lanjut, <b>Anda akan diundang untuk tes swab
          lanjutan</b>. Waktu dan tempat akan segera kami informasikan kepada Anda melalui SMS.
      </p>
      <p>
        <img
          class="object-contain object-center w-full h-auto"
          src="https://firebasestorage.googleapis.com/v0/b/jabarprov-covid19.appspot.com/o/public%2Frdt-pikobar.png?alt=media&amp;token=00c5a8c1-de59-4657-8097-6e84ba0195b6"
        >
      </p>
      <p> Sementara ini, mohon perhatikan langkah-langkah berikut: </p>
      <ol>
        <li>
          <b>Isolasi diri Anda</b>. Jaga jarak dan hindari kontak fisik langsung dengan orang lain, termasuk keluarga
          seperti berjabat tangan. Gunakan peralatan makan dan mandi sendiri, tidak bercampur dengan orang lain.
        </li>
        <li><b>Menggunakan masker</b> apabila perlu berinteraksi langsung dengan orang lain.</li>
        <li>
          Lakukan <b>pola hidup bersih dan sehat</b>, seperti rajin mencuci tangan pakai sabun dengan air mengalir
          sebelum menyentuh muka dan makan, olahraga secara rutin, konsumsi multivitamin, istirahat yang cukup, dan
          mengurangi konsumsi gula.
        </li>
        <li>
          Tetap <b>berpikir positif</b>, pikiran yang bahagia akan membantu tubuhmu tetap kuat dan menjaga imun agar
          tidak jatuh sakit.
        </li>
        <li> Tingkatkan <b>imun tubuh</b> dengan mengkonsumsi banyak makanan bergizi.</li>
      </ol>
      <p>
        <img
          class="object-contain object-center w-full h-auto"
          src="https://firebasestorage.googleapis.com/v0/b/jabarprov-covid19.appspot.com/o/public%2F5-hal-penting-cegah-covid.jpeg?alt=media&amp;token=6d19cc68-c578-4351-8893-9642d1e8229c"
        >
      </p>

      <p>
        Observasi gejala yang Anda alami. Apabila Anda tidak bergejala atau bergejala ringan sampai sedang, Anda
        disarankan untuk melakukan isolasi dan perawatan mandiri. Apabila dirasakan mengalami perburukan kondisi, segera
        konsultasi ke dokter atau fasyankes terdekat.
      </p>
      <p>
        Untuk pertanyaan lebih lanjut, Anda dapat menghubungi Pusat Bantuan.
      </p>
    </div>

    <div class="mt-6">
      <a href="https://api.whatsapp.com/send?phone=628112093306" target="_blank" class="block w-full items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg text-white bg-brand-green-dark text-center">
        Hubungi Pusat Bantuan PIKOBAR
      </a>
      <nuxt-link to="/check_registration" class="block items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-lg border border-brand-green-dark text-brand-green-dark text-center mt-2">
        Kembali
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export default {
  middleware: 'check_result',

  components: {
    //
  },

  data () {
    return {
      lang: id
    }
  },

  computed: {
    ...mapGetters('check', [
      'registrationCode',
      'name',
      'event',
      'labResult',
      'status'
    ])
  },

  mounted () {
    //
  },

  methods: {
    format
  }
}
</script>
