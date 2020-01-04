<template>
  <div>
    <b-navbar toggleable="sm" class="navbar-inner">
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">HOME</b-nav-item>
          <b-nav-item href="#">TENTANG OTTEN32RUN</b-nav-item>
          <b-nav-item href="#">INFORMASI UMUM</b-nav-item>
          <b-nav-item href="#">PENDAFTARAN</b-nav-item>
          <b-nav-item href="#">CONTACT US</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <b-img src="@/assets/img/banner.png" fluid-grow alt="Fluid-grow image"></b-img>
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

<style>
.navbar-inner {
    background-color:#ffd000;
}
</style>