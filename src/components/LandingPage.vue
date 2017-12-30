<script>
    export default {
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
        data(){
            return {
                program:'',
                aValid: true,
                country:'',
                countryValid: true,
                loggedIn: false,

            }
        },
        created(){
            this.loggedIn = window.loggedIn;
        },
        methods: {
            logOut(){
                localStorage.removeItem('token')
                window.loggedIn = false;
                location.href='/';
            },
            search :function () {
                if(!this.program && !this.country){
                    this.aValid = false;
                    this.countryValid = false;
                    this.$toastr('error', 'Program ve Ülke Boş Olamaz!', 'Hatalı!');
                    return;
                }
                if(this.program && this.country){
                    this.$router.push('/search?p=' + this.program+ '&q=' + this.country);
                }
                if(this.program && !this.country){
                    this.$router.push('/search?p=' + this.program);
                }
                if(!this.program && this.country){
                    this.$router.push('/search?q=' + this.country);
                }



            }
        },


    }

</script>
<template>
    <section class="alan" style="background-image: url(src/assets/back.jpg)">
        <nav class="navbar navbar-expand-sm navbar-light">
            <router-link to="/" class="navbar-brand"><img src="src/assets/jf-logos-03.png"> </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link" style="color: white !important;">ANASAYFA <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item" v-if="!loggedIn">
                        <router-link :to="Login" class="nav-link" style="color: white !important;" >GİRİŞ YAP</router-link>
                    </li>
                    <li class="nav-item" v-if="!loggedIn">
                        <router-link :to="Register" class="nav-link" style="color: white !important;" >KAYIT OL</router-link>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
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
                  <img src="src/assets/jf-logos-02.png">
            </div>
        </div>
        <div class="arama">
            <form>
            <div class="login-form">
                <div class="form-group ">
                    <i class="fa fa-graduation-cap"></i>
                    <input type="text" class="form-control" v-model="program" placeholder="Ne Okumak İstersin?" id="okul"      v-bind:class="{ valid: aValid, invalid: !aValid } "v-validate="{ required: true, }">
                </div>
                <div class="form-group ">
                    <i class="fa fa-globe"></i>
                    <input type="text" class="form-control" v-model="country" placeholder="Nerede Okumak İstersin?" id="şehir" v-bind:class="{ valid: countryValid, invalid: !countryValid }"v-validate="{ required: true, }">
                </div>
                    <button type="button" class="log-btn" v-on:click="search">HEMEN BUL</button>
            </div>
            </form>
         </div>

    </section>
</template>

<style scoped>
    .header-pic img{
        margin: 0 auto;
        margin-top: 70px;
    }

    .nav-item{
        position: relative;
    }
    .dropdown-menu.show{
        background-color: transparent;
        border: none;
    }
    .nav-item a, a.nav-item{
        color:white;
    }

    @media screen and (max-width: 768px) {
        .header-pic img{
            width: 80%;
            padding-top: 10px;
            margin-left: 59px;
            margin-right: 0px;
            margin-bottom: 10%;
        }
    }
</style>