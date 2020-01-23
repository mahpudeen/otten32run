<template>
<body id="page-top" class="landing-page">
  <section class="features" id="pembayaran">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="navy-line"></div>
          <h1>PEMBAYARAN</h1>
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
            <strong
              class="rek"
            >Halo, {{nama_user}}. Kamu sudah melakukan pembayaran, silahkan ke menu Tiket untuk mengunduh tiket Anda.</strong>
          </div>
          <div v-else>
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-8 text-center">
                <table class="table">
                  <thead class="thead-dark">
                    <tr class="table-size">
                      <th scope="col">Nama</th>
                      <th scope="col">Ukuran Kaos</th>
                      <th scope="col">Kode Unik</th>
                      <th scope="col">Total Pembayaran</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-size">
                      <th scope="row">{{nama_user}}</th>
                      <th scope="row">{{size_chart}}</th>
                      <th scope="row">{{id_user}}</th>
                      <th scope="row">Rp. {{total_pembayaran}}</th>
                    </tr>
                  </tbody>
                </table>
                <br />

                <strong class="rek">
                  TRANSFER SESUAI DENGAN TOTAL PEMBAYARAN YANG TERTERA
                  <br />KE REKENING BNI a.n LULU NURLIA KUSFANI 0456324335
                  <br />
                  <br />SETELAH TRANSFER HARAP KONFIRMASI DENGAN MELAMPIRKAN
                  <br />SCREESHOOT HALAMAN INI DAN BUKTI TRANSFER KE WHATSAPP ADMIN
                </strong>
                <br />
                <br />
                <a href="https://wa.me/6285775000157" class="btn btn-primary">
                  <i class="fa fa-whatsapp"></i>
                  WHATSAPP ADMIN
                </a>
              </div>
            </div>
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
export default {
  data() {
    return {
      nama_user: localStorage.getItem("namaUser_active"),
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
          self.status_bayar = data.status_bayar;
          self.size_chart = data.size_chart;
        } else {
          self.data = null;
          self.status_bayar = null;
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  computed: {
    total: function() {
      return new Intl.NumberFormat(["ban", "id"]).format(
        parseInt(this.total_pembayaran) + parseInt(this.id_pendaftaran)
      );
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("idUser_active");
      localStorage.removeItem("namaUser_active");
      localStorage.removeItem("idUser_active");
      localStorage.removeItem("levelUser_active");
      localStorage.removeItem("emailUser_active");
      this.$router.push({ path: "/" });
    }
  }
};
</script>