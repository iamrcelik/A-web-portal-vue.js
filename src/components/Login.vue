<script>
    import LandingPage from './LandingPage.vue'
    import {HTTPAuth} from '../services/http-common'
    export default {
        name: 'Register',
        data(){
            return {
                isLoading:true,
                db:[],
                username: '',
                password: ''
            }
        },
        computed:{
            Register(){
                return `/register`;
            },
        },
        components: {
            LandingPage,
        },

        methods: {
            login: function (event) {
                axios.post("http://localhost:8090/auth", {
                    password: this.password,
                    username: this.username
                }).then(response => {
                    localStorage.setItem('token', response.data.token);
                    window.loggedIn = true;
                    this.$router.push('/');
                }, error => {
                    this.$toastr('error', 'Kullanıcı adı veya şifre hatalı', 'Hatalı!');
                })
            },
            lostpassword :function () {
                this.$router.push('/lostpassword/');
            },
        }
    }
</script>

<template>
    <div class="agile-login" style="background-image: url(src/assets/back2.jpg); background-size: cover; min-height: 100vh;">
        <!---728x90--->

        <!---728x90--->
        <div class="wrapper">
            <router-link to="/" class="navbar-brand"><img src="/src/assets/jf-logos-03.png"> </router-link><br><br>
            <h2>GİRİŞ YAP | <router-link :to="Register">KAYIT OL</router-link></h2>
            <div class="w3ls-form">
                <form action="/" method="post">
                    <label>Kullanıcı Adı</label>
                    <input type="input" v-model="username" name="username"  placeholder="Kullanıcı Adı" class="form-control"/>
                    <label>Şifre</label>
                    <input type="password" v-model="password" name="password" placeholder="Şifre" class="form-control" required />
                    <a href="#" class="pass"v-on:click="lostpassword">Şifremi unuttum!</a>
                    <button class="btn btn-primary btn-block" type="button" v-on:click="login">GİRİŞ YAP!</button>
                </form>
            </div>
        </div>
        <br>
    </div>

</template>