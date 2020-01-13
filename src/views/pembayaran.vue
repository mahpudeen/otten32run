<template>
<body id="page-top" class="landing-page">
  <div class="navbar-wrapper">
    <nav class="navbar navbar-default navbar-fixed-top navbar-expand-md" role="navigation">
      <div class="container">
        <a class="navbar-brand" href="/">Otten32Run</a>
        <div class="navbar-header page-scroll">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbar">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a class="nav-link page-scroll" href="#">
                <div class="text" @click="logout()">Log Out</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div class="kontak"></div>
  <section class="features" id="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="navy-line"></div>
          <h1>PEMBAYARAN</h1>
        </div>
      </div>
      <br />

      <div>
        <div v-if="status_bayar === 'pending'">
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
                <i class="fa fa-whatsapp"></i> WHATSAPP ADMIN
              </a>
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          <strong
            class="rek"
          >Halo, {{nama_user}}. Kamu sudah melakukan pembayaran, silahkan ke menu Tiket untuk mengunduh tiket Anda.</strong>
        </div>
      </div>
    </div>
  </section>
  <div class="kontak">
    <section id="contact" class="gray-section contact" style="margin-top:-20px">
      <div class="container">
        <div class="row m-b-lg">
          <div class="col-lg-12 text-center">
            <div class="navy-line"></div>
            <h1>Contact Us</h1>
          </div>
        </div>
        <div class="row m-b-lg justify-content-center">
          <div class="col-lg-3"></div>
          <div class="col-lg-4"></div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <a href="mailto:test@email.com" class="btn btn-primary">Send us mail</a>
            <p class="m-t-sm">Or follow us on social platform</p>
            <ul class="list-inline social-icon">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center m-t-lg m-b-lg">
            <p>
              <strong>&copy; 2020 Otten 32 Run</strong>
              <br />
              <!-- consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde. -->
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
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
      // nama_user: '',
      size_chart: "",
      total_pembayaran: "",
      id_user: "",
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
        self.total_pembayaran = new Intl.NumberFormat(["ban", "id"]).format(
          data.total_bayar
        );
        self.id_user = data.id_user;
        self.size_chart = data.size_chart;
        self.status_bayar = data.status_bayar;
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