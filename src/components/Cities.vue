<script>
    import {HTTPAuth, HTTP} from '../services/http-common'
    import Foota from './Foota.vue'
    import {Tabs,Tab} from 'vue-tabs-component';

    export default {
        name: 'Cities',
        data(){
            return {
                loggedIn:false,
                isLoading:true,
                userdata:[],
                options: null,
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
                console.log(response)
                console.log(this.$route.params.id)
                    console.log(response)
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
            ProgramDetails() {
                    return `/countries/${this.userdata[0].id}/cities/${this.userdata[0].id}/universities`;
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
                this.$router.push('/search/' + this.program+'/'+this.userdata[0].name);
            },
        }
    };
</script>

<template>
    <section class="alan" style= "background-image: url(http://appic.works/wp-content/uploads/2017/12/newyorkcity.jpg)" >
        <nav class="navbar navbar-expand-sm navbar-light">
            <router-link to="/" class="navbar-brand"><img src="http://localhost:8080/src/assets/jf-logos-03.png"> </router-link>
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
                <h1 class="header-pic">{{userdata[0].name}}</h1>
            </div>
        </div>
        <div class="arama">
            <form>
                <div class="login-form">
                    <div class="form-group ">
                        <i class="fa fa-graduation-cap"></i>
                        <input type="text" class="form-control" placeholder="Ne Okumak İstersin?" id="okul" v-model="program">
                    </div>
                    <button type="button" class="log-btn" v-on:click="search">HEMEN BUL</button>
                </div>
            </form>
        </div>
        <section id="numberlar" style="margin-bottom: 40px">
            <div class="row" style="background-color: transparent">

                <div class="numbers">
                    <i class="icon fa fa-users"></i>
                    <span class="counter">{{userdata[0].population}}</span>
                    <span class="label">NÜFUS</span>
                </div>



                <div class="numbers">
                    <i class="icon fa fa-graduation-cap"></i>
                    <span class="counter">{{userdata[0].livingCost}}</span>
                    <span class="label">YAŞAM ÜCRETİ</span>
                </div>


                <div class="numbers">
                    <i class="icon fa fa-globe"></i>
                    <span class="counter">{{userdata[0].studentNumber}}</span>
                    <span class="label">ÖĞRENCİLER</span>
                </div>


                <div class="numbers">
                    <i class="icon fa fa-university"></i>
                    <span class="counter">{{userdata[0].universityNumber}}</span>
                    <span class="label">OKULLAR</span>
                </div>
                <div class="numbers">
                    <i class="icon fa fa-check"></i>
                    <span class="counter">57</span>
                    <span class="label">DERECELİ OKULLAR</span>
                </div>

            </div>
        </section>
        <div>
            <tabs>
                <tab name="Eğitim" >
                    <div v-html="userdata[0].education">
                    </div>
                </tab>
                <tab name="Kariyer">
                    <div v-html="userdata[0].career"></div>
                </tab>
                <tab name="Hakkında">
                    <div v-html="userdata[0].about"></div>
                </tab>
                <tab name="Üniversiteler">
                    <table class="city" style="width:100%" >
                        <tr class="city">
                            <td class="city"><router-link :to="ProgramDetails"> NewYork</router-link></td>
                            <td class="city">Las Vegas</td>
                        </tr>
                        <tr class="city">
                            <td class="city"><a href="">San Francisco</a></td>
                            <td class="city">San Diego</td>
                        </tr>
                        <tr class="city">
                            <td class="city"><a href="">Miami</a></td>
                            <td class="city">Dallas</td>
                        </tr>
                        <tr class="city">
                            <td class="city">Los Angeles</td>
                            <td class="city">New Orleans</td>
                        </tr>
                        <tr class="city">
                            <td class="city">Washington DC</td>
                            <td class="city">Atlanta</td>
                        </tr>
                        <tr class="city">
                            <td class="city">Chicago</td>
                            <td class="city">Florida</td>
                        </tr>
                        <tr class="city">
                            <td class="city">Austin</td>
                            <td class="city">San Antonio</td>
                        </tr>
                        <tr class="city">
                            <td class="city">Phoenix</td>
                            <td class="city">Indianapolis</td>
                        </tr>
                        <tr class="city">
                            <td class="city">Sacramento</td>
                            <td class="city">California</td>
                        </tr>
                    </table>
                </tab>
            </tabs>
        </div>
        <foota></foota>

    </section>
</template>

<style>
    /*-------------
    Menü
    ------------- */
    .alan {
        height: 900px;
    }
    .navbar{
        margin-left: 5%;
        margin-right: 5%;
        padding-top: 30px;
    }
    @media screen and (max-width: 768px) {
        .navbar {
            padding-top: 10px;
            margin-left: 2%;
            margin-right: 2%;
        }
    }
    .header-pic img{
        margin: 0 auto;
        margin-top: 70px;
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
    .navbar-light .navbar-nav .nav-link {
        color: white;
    }
    .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link{
        color: white;
    }
    .login-form{
        width: 40%;
        height: 350px;
        padding: 40px 30px;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        margin-left: 490px;
        border-radius: 4px;
        left: 0;
        right: 0;
        top:80%;
    }
    @media screen and (max-width: 768px) {
        .login-form{
            width: 90%;
            padding-top: 10px;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 5%;
        }
    }
    .login-form h1{
        color: white;
        text-transform: uppercase;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: lighter;
        letter-spacing: 4px;
        font-size: 20px;
    }
    .form-group {
        position: relative;
        margin-bottom: 15px;
    }
    .form-group .fa {
        position: absolute;
        right: 15px;
        top: 17px;
        color: white;
    }
    .form-control:active, .form-control:focus {
        outline: none;
        box-shadow: none;
        background-color: transparent;
        color: white;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid white;
    }
    .form-group .form-control::-webkit-input-placeholder {
        color: white;
    }
    .log-btn {
        background: transparent !important;
        dispaly: inline-block;
        width: 50%;
        margin-left: 26%;
        font-size: 14px;
        height: 50px;
        color: #fff;
        border: 1px solid white !important;
        text-decoration: none;
        border: none;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        border-radius: 4px;
    }
    .form-control {
        letter-spacing: 3px;
        text-transform: uppercase;
        box-shadow: none;
        background: transparent !important;
        border-bottom: 1px solid white !important;
        border-right: none !important;
        border-top: none !important;
        border-left: none !important;
        height: 54px;
        font-size: 11px;
        font-weight: 400;
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
</style>