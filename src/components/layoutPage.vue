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
                        <li><a class="nav-link page-scroll" href="/">Home</a></li>
                        <li><a class="nav-link page-scroll" href="/about">Tentang Kami</a></li>
                        <li><a class="nav-link page-scroll" href="/rules">Peraturan</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div id="inSlider">
        <div class="bannertop">
            <b-img src="img/banner44.jpg" fluid-grow alt="Fluid-grow image"></b-img>
        </div>
    </div>

    <router-view/>

    <section class="bg-pricing">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="navy-line"></div>
                    <h1>Community Partners:</h1>
                    <p>
                        <b-img class="com-logos" src="img/sponsor/larikuinfo.jpg" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                        <!-- <img  class="rounded img-thumbnail" alt="..."> -->
                    </p>
                </div>
            </div>
        </div>
    </section>

    <div v-if="['home'].indexOf($route.name) > -1">
        <div>
            <a href="/register">
                <b-img src="img/register.jpg" fluid-grow alt="Fluid-grow image"></b-img>
            </a>
        </div>
    </div>

    <section>
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
                    <img height="35px" width="95px" src="img/whatsapp.png" onclick="whatsap()"/>
                    </button>
                    <p class="m-t-sm">
                        Or follow us on social platform
                    </p>
                    <ul class="list-inline social-icon">
                        <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a>
                        </li>
                    </ul>
                    <p><strong>&copy; 2020 Otten 32 Run</strong></p>
                </div>
            </div>
        </div>
    </section>

</body>

</template>
<script>
export default {
    data() {
    return {
      mainProps : []
    };
  },
    
}
</script>