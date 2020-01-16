<template>
  <div id="wrapper">
    <nav class="navbar-default navbar-static-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
          <li class="nav-header">
            <div class="dropdown profile-element">
              <img
                alt="image"
                class="rounded-circle"
                src="statics/images/admin.jpg"
                height="48px"
                width="48px"
              />
              <span class="block m-t-xs font-bold" style="color:white">Administrator</span>
              <span class="text-muted text-xs block">Admin</span>
            </div>
            <div class="logo-element">
              <img src="statics/images/logodjp.png" width="40px" height="40px" />
            </div>
          </li>
          <li class="oke">
            <a href="#" @click="navigate('/admin')">
              <i class="fa fa-th-large"></i>
              <span class="nav-label">Dashboards</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-money"></i>
              <span class="nav-label">Pembayaran</span>
              <span class="fa arrow"></span>
            </a>
            <ul class="nav nav-second-level collapse">
              <li>
                <a href="#" @click="navigate('/konfirmasi')">Konfirmasi</a>
              </li>
              <li>
                <a href="#" @click="navigate('/lunas')">Lunas</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-male"></i>
              <span class="nav-label">Racepack</span>
              <span class="fa arrow"></span>
            </a>
            <ul class="nav nav-second-level collapse">
              <li>
                <a href="#" @click="navigate('/racepack')">Pengambilan</a>
              </li>
              <li>
                <a href="#" @click="navigate('/racepackdone')">Selesai</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" @click="navigate('/daftar_peserta')">
              <i class="fa fa-users"></i>
              <span class="nav-label">Daftar Peserta</span>
            </a>
          </li>
          <li>
            <a href="#" @click="navigate('/daftar_user')">
              <i class="fa fa-user"></i>
              <span class="nav-label">Daftar User</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="page-wrapper" class="gray-bg">
      <div
        class="row border-bottom"
        style="margin-right: -15px !important;margin-left: -15px !important;"
      >
        <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary" href="#">
              <i class="fa fa-bars"></i>
            </a>
          </div>

          <!-- Modal -->
          <div
            class="modal fade bd-example-modal-sm"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
              <div class="modal-content">
                <div class="modal-body" style="text-align:center">
                  <div>
                    <span class="fa fa-exclamation-circle fa-5x" aria-hidden="true"></span>
                  </div>
                  <div>
                    <h2>Konfirmasi</h2>
                  </div>
                  <div>
                    <p>Apakah anda yakin ingin keluar dari aplikasi?</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="logout()"
                      style="width:50px; margin-right: 15px"
                      data-dismiss="modal"
                    >Ya</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Tidak</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul class="nav navbar-top-links navbar-right">
            <li>
              <a data-toggle="modal" @click="logout()">
                <i class="fa fa-sign-out"></i> Log out
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
          <div class="col-lg-12">
            <div class="ibox">
              <!-- Router View -->
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.mar20 {
  margin-left: 20px;
}
.mar-20 {
  margin-left: -20px;
}
.qlist {
  color: #a7b1c2;
  width: 220px;
}
</style>

<script>
// import menu_api from "../api/menu/index";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      mainProps: []
    };
  },
  methods: {
    logout: function() {
      Swal.fire({
        title: "Konfirmasi",
        text: "Apakah anda yakin mau keluar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya!",
        cancelButtonText: "Tidak!"
      }).then(result => {
          if (result.value) {
          localStorage.removeItem("idUser_active");
          localStorage.removeItem("namaUser_active");
          localStorage.removeItem("idUser_active");
          localStorage.removeItem("levelUser_active");
          localStorage.removeItem("emailUser_active");
          localStorage.clear();
          this.$router.push("/");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      });
      
    },
    toHref: function() {
      this.$router.push({ path: "/dashboard" });
    },
    navigate: function(page) {
      this.$router.push({ path: page });
    }
  }
};
</script>