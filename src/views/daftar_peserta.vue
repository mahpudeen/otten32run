<template>
  <div>
    <!-- DIV JUDUL -->
    <div class="ibox-title">
      <h5>Daftar Peserta</h5>
    </div>
    <div class="ibox-content">
      <!-- DIV BODY, MASUKIN CODINGAN DISINI (DALAM IBOX-CONTENT) -->
      <div class="table-responsive-lg">
        <table class="table">
          <caption>List of users</caption>
          <!-- <thead>
            <tr class="text-center">
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Email</th>
              <th scope="col">Nomor Hp</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(idx, index) in dataPeserta" :key="index"  class="text-center">
              <th scope="row">{{index+1}}</th>
              <td>{{idx.nama_lengkap}}</td>
              <td>{{idx.email_user}}</td>
              <td>{{idx.nomor_hp}}</td>
              <td> 
                <b-button @click="test($event)" size="lg" class="fa fa-trash fa-lg" :value="`${idx.id_user}`" variant="danger" title="delete">
                </b-button> 
                &nbsp;
                <b-button  @click="test($event)" size="lg" class="fa fa-edit fa-lg" :value="`${idx.id_user}`" variant="success" title="edit"><span  aria-hidden="true"></span></b-button>
              </td>
            </tr>
          </tbody> -->
        </table>
      </div>
      <!-- BATAS CODINGAN -->
    </div>
  </div>
</template>
<style>

</style>
<script>

import axios from "axios";
export default {
  data() {
    return {
      dataPeserta: []
    };
  },
  beforeCreate() {
    let self = this;
    axios
      .get("http://localhost/api/public/users/")
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
    test: function(e){
      console.log('ya', e.target.value)
    }
  }
};
</script>