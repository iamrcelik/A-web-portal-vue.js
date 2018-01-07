<script>
    import {HTTPAuth, HTTP} from '../services/http-common'
    import Foota from './Foota.vue'
    import {Tabs,Tab} from 'vue-tabs-component';

    export default {
        name: 'UniversiyDetails',
        props: {
        },
        data(){
            return {
                isLoading:true,
                userdata:[],
                program:'',
                country:'',
            }
        },
        components: {
            Foota,
        },
        created(){
            console.log(this.$route.params)
            this.loggedIn = window.loggedIn;
            HTTP.get(`http://localhost:8090/countries/${this.$route.params.id}/cities`)
                .then(response => {this.userdata = response.data, this.isLoading = false;
                    console.log(this.$route.params.id)
                    console.log(response)
                    $('html, body').animate({
                        scrollTop: 1
                    }, 500);
                })
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
            search :function () {
                console.log(this.country);
                this.$router.push('/search?p=' + this.program+ '&q=' + this.userdata[0].universities[0].name);
            },
        }
    };

</script>
<section>
</section>
<template>
    <div>
    <section class="alan" :style='{ backgroundImage: `url(${userdata[0].universities[0].landingPhoto})` }'>
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
                <h1 class="header-pic">{{userdata[0].universities[0].name}}</h1>
            </div>
        </div>
        <div class="arama">
            <form>
                <div class="login-form">
                    <div class="form-group ">
                        <i class="fa fa-graduation-cap"></i>
                        <input type="text" class="form-control" placeholder="Ne Okumak İstersin?" id="okul" v-model="program">
                    </div>
                    <button type="button" class="log-btn"  v-on:click="search">HEMEN BUL</button>
                </div>
            </form>
        </div>
        <section id="numberlar" style="margin-bottom: 40px">
            <div class="row" style="background-color: transparent">

                <div class="numbers">
                    <i class="icon fa fa-users"></i>
                    <span class="counter">{{userdata[0].universities[0].studentNumber}}</span>
                    <span class="label">NÜFUS</span>
                </div>



                <div class="numbers">
                    <i class="icon fa fa-graduation-cap"></i>
                    <span class="counter">{{userdata[0].universities[0].ranking}}</span>
                    <span class="label">YAŞAM ÜCRETİ</span>
                </div>


                <div class="numbers">
                    <i class="icon fa fa-globe"></i>
                    <span class="counter">{{userdata[0].universities[0].masterNumber}}</span>
                    <span class="label">ÖĞRENCİLER</span>
                </div>
            </div>
        </section>


    </section>
        <div>
            <tabs>
                <tab name="Eğitim" >
                    <div v-html="userdata[0].universities[0].education">
                    </div>
                </tab>
                <tab name="Kariyer">
                    <div v-html="userdata[0].universities[0].career"></div>
                </tab>
                <tab name="Hakkında">
                    <div v-html="userdata[0].universities[0].about"></div>
                </tab>
            </tabs>
        </div>
        <foota></foota>
    </div>
</template>
<style scoped>
    #numberlar{
        margin-left:-365px;
    }
</style>