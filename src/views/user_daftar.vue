<template>
  <div>
    <!-- DIV JUDUL -->
    <div class="ibox-title">
      <b>HALO, GINA</b>
      <p>Ayo daftar menjadi peserta lari dengan cara mengisi form dibawah ini.</p>
    </div>
    <div class="ibox-content">
    <!-- DIV BODY, MASUKIN CODINGAN DISINI (DALAM IBOX-CONTENT) -->
      <div class="login">
        <div class="row">
          <div class="col-lg-6 wow zoomIn">
            <div class="form-group">
              <label>Jenis Kelamin</label>
              <select class="custom-select" v-model="param.jenis_kelamin" autofocus>
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
              <textarea class="form-control" v-model="param.alamat_user" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label>Obat Pribadi</label>
              <textarea class="form-control" v-model="param.obat_pribadi" rows="3"></textarea>
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
              <label>Tanggal Lahir</label>
              <br />
              <date-picker v-model="param.tanggal_lahir" valuetype="format"></date-picker>
            </div>
            <div class="form-group">
              <label>Riwayat Kesehatan</label>
              <textarea class="form-control" v-model="param.riwayat_kesehatan" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label>Riwayat Kesehatan Keluarga</label>
              <textarea class="form-control" v-model="param.riwayat_kesehatan_keluarga" rows="3"></textarea>
            </div>
            <div class="form-group">
              <br />
              <button @click="daftarPeserta()" class="btn btn-primary btn-lebar">Submit</button> &nbsp;
            </div>
          </div>
        </div>
      </div>
    <!-- BATAS CODINGAN -->
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
  data() {
    return {
      time1: null,
      param: {
        jenis_kelamin: "",
        alamat_user: "",
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
        console.log('data kirim', self.param)
      Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin telah mengisi dengan benar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya!",
        cancelButtonText: "Tidak!"
      }).then(result => {
        if (result.value) {
        //   self.$http
        //     .post("http://35.187.253.244/api/public/regis_user/", self.param)
        //     .then(function(datas) {
        //       return datas;
        //     })
        //     .then(function(res) {
        //       Swal.fire("Berhasil!", "Data berhasil disimpan!", "success");
        //       self.resetForm();
        //     })
        //     .catch(function(err) {
        //       console.log(err);
        //       Swal.fire("Gagal!", "Data tidak berhasil disimpan!", "error");
        //     });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    }
  }
};
</script>