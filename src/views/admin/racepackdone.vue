<template>
  <div>
    <!-- DIV JUDUL -->
    <div class="ibox-title">
      <h5>Racepack Sudah Diambil</h5>
    </div>
    <div class="ibox-content">
      <!-- DIV BODY, MASUKIN CODINGAN DISINI (DALAM IBOX-CONTENT) -->
      <div>
        <div id="main-wrapper" class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-12 mt-3 text-left">
              <p>Peserta yang sudah ambil racepack : <b> {{posts.length}} </b> orang</p>
            </div>

            <div class="col-md-6 col-sm-6 col-12 mt-3 text-right">
              <b-form-group
                label=""
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                label-for="filterInput"
                class="mb-0"
              >
                <b-input-group size="sm">
                  <b-form-input
                    v-model="filter"
                    type="search"
                    id="filterInput"
                    placeholder="Type to Search"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </div>
            <div class="col-md-12">
              <hr />
              <b-table
                ref="table"
                show-empty
                striped
                hover
                responsive
                :items="posts"
                :fields="fields"
                :filter="filter"
                :current-page="currentPage"
                :per-page="perPage"
              >
                <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>
                
                <template v-slot:cell(actions)="row">
                  <b-button
                    @click="confirm(row.item)"
                    size="lg"
                    class="fa fa-times-circle fa-lg mr-1"
                    variant="danger"
                    title="delete"
                  ></b-button>
                </template>
              </b-table>
              <!-- <div class="col-md-6 col-sm-6 col-12 mt-3 text-right"> -->
              <b-col align-self="end"></b-col>
              <b-row>
                <b-col cols="auto" class="mr-auto p-3">
                  <b-form-select
                    v-model="perPage"
                    id="perPageSelect"
                    size="sm"
                    :options="pageOptions"
                  ></b-form-select>
                </b-col>
                <b-col cols="auto" class="p-3">
                  <b-pagination
                    :total-rows="totalRows"
                    :per-page="perPage"
                    v-model="currentPage"
                    class="my-0 pagination-sm"
                  />
                </b-col>
              </b-row>
            </div>
          </div>
          <!-- Row -->
        </div>
        <!-- Main Wrapper -->
        <!-- BATAS CODINGAN -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      pageOptions: [5, 10, 15, 20, 50, 100, 500, 1000],
      posts: [],
      filter: null,
      currentPage: 1,
      perPage: 10,
      totalRows: null,
      selectedID: null,
      fields: [
        { key: "index", label: "No", class: "text-center" },
        { key: "id_pendaftaran", label: "No. Peserta", sortable: true },
        { key: "nama_lengkap", label: "Nama", sortable: true },
        { key: "email_user", label: "Email", sortable: true },
        { key: "nomor_hp", label: "Nomor HP", sortable: true },
        { key: "size_chart", label: "Ukuran", sortable: true },
        { key: "actions", label: "Cancel", class: "text-center" }
      ],
      param: {
        id_user: "",
        status_racepack : ""
      }
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    // Our method to GET results from a Laravel endpoint
    getResults() {
      axios
        .get("http://35.187.253.244/api/public/users_racepack_y/")

        .then(response => {
          this.posts = response.data.data;
          this.totalRows = response.data.data.length;
        });
    },
    confirm(item) {
      let self = this;
      let param = {
        id_user: item.id_user,
        status_racepack : 'N'
      };
      Swal.fire({
        title: "Konfirmasi",
        text:
          "Apakah mau membatalkan status pengambilan racepack " + item.nama_lengkap + " ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya!",
        cancelButtonText: "Tidak!"
      }).then(result => {
        if (result.value) {
          self.$http
            .post("http://35.187.253.244/api/public/update_racepack/", param)
            .then(function(datas) {
              return datas;
            })
            .then(function(res) {
              self.posts = self.posts.filter(
                idx => idx.id_user != item.id_user
              );
              Swal.fire(
                "Berhasil!",
                "Status pengambilan racepack " + item.nama_lengkap + " dibatalkan!",
                "success"
              );
            })
            .catch(function(err) {
              console.log(err);
              Swal.fire(
                "Gagal!",
                "Status pengambilan racepack "+ item.nama_lengkap + " gagal diupdate!",
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