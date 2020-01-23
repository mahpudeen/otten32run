<template>
<body id="page-top" class="landing-page">
  
  <section class="features" id="register">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="navy-line"></div>
          <h1>REGISTER</h1>
          <p>Silahkan lakukan register untuk melanjutkan pendaftaran sebagai peserta.</p>
        </div>
      </div>
      <div class="login">
        <div class="row">
          <div class="col-lg-3 wow zoomIn"></div>

          <div class="col-lg-6 wow zoomIn">
            <b-form @submit="regisProcess" @reset="resetForm">
              <b-form-group id="input-group-2" label="Nama Lengkap:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="param.nama_lengkap"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Nomor Handphone:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="param.nomor_hp"
                  required
                ></b-form-input>
              </b-form-group>
              
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="param.email_user"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Password:" label-for="text-password">
                <b-input type="password" id="text-password" v-model="param.password_user" required></b-input>
              </b-form-group>

              <div style="text-align:center">
                <b-button type="submit" variant="warning">Submit</b-button> &nbsp; &nbsp;
                <b-button type="reset" variant="danger">Reset</b-button>
              </div>
            </b-form>
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
        nama_lengkap: "",
        email_user: "",
        nomor_hp: "",
        password_user: ""
      }
    };
  },
  methods: {
    resetForm() {
      this.param = {
        nama_lengkap: "",
        email_user: "",
        nomor_hp: "",
        password_user: ""
      };
    },
    regisProcess(evt) {
      evt.preventDefault();
      let self = this;

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
            .post("http://35.187.253.244/api/public/regis_user/", self.param)
            .then(function(datas) {
              return datas;
            })
            .then(function(res) {
              Swal.fire("Berhasil!", "Data berhasil disimpan! Silahkan Login", "success");
              self.resetForm();
              self.$router.push("login");
              window.location.reload(true);
            })
            .catch(function(err) {
              console.log(err);
              Swal.fire("Gagal!", err.response.data.message, "error");
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    }
  }
};
</script>