<template>
  <div>
  <div class="navbar-header">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <div id="navbarNav" class="navbar-collapse collapse" style>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="#" class="nav-link">HOME</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">TENTANG OTTEN32RUN</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">INFORMASI UMUM</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">PENDAFTARAN</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">PERATURAN UMUM</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div>
    <b-img src="../assets/img/banner.gif" fluid-grow alt="Fluid-grow image"></b-img>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
