<template>
<body id="page-top" class="landing-page">
  <section class="features" id="tiket">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="navy-line"></div>
          <h1>TIKET</h1>
        </div>
      </div>
      <br />
      <div>
        <div v-if="status_bayar === null && data === null" class="text-center">
          <strong
            class="rek"
          >Halo, {{nama_user}}. Kamu belum melakukan pendaftaran sebagai peserta. Silahkan daftar dihalaman home.</strong>
        </div>
        <div v-else>
          <div v-if="status_bayar === 'lunas'" class="text-center">
            <div class="text-center">
              <!-- <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
              </div> -->
              <a :href="`http://35.187.253.244:8088/cetaktiket/?idUser=${idUser}`" class="btn btn-primary">
                <i class="fa fa-whatsapp"></i> DOWNLOAD TIKET
              </a>
            </div>
          </div>
          <div v-else class="text-center">
            <strong
              class="rek"
            >Halo, {{nama_user}}. Kamu belum melakukan pembayaran. Silahkan lakukan pembayaran dan konfirmasi dengan admin untuk mendapatkan Tiket Peserta.</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
</template>
<style>
.table-size {
  font-size: 15px;
}
.rek {
  color: black;
}
.table .thead-dark th {
  background-color: #092d5b !important;
  border-color: #092d5b !important;
  border-top-color: rgb(9, 45, 91) !important;
}
</style>
<script>
import Swal from "sweetalert2";
import MoneyFormat from "vue-money-format";
export default {
  components: {
    "money-format": MoneyFormat
  },
  data() {
    return {
      nama_user: localStorage.getItem("namaUser_active"),
      idUser: localStorage.getItem("idUser_active"),
      size_chart: "",
      total_pembayaran: "",
      id_user: "",
      status_bayar: "",
      data: []
    };
  },
  beforeCreate() {
    let self = this;
    self.$http
      .get("http://35.187.253.244/api/public/cekDaftar/", {
        params: {
          id_user: localStorage.getItem("idUser_active")
        }
      })
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        const data = res.data.data;
        if (data !== null) {
          self.total_pembayaran = new Intl.NumberFormat(["ban", "id"]).format(
            data.total_bayar
          );
          self.id_user = data.id_user;
          self.size_chart = data.size_chart;
          self.status_bayar = data.status_bayar;
          console.log('satt', self.status_bayar)
        } else {
          self.data = null;
          self.status_bayar = null;
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {}
};
</script>