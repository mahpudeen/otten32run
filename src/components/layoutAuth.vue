<template>
<body id="page-top" class="landing-page">
  <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="/">Otten32Run</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fa fa-bars" style="color:black"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#register" @click="navigate('/register')">
            <i class="fa fa-users"></i>
            Register
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#login" @click="navigate('/login')">
            <i class="fa fa-sign-in"></i>
            Login
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
  
  <section >
    <div class="container">
      <div class="row m-b-lg">
        <div class="col-lg-12 text-center">
          <div class="navy-line"></div>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div class="row" style="margin-top: -25px;">
        <div class="col-lg-12 text-center">
          <button class="btn btn-primary2">
            <a href="https://wa.me/6281310646737" target="_blank">
              <img height="35px" width="95px" src="img/whatsapp.png" />
            </a>
          </button>
          <p class="m-t-sm">Or follow us on social platform</p>
          <ul class="list-inline social-icon">
            <li class="list-inline-item"><a href="https://www.instagram.com/otten32run/"><i class="fa fa-instagram"></i></a>
                        </li>
          </ul>
          <p>
            <strong>&copy; 2020 Otten32Run</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</body>
</template>
<style>
.bg-putih {
  background-color: white
}
.navbar-icon-top .navbar-nav .nav-link > .fa {
  position: relative;
  width: 36px;
  font-size: 24px;
}

.navbar-icon-top .navbar-toggler {
  background-color: floralwhite;
  color: blue;
  padding: 6px 12px;
  font-size: 14px;
  margin: 8px;
}
.navbar-icon-top .navbar-nav .nav-link {
  color: aqua
}

.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
  font-size: 0.75rem;
  position: absolute;
  right: 0;
  font-family: sans-serif;
}

.navbar-icon-top .navbar-nav .nav-link > .fa {
  top: 3px;
  line-height: 12px;
}

.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
  top: -10px;
}

@media (min-width: 576px) {
  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

@media (min-width: 768px) {
  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

@media (min-width: 992px) {
  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

@media (min-width: 1200px) {
  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}
</style>

<script>
// import menu_api from "../api/menu/index";
import axios from "axios";
export default {
  title: 'Login/Register',
  data() {
    return {
      menus: []
    };
  },
  methods: {
    logout: function() {
      localStorage.removeItem("idUser_active");
      localStorage.removeItem("namaUser_active");
      localStorage.removeItem("idUser_active");
      localStorage.removeItem("levelUser_active");
      localStorage.removeItem("emailUser_active");
      this.$router.push({ path: "/" });
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