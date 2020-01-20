<template>
<body id="page-top" class="landing-page">
  <section class="features" id="lupapassword">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="navy-line"></div>
          <h1>Lupa Password</h1>
          <p>Silahkan masukan email yang anda daftarkan</p>
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
              </div>
              <div style="text-align:center">
                <b-button @click="loginProcess()" variant="warning">Submit</b-button> 
                
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
        email_user: ""
      }
    };
  },
  methods: {
    navigate: function(page) {
        this.$router.push({ path: page });
    },
    loginProcess() {
      let self = this;
      self.$http
        .post("http://localhost/api/public/resetpassword", self.param)
        .then(function(datas) {
          return datas;
        })
        .then(function(res) {
          Swal.fire("Berhasil!", "Silahkan cek email anda!", "success")        
        })
        .catch(function(err, response) {
          Swal.fire("Gagal!", err.response.data.message, "error");
        });
    }
  }
};
</script>