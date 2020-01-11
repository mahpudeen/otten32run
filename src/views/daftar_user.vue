<template>
  <div>
    <!-- DIV JUDUL -->
    <div class="ibox-title">
      <h5>Daftar User</h5>
    </div>
    <div class="ibox-content">
      <!-- DIV BODY, MASUKIN CODINGAN DISINI (DALAM IBOX-CONTENT) -->
      <div class="table-responsive-lg">
        <table class="table">
          <caption>List of users</caption>
          <thead>
            <tr class="text-center">
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Email</th>
              <th scope="col">Nomor Hp</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(idx, index) in dataPeserta" :key="index" class="text-center">
              <th scope="row">{{index+1}}</th>
              <td>{{idx.nama_lengkap}}</td>
              <td>{{idx.email_user}}</td>
              <td>{{idx.nomor_hp}}</td>
              <td>
                <b-button
                  @click="deleteProcess(idx)"
                  size="lg"
                  class="fa fa-trash fa-lg"
                  :value="`${idx.id_user}`"
                  variant="danger"
                  title="delete"
                ></b-button>&nbsp;
                <b-button
                  @click="test($event)"
                  size="lg"
                  class="fa fa-edit fa-lg"
                  :value="`${idx.id_user}`"
                  variant="success"
                  title="edit"
                >
                  <span aria-hidden="true"></span>
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- BATAS CODINGAN -->
    </div>
  </div>
</template>
<style>
.nav > li.active-tidak > a {
  color: white;
}
.swal2-popup {
  width: 350px !important;
  font-size: 12px !important;
}
</style>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      dataPeserta: [],
      selectedUser: ""
    };
  },
  beforeCreate() {
    let self = this;
    self.$http
      .get("http://localhost/api/public/data_users/")
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.dataPeserta = res.data.data;
        console.log("data user = ", self.dataPeserta);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {
    deleteProcess(data) {
      let self = this;
      let param = {
        id_user: data.id_user
      };
      Swal.fire({
        title: "Konfirmasi",
        text:
          "Apakah Anda yakin ingin mengahapus data " + data.nama_lengkap + " ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya!",
        cancelButtonText: "Tidak!"
      }).then(result => {
        if (result.value) {
          self.$http
            .post("http://localhost/api/public/del_user/", param)
            .then(function(datas) {
              return datas;
            })
            .then(function(res) {
              self.dataPeserta = self.dataPeserta.filter(
                idx => idx.id_user != data.id_user
              );
              Swal.fire(
                "Berhasil!",
                "Data " + data.nama_lengkap + " berhasil dihapus!",
                "success"
              );
            })
            .catch(function(err) {
              console.log(err);
              Swal.fire(
                "Gagal!",
                "Data " + data.nama_lengkap + " tidak berhasil dihapus!",
                "error"
              );
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    }
  }
};
</script>