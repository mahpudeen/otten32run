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
              <a class="nav-link page-scroll" href="/login">
                <div>Login</div>
              </a>
            </li>
            <li>
              <a class="nav-link page-scroll" href="#page-top">
                <div>Register</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div id="inSlider" class="bannertop">
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

            <!-- PISAAAAAAHHHHHHHHHHHHHHHHHHHHHH -->

            <!-- <div class="form-group">
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
            <div style="text-align:center">
              <b-button @click="regisProcess()" variant="warning">Submit</b-button> &nbsp;
              <b-button @click="resetForm()" variant="danger">Reset</b-button>
            </div> -->
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
            .post("http://localhost/api/public/regis_user/", self.param)
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