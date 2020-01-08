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
          <li class="active">
              <a href="index.html"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboards</span> <span class="fa arrow"></span></a>
              <ul class="nav nav-second-level">
                  <li class="active"><a href="index.html">Dashboard v.1</a></li>
                  <li><a href="dashboard_2.html">Dashboard v.2</a></li>
              </ul>
          </li>
            <li>
                <a href="metrics.html"><i class="fa fa-pie-chart"></i> <span class="nav-label">Metrics</span>  </a>
            </li>
  
            <li>
                <a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Graphs</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <li><a href="graph_flot.html">Flot Charts</a></li>
                    <li><a href="graph_morris.html">Morris.js Charts</a></li>
                </ul>
            </li>
            <li>
                <a href="mailbox.html"><i class="fa fa-envelope"></i> <span class="nav-label">Mailbox </span><span class="label label-warning float-right">16/24</span></a>
                <ul class="nav nav-second-level collapse">
                    <li><a href="mailbox.html">Inbox</a></li>
                    <li><a href="mail_detail.html">Email view</a></li>
                    <li><a href="mail_compose.html">Compose email</a></li>
                    <li><a href="email_template.html">Email templates</a></li>
                </ul>
            </li>
            <li>
                <a href="#"><i class="fa fa-desktop"></i> <span class="nav-label">App Views</span>  <span class="float-right label label-primary">SPECIAL</span></a>
                <ul class="nav nav-second-level collapse">
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="profile_2.html">Profile v.2</a></li>
                    <li><a href="contacts_2.html">Contacts v.2</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="project_detail.html">Project detail</a></li>
                    <li><a href="pin_board.html">Pin board</a></li>
                </ul>
            </li>
            <li>
                <a href="#"><i class="fa fa-globe"></i> <span class="nav-label">Miscellaneous</span><span class="label label-info float-right">NEW</span></a>
                <ul class="nav nav-second-level collapse">
                    <li><a href="toastr_notifications.html">Notification</a></li>
                    <li><a href="pdf_viewer.html">PDF viewer</a></li>
                 <li><a href="tour.html">Tour</a></li>
                </ul>
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
            <form role="search" class="navbar-form-custom" action="search_results.html">
              <div class="form-group">
                <input
                  type="text"
                  placeholder=""
                  class="form-control"
                  name="top-search"
                  id="top-search"
                />
              </div>
            </form>
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
              <a data-toggle="modal" data-target="#exampleModal">
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
  margin-left: 20px
}
.mar-20 {
  margin-left: -20px
}
.qlist {
  color:#a7b1c2; 
  width:220px;
}
</style>

<script>
// import menu_api from "../api/menu/index";
import axios from "axios";
export default {
  data() {
    return {
      menus: [],
    };
  },
  methods: {
    logout: function () {
        this.$session.destroy()
        this.$router.push('/')
    },
    toHref: function(){
      this.$router.push({ path: '/dashboard' })
    }
  },
};
</script>