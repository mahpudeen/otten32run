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
              <a class="nav-link page-scroll" href="#page-top">
                <div class="text">Log Out</div>
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
          <h1>HALO, GINA</h1>
          <p>Ayo daftar menjadi peserta lari dengan cara mengisi form dibawah ini.</p>
        </div>
      </div>
      <div class="login">
        <div class="row">
          <div class="col-lg-6 wow zoomIn">
            <div class="form-group">
              <div class="form-group">
                <label for="nama_user">Nomor Identitas</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="param.nomor_identitas"
                  required
                  autofocus
                />
              </div>
              <label>Jenis Kelamin</label>
              <select class="custom-select" v-model="param.jenis_kelamin" required>
                <option selected>Pilih...</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
            <div class="form-group">
              <label for="nama_user">Tempat Lahir</label>
              <input type="text" class="form-control" v-model="param.tempat_lahir" required />
            </div>
            <div class="form-group">
              <label>Alamat Lengkap</label>
              <textarea class="form-control" v-model="param.alamat_user" rows="3" required></textarea>
            </div>
            <div class="form-group">
              <label>Obat Pribadi</label>
              <textarea class="form-control" v-model="param.obat_pribadi" rows="3" required></textarea>
            </div>
          </div>

          <div class="col-lg-6 wow zoomIn">
            <div class="form-group">
              <label>Golongan Darah</label>
              <select class="custom-select" v-model="param.golongan_darah">
                <option selected>Pilih...</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">C</option>
              </select>
            </div>
            <div class="form-group">
              <label>Size Chart Kaos</label>
              <select class="custom-select" v-model="param.size_chart">
                <option selected>Pilih...</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div class="form-group">
              <label>Tanggal Lahir</label>
              <br />
              <date-picker v-model="param.tanggal_lahir" valuetype="format" required></date-picker>
            </div>
            <div class="form-group">
              <label>Riwayat Kesehatan</label>
              <textarea class="form-control" v-model="param.riwayat_kesehatan" rows="3" required></textarea>
            </div>
            <div class="form-group">
              <label>Riwayat Kesehatan Keluarga</label>
              <textarea
                class="form-control"
                v-model="param.riwayat_kesehatan_keluarga"
                rows="3"
                required
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 text-center">
          <button @click="daftarPeserta()" class="btn btn-primary btn-lebar">Submit</button>
          &nbsp;
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
.btn-lebar {
  width: 25%;
}
.kontak {
  margin-top: 70px;
}
.text {
  color: #ffffff;
}
.login {
  margin: 20px;
}
.custom-select {
  border-radius: 1px !important;
  height: 36px !important;
  border: 1px solid #e5e6e7 !important;
  color: #676a87 !important;
}
.navbar-fixed-top,
.navbar-static-top {
  background: #1e264c !important;
}
.mx-input {
  width: 100%;
  height: 36px;
  color: #676a87 !important;
  border: 1px solid #e5e6e7 !important;
  border-radius: 1px !important;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0) !important;
  box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0) !important;
}
</style>
<script>
import Swal from "sweetalert2";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
  data() {
    return {
      time1: new Date().toISOString().substr(0, 10),
      param: {
        jenis_kelamin: "",
        alamat_user: "",
        nomor_identitas: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        golongan_darah: "",
        riwayat_kesehatan: "",
        riwayat_kesehatan_keluarga: "",
        obat_pribadi: "",
        size_chart: ""
      },
      selected: null,
      options: [
        { value: null, text: "Pilih..." },
        { value: "A", text: "A" },
        { value: "B", text: "B" },
        { value: "AB", text: "AB" }
      ]
    };
  },
  methods: {
    daftarPeserta() {
      let self = this;
      console.log("data kirim", self.param);
      Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin telah mengisi dengan benar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya!",
        cancelButtonText: "Tidak!"
      }).then(result => {
        if (result.value) {
          self.$http
            .post(
              "http://localhost/api/public/daftar_jadi_peserta/",
              self.param
            )
            .then(function(datas) {
              return datas;
            })
            .then(function(res) {
              Swal.fire("Berhasil!", "Data berhasil disimpan!", "success");
              self.resetForm();
            })
            .catch(function(err) {
              console.log(err);
              Swal.fire("Gagal!", "Data tidak berhasil disimpan!", "error");
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    }
  }
};
</script>