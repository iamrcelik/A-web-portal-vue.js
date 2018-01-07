<script>
    import {HTTPAuth, HTTP} from '../services/http-common'
    import Foota from './Foota.vue'
    import AppHeader from './AppHeader.vue'
    import {Tabs,Tab} from 'vue-tabs-component';

    export default {
        name: 'ProgramsDetails',
        props: {},
        data() {
            return {
                isLoading: true,
                university: { },
                program: { },
            }
        },
        components: {
            AppHeader,
            Foota,
        },
        computed: {
            Register(){
                return `/register`;
            },
            Login(){
                return `/auth`;
            },
            Profile(){
                return `/profile`;
            },
            Program(){
                return `/countries/${this.userdata[0].id}/cities/${this.userdata[0].id}/universities/${this.userdata[0].universities[0].id}/programmes`;
            }


        },
        methods:{
            logOut(){
                localStorage.removeItem('token')
                window.loggedIn = false;
                location.href='/';
            },
        },
        created(){
            console.log(this.$route.params)
            this.loggedIn = window.loggedIn;
            HTTP.get(`http://localhost:8090/universities/${this.$route.params.id}`)
                .then(response => {this.isLoading = false;
                    this.university = response.data;
                    this.program = this.university.programmes.find((tempProgram) => tempProgram.id == this.$route.params.programId);
                    $('html, body').animate({
                        scrollTop: 1
                    }, 500);
                })
        },
    }
</script>

<template>
    <div>
        <section class="alan" :style='{ backgroundImage: `url(${university.landingPhoto})` }'>
            <nav class="navbar navbar-expand-sm navbar-light">
                <router-link to="/" class="navbar-brand"><img src="http://localhost:8080/src/assets/abroadstation.png"> </router-link>
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
                    <h1 class="header-pic">{{university.name}}</h1>
                </div>
            </div>
            <div class="arama">
            <form>
                    <div class="login-form">
                        <div class="form-group ">
                            <h1 class="header-pic" style="font-size: 50px !important;">{{program.name}}</h1>
                        </div>
                    </div>
                </form>
            </div>
            <section id="numberlar" style="margin-bottom: 40px">
                <div class="row" style="background-color: transparent">

                    <div class="numbers">
                        <i class="icon fa fa-users"></i>
                        <span class="counter">01.03.2018</span>
                        <span class="label">BAŞVURU TARİHİ</span>
                    </div>



                    <div class="numbers">
                        <i class="icon fa fa-graduation-cap"></i>
                        <span class="counter">{{program.duration}} Ay</span>
                        <span class="label">EĞİTİM SÜRESİ</span>
                    </div>


                    <div class="numbers">
                        <i class="icon fa fa-globe"></i>
                        <span class="counter">{{program.tuition}} TL</span>
                        <span class="label">FİYATI</span>
                    </div>
                </div>
            </section>
        </section>
        <h1>Başvuru için Gerekenler</h1>
        <div class="container">
            <h3>İelts Puanı: {{program.ielts}}</h3>
            <h3>Ortalama : 3.0 ve üzeri </h3>
            <h3>2 Adet Niyet Mektubu</h3>
            <h3>Başvuru ücreti : 80$</h3>

        </div>
        <foota></foota>
    </div>
</template>

<style scoped>
    #numberlar{
        margin-left:-365px;
    }
</style>