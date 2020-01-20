<template>
<body id="page-top" class="landing-page">
  <section class="features" id="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="navy-line"></div>
          <h1>Halo, {{nama_user}}</h1>
          <div v-if="!isPeserta">
            <p>Ayo daftar menjadi peserta lari dengan cara mengisi form dibawah ini.</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div v-if="!isPeserta">
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
      <div v-else>
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <table class="table">
              <thead>
                <tr>
                  <th class="col-6 text-right">Nama Lengkap</th>
                  <td class="col-6">{{data.nama_lengkap}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Email User</th>
                  <td>{{data.email_user}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Nomor HP</th>
                  <td>{{data.nomor_hp}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Nomor Identitas</th>
                  <td>{{data.nomor_identitas}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Jenis Kelamin</th>
                  <td>{{data.jenis_kelamin}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Alamat</th>
                  <td>{{data.alamat_user}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Tempat Lahir</th>
                  <td>{{data.tempat_lahir}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Tanggal Lahir</th>
                  <td>{{data.tanggal_lahir}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Golongan Darah</th>
                  <td>{{data.golongan_darah}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Riwayat Kesehatan</th>
                  <td>{{data.riwayat_kesehatan}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Riwayat Kesehatan Keluarga</th>
                  <td>{{data.riwayat_kesehatan_keluarga}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Obat Pribadi</th>
                  <td>{{data.obat_pribadi}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Total Pembayaran</th>
                  <td>{{data.total_bayar}}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col" class="text-right">Status Pembayaran</th>
                  <td>{{data.status_bayar}}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
  <br />
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
import moment from "moment";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
  data() {
    return {
      isPeserta: "",
      nama_user: localStorage.getItem("namaUser_active"),
      time1: new Date().toISOString().substr(0, 10),
      data: [
        {
          nama_lengkap: "",
          email_user: "",
          nomor_hp: "",
          nomor_identitas: "",
          jenis_kelamin: "",
          alamat_user: "",
          tempat_lahir: "",
          tanggal_lahir: "",
          golongan_darah: "",
          riwayat_kesehatan: "",
          riwayat_kesehatan_keluarga: "",
          obat_pribadi: "",
          size_chart: "",
          total_bayar: "",
          status_bayar: ""
        }
      ],
      param: {
        id_user: localStorage.getItem("idUser_active"),
        jenis_kelamin: "",
        alamat_user: "",
        nomor_identitas: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        golongan_darah: "",
        riwayat_kesehatan: "",
        riwayat_kesehatan_keluarga: "",
        obat_pribadi: "",
        size_chart: "",
        tgl_pendaftaran: ""
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
  beforeCreate() {
    let self = this;
    self.$http
      .get("http://localhost/api/public/data_detail/", {
        params: {
          id_user: localStorage.getItem("idUser_active")
        }
      })
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.isPeserta = res.data.statusDaftar;
        if (self.isPeserta) {
          const ok = res.data.data;
          console.log("laaah", ok);
          self.data.nama_lengkap = ok.nama_lengkap;
          self.data.email_user = ok.email_user;
          self.data.nomor_hp = ok.nomor_hp;
          self.data.nomor_identitas = ok.nomor_identitas;
          self.data.jenis_kelamin = ok.jenis_kelamin;
          self.data.alamat_user = ok.alamat_user;
          self.data.tempat_lahir = ok.tempat_lahir;
          self.data.tanggal_lahir = ok.tanggal_lahir;
          self.data.golongan_darah = ok.golongan_darah;
          self.data.riwayat_kesehatan = ok.riwayat_kesehatan;
          self.data.riwayat_kesehatan_keluarga = ok.riwayat_kesehatan_keluarga;
          self.data.obat_pribadi = ok.obat_pribadi;
          self.data.size_chart = ok.size_chart;
          self.data.total_bayar = ok.total_bayar;
          self.data.status_bayar = ok.status_bayar;
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {
    logout() {
      localStorage.removeItem("idUser_active");
      localStorage.removeItem("namaUser_active");
      localStorage.removeItem("idUser_active");
      localStorage.removeItem("levelUser_active");
      localStorage.removeItem("emailUser_active");
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
    daftarPeserta() {
      let self = this;
      console.log("data kirim", self.param);
      self.param.tanggal_lahir = moment(
        new Date(self.param.tanggal_lahir)
      ).format("YYYY-MM-DD");
      self.param.tgl_pendaftaran = moment(new Date());
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
              Swal.fire("Berhasil!", "Data berhasil disimpan!", "success").then(
                function() {
                  self.$router.push({ path: "/pembayaran" });
                }
              );
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