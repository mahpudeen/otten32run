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
                  <h1 class="no-margins">15 Orang</h1>
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
                  <h1 class="no-margins">10 Orang</h1>
                  <b-button variant="primary" style="margin-top:15px" to="/daftar_peserta#">Lihat</b-button>
              </div>
          </div>
      </div>
      <div class="col-lg-6">
          <div class="ibox ">
              <div class="ibox-title" style="text-align:center">
                  <h5>Pembayaran belum dikonfirmasi</h5>
              </div>
              <div class="ibox-content" style="text-align:center">
                  <h1 class="no-margins">5 Orang</h1>
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
                  <h1 class="no-margins">5 Orang</h1>
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
                  <h1 class="no-margins">2 Orang</h1>
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
                  <h1 class="no-margins">2 Orang</h1>
                  <b-button variant="primary" style="margin-top:15px" to="/racepackdone">Lihat</b-button>
              </div>
          </div>
      </div>


    </div>
  </div>
</template>
