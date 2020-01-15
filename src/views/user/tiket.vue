<template>
<body id="page-top" class="landing-page">
  <section class="features" id="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="navy-line"></div>
          <h1>TIKET</h1>
        </div>
      </div>
      <br />

      <div>
        <div v-if="status_bayar === 'pending'">
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 text-center">
              <strong class="rek">MAAF ANDA BELUM MELAKUKAN PEMBAYARAN</strong>
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          <a href="#" class="btn btn-primary">
            <i class="fa fa-whatsapp"></i> DOWNLOAD TIKET
          </a>
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
      status_bayar: ""
    };
  },
  beforeCreate() {
    let self = this;
    self.$http
      .get("http://localhost/api/public/cekDaftar/", {
        params: {
          id_user: localStorage.getItem("idUser_active")
        }
      })
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        const data = res.data.data;
        self.status_bayar = data.status_bayar;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {}
};
</script>