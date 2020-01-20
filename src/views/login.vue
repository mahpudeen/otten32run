<template>
<body id="page-top" class="landing-page">
  <section class="features" id="login">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="navy-line"></div>
          <h1>Login</h1>
          <p>Silahkan login dengan email dan password yang telah anda daftarkan untuk melakukan pendaftaran sebagai peserta dan pembayaran.</p>
        </div>
      </div>
      <div class="login">
        <div class="row">
          <div class="col-lg-3 wow zoomIn"></div>

          <div class="col-lg-6 wow zoomIn">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="param.email_user"
                  aria-describedby="emailHelp"
                  autofocus
                />
                <small
                  id="emailHelp"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model="param.password_user" />
              </div>
              <div style="text-align:center">
                <b-button @click="loginProcess()" variant="warning">Login</b-button> &nbsp;
                <b-button @click="resetForm()" variant="danger">Reset</b-button>
                <div style="margin-top:10px;color:blue">
                  <b-button variant="white" @click="navigate('/lupapassword')">Lupa password?</b-button>
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
.kontak {
  margin-top: 70px;
}
.text {
  color: #16274c;
}
.login {
  margin: 20px;
}
</style>
<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      param: {
        email_user: "",
        password_user: ""
      }
    };
  },
  methods: {
    navigate: function(page) {
        this.$router.push({ path: page });
      },
    resetForm() {
      this.param = {
        email_user: "",
        password_user: ""
      };
    },
    loginProcess() {
      let self = this;
      self.$http
        .post("http://localhost/api/public/login_user/", self.param)
        .then(function(datas) {
          return datas;
        })
        .then(function(res) {
          const data = res.data.data;
          localStorage.setItem('namaUser_active', data.nama_lengkap)
          localStorage.setItem('idUser_active', data.id_user)
          localStorage.setItem('levelUser_active', data.level_akses)
          localStorage.setItem('emailUser_active', data.email_user)
          Swal.fire("Berhasil!", "selamat datang!", "success")
          .then(function(){
            const level = localStorage.getItem('levelUser_active');
            if (level === '1' || level === 1) {
              self.$router.push({ path : '/admin'})
              window.location.reload(true);
            } else if (level === '2' || level === 2) {
              self.$router.push({ path : '/logged_user'})
            }
          });
        })
        .catch(function(err, response) {
          Swal.fire("Gagal!", err.response.data.message, "error");
        });
    }
  }
};
</script>