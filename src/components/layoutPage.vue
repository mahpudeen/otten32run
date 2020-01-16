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
                        <li><a class="nav-link page-scroll" @click="navigate('/')" href="#features">Home</a></li>
                        <li><a class="nav-link page-scroll" @click="navigate('/about')" href="#about">Tentang Kami</a></li>
                        <li><a class="nav-link page-scroll" @click="navigate('/rules')" href="#rules">Peraturan</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div id="inSlider">
        <div class="bannertop2" style="height:595px">
            <!-- <b-img src="img/banner44.jpg" fluid-grow alt="Fluid-grow image"></b-img> -->
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                fade
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                <!-- Text slides with image -->
                
                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                    <template v-slot:img>
                        <a href="/#regis">
                    <b-img src="img/register22.png" fluid-grow alt="Fluid-grow image"></b-img>
                        </a>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                    <b-img src="img/banner44.png" fluid-grow alt="Fluid-grow image"></b-img>
                    </template>
                </b-carousel-slide>

            </b-carousel>

        </div>
    </div>

    <router-view/>

    <section class="bg-pricing">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="navy-line"></div>
                    <h1>Media Partners:</h1>
                    <p>
                        <b-img class="com-logos" src="img/sponsor/larikuinfo.jpg" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                        <!-- <img  class="rounded img-thumbnail" alt="..."> -->
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section style="background-color : #092d5b" id="regis">
        <div v-if="['home'].indexOf($route.name) > -1" style="text-align:center" class="pt-5 pb-5">
            
            <b-button pill variant="outline-light" style="height:100px;width:300px"><h1>REGISTER</h1></b-button>
            <!-- <div>
                <a href="/register">
                    <b-img src="img/register.jpg" fluid-grow alt="Fluid-grow image"></b-img>
                </a>
            </div> -->
        </div>
    </section>

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
                    <p><strong>&copy; 2020 Otten32Run</strong></p>
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
        mainProps : [],
        slide: 0,
            sliding: null
        };
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      navigate: function(page) {
        this.$router.push({ path: page });
      }
    }
    
}
</script>