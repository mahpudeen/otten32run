<template>
<body id="page-top" class="landing-page">
  <div class="navbar-wrapper">
    <nav class="navbar navbar-default navbar-fixed-top navbar-expand-md" role="navigation">
      <div class="container">
        <a class="navbar-brand" href="/">Otten32Run</a>
        <div class="navbar-header page-scroll">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbar">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a class="nav-link page-scroll" href="#page-top">
                <div class="text">Register</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div id="inSlider">
    <b-img src="img/run.jpg" fluid-grow alt="Fluid-grow image"></b-img>
  </div>

  <section class="features" id="features">
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
            <div class="form-group">
              <label for="nama_user">Nama Lengkap</label>
              <input
                type="text"
                class="form-control"
                v-model="param.nama_lengkap"
                autofocus
                required
              />
            </div>
            <div class="form-group">
              <label for="nama_user">Nomor Handphone</label>
              <input type="text" class="form-control" v-model="param.nomor_hp" required />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                v-model="param.email_user"
                required
              />
              <small
                id="emailHelp"
                class="form-text text-muted"
              >We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" v-model="param.password_user" required />
            </div>
            <button @click="regisProcess()" class="btn btn-primary">Submit</button> &nbsp;
            <button @click="resetForm()" class="btn btn-warning btn-reset">Reset</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="kontak">
    <section id="contact" class="gray-section contact" style="margin-top:-20px">
      <div class="container">
        <div class="row m-b-lg">
          <div class="col-lg-12 text-center">
            <div class="navy-line"></div>
            <h1>Contact Us</h1>
            <!-- <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p> -->
          </div>
        </div>
        <div class="row m-b-lg justify-content-center">
          <div class="col-lg-3"></div>
          <div class="col-lg-4"></div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <a href="mailto:test@email.com" class="btn btn-primary">Send us mail</a>
            <p class="m-t-sm">Or follow us on social platform</p>
            <ul class="list-inline social-icon">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center m-t-lg m-b-lg">
            <p>
              <strong>&copy; 2020 Otten 32 Run</strong>
              <br />
              <!-- consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde. -->
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
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
    regisProcess() {
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
            .post("http://localhost/api/public/regis_user/", self.param)
            .then(function(datas) {
              return datas;
            })
            .then(function(res) {
              Swal.fire("Berhasil!", "Data berhasil disimpan!", "success");
              self.resetForm();
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