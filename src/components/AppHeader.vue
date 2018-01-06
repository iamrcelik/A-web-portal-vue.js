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
                loggedIn:false,
            }
        },
        created(){
            this.loggedIn = window.loggedIn;
        },
        methods:{
            logOut(){
                localStorage.removeItem('token')
                window.loggedIn = false;
                location.href='/';
            }
        }
    }

</script>
<template>
    <section id = menu style="background-image: url(/src/assets/back2.jpg);">
    <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/" class="navbar-brand"><img src="/src/assets/abroadstation.png"> </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/" style="color: white">ANASAYFA <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item" v-if="!loggedIn">
                    <router-link :to="Login" class="nav-link" style="color: white !important;" >GİRİŞ YAP</router-link>
                </li>
                <li class="nav-item" v-if="!loggedIn">
                    <router-link :to="Register" class="nav-link" style="color: white !important;" >KAYIT OL</router-link>
                </li>
                <li v-if="loggedIn" class="nav-item">
                    <a class="dropdown-toggle" data-toggle="dropdown" style="color: white !important;" ><i class="fa fa-user"></i><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><router-link :to="Profile">Profil</router-link></li>
                        <li><a v-on:click="logOut">Çıkış Yap</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    </section>
</template>
<style scoped>
    #menu{
        width: 100%;
        height: 300px;
        background-color: #060;
        color: #fff;
        text-align: center;
        text-shadow: 0 1px 3px rgba(0, 0, 0, .5);
        background-size: cover;
    }
    .nav-item{
        position: relative;
    }
    .dropdown-menu{
        z-index: 9999999;
    }
</style>

