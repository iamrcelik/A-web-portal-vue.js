<script>
    export default {
        name: 'CountryLandingPageLoggedIn',
        props: {
            userdata: {
                required: true,
            }
        },
        data(){
            return {
                program:'',
                country :'',
                loggedIn:false,

            }
        },
        computed: {
            AllCountries() {
                return `/countries`;
            },
            Register(){
                return `/register`;
            },
            Login(){
                return `/auth`;
            },
            Profile(){
                return `/profile`;
            },
        },

        methods:{
            search :function () {
                console.log(this.country);
                this.$router.push('/search/' + this.program+'/'+this.userdata.name);
            },
            logOut(){
                localStorage.removeItem('token')
                window.loggedIn = false;
                location.href='/';
            }
        }
    }
</script>

<template>
    <div class="alan" :style='{ backgroundImage: `url(${userdata.landingPhoto})` }'>
        <nav class="navbar navbar-expand-sm navbar-light">
            <router-link to="/" class="navbar-brand"><img class="header-pic" src="http://appic.works/wp-content/uploads/2018/01/abroadstation.png"> </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link" style="color: white !important;">ANASAYFA <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <a class="dropdown-toggle" data-toggle="dropdown" style="color: white !important;" ><i class="fa fa-user"></i> <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><router-link :to="Profile">Profil</router-link></li>
                            <li><a v-on:click="logOut">Çıkış Yap</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="header-pic">
            <div class="row">
                <h1 class="header-pic">{{userdata.name}}</h1>
            </div>
        </div>
        <div class="arama">
            <div class="login-form">
                <div class="form-group ">
                    <i class="fa fa-graduation-cap"></i>
                    <input type="text" class="form-control" v-model="program" placeholder="Ne Okumak İstersin?" id="okul">
                </div>
                <button type="button" class="log-btn" v-on:click="search">BUL</button>
            </div>
        </div>
        <section id="numberlar">
            <div class="row" style="background-color: transparent">

                <div class="numbers">
                    <i class="icon fa fa-users"></i>
                    <span class="counter">{{userdata.population}}</span>
                    <span class="label">NÜFUS</span>
                </div>



                <div class="numbers">
                    <i class="icon fa fa-graduation-cap"></i>
                    <span class="counter">{{userdata.studentNumber}}</span>
                    <span class="label">ÖĞRENCİLER</span>
                </div>


                <div class="numbers">
                    <i class="icon fa fa-globe"></i>
                    <span class="counter">{{userdata.foreignStudentNumber}}</span>
                    <span class="label">YABANCI ÖĞRENCİLER</span>
                </div>


                <div class="numbers">
                    <i class="icon fa fa-university"></i>
                    <span class="counter">{{userdata.universityNumber}}</span>
                    <span class="label">OKULLAR</span>
                </div>
                <div class="numbers">
                    <i class="icon fa fa-check"></i>
                    <span class="counter">{{userdata.rankedUniversityNumber}}</span>
                    <span class="label">DERECELİ OKULLAR</span>
                </div>

            </div>
        </section>
    </div>
</template>