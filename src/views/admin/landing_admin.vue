<template>
  <div>
    <!-- DIV JUDUL -->
    <div class="ibox-title" style="text-align:center">
      <h5>Selamat Datang di Halaman Admin</h5>
    </div>
    <!-- <div class="ibox-content"> -->
      <!-- DIV BODY, MASUKIN CODINGAN DISINI (DALAM IBOX-CONTENT) -->

      <!-- BATAS CODINGAN -->
    <!-- </div> -->
    <div class="row" style="margin-top:20px">
      <div class="col-lg-6">
          <div class="ibox ">
              <div class="ibox-title" style="text-align:center">
                  <h5>Jumlah User</h5>
              </div>
              <div class="ibox-content" style="text-align:center">
                  <h1 class="no-margins">{{posts.jml1.jml_user}} Orang</h1>
                  <b-button variant="primary" style="margin-top:15px" to="/daftar_user#">Lihat</b-button>
              </div>
          </div>
      </div>
      <div class="col-lg-6">
          <div class="ibox ">
              <div class="ibox-title" style="text-align:center">
                  <h5>Jumlah Peserta</h5>
              </div>
              <div class="ibox-content" style="text-align:center">
                  <h1 class="no-margins">{{posts.jml2.jml_peserta}} Orang</h1>
                  <!-- <div class="text-info" style="margin-top:15px"><b>{{posts.jml7.jml_daftar}}</b> pendaftar baru hari ini</div> -->
                  <!-- <small>Pendaftar baru hari ini</small> -->
                  <div>
                  <b-button variant="primary" style="margin-top:15px" to="/daftar_peserta#">Lihat</b-button>
              </div>
              </div>
              
          </div>
      </div>
      <div class="col-lg-6">
          <div class="ibox ">
              <div class="ibox-title" style="text-align:center">
                  <h5>Pembayaran belum dikonfirmasi</h5>
              </div>
              <div class="ibox-content" style="text-align:center">
                  <h1 class="no-margins">{{posts.jml3.jml_belumbayar}} Orang</h1>
                  <b-button variant="primary" style="margin-top:15px" to="/konfirmasi">Lihat</b-button>
              </div>
          </div>
      </div>
      <div class="col-lg-6">
          <div class="ibox ">
              <div class="ibox-title" style="text-align:center">
                  <h5>Pembayaran sudah dikonfirmasi</h5>
              </div>
              <div class="ibox-content" style="text-align:center">
                  <h1 class="no-margins">{{posts.jml4.jml_lunas}} Orang</h1>
                  <b-button variant="primary" style="margin-top:15px" to="/lunas">Lihat</b-button>
              </div>
          </div>
      </div>
      <div class="col-lg-6">
          <div class="ibox ">
              <div class="ibox-title" style="text-align:center">
                  <h5>Racepack belum diambil</h5>
              </div>
              <div class="ibox-content" style="text-align:center">
                  <h1 class="no-margins">{{posts.jml5.jml_racepack_n}} Orang</h1>
                  <b-button variant="primary" style="margin-top:15px" to="/racepack">Lihat</b-button>
              </div>
          </div>
      </div>
      <div class="col-lg-6">
          <div class="ibox ">
              <div class="ibox-title" style="text-align:center">
                  <h5>Racepack sudah diambil</h5>
              </div>
              <div class="ibox-content" style="text-align:center">
                  <h1 class="no-margins">{{posts.jml6.jml_racepack_y}} Orang</h1>
                  <b-button variant="primary" style="margin-top:15px" to="/racepackdone">Lihat</b-button>
              </div>
          </div>
      </div>


    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            jml_user : null,
            posts: 
                {
                "status":"success",
                "jml1":{"jml_user":""},
                "jml2":{"jml_peserta":""},
                "jml3":{"jml_belumbayar":""},
                "jml4":{"jml_lunas":""},
                "jml5":{"jml_racepack_n":""},
                "jml6":{"jml_racepack_y":""}
                },
            
            jml1:{"jml_user":""},
        }
    },
    mounted() {
        this.getResults();
    },
    methods: {
        // Our method to GET results from a Laravel endpoint
        getResults() {
        axios
            .get("http://35.187.253.244/api/public/landing_admin/")
            .then(response => {
            this.posts = response.data;
            });
        },
    }
}
</script>