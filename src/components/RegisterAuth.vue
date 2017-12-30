<script>
    import LandingPage from './LandingPage.vue'
    import {HTTP} from '../services/http-common'
    export default {
        name: 'Register',
        data(){
            return {
                isLoading:true,
                db:[],
                activationKey:'',
                email: '',
            }
        },
        components: {
            LandingPage,
        },
        created(){
            axios.get("http://localhost:8090/countries")
                .then(response => {this.db = response.data; this.isLoading = false;
                })

        },
        methods: {
            register:  function(event){
                HTTP.post("http://localhost:8090/activate", {
                    email: this.email,
                    activationKey: this.activationKey
                }).then(response => {
                    this.username = response.data.username;
                    this.$router.push('/auth');
                    this.$toastr('warning', 'Size Uygun Okulun Belirlenmesi İçin Giriş Yaptıktan Sonra Profilinizdeki Bilgileri Eksiksiz Doldurunuz!', 'Merhaba');
                })
            }
        }
    }
</script>

<template>

    <div class="agile-login" style="background-image: url(src/assets/back2.jpg); background-size: cover; min-height: 100vh;">
        <!---728x90--->

        <!---728x90--->
        <div class="wrapper">
            <h2>AKTİVASYON</h2>
            <div class="w3ls-form">
                <form action="/" method="post">
                    <label>Aktİvasyon Kodu</label>
                    <input type="input" v-model="activationKey" name="activationKey" placeholder="Aktivasyon Kodu" class="form-control" />
                    <label>Emaİl</label>
                    <input type="email" v-model="email" name="email" placeholder="Email" class="form-control" />
                    <a href="#" class="pass">Şifremi unuttum!</a>
                    <button class="btn btn-primary btn-block" type="button" v-on:click="register">AKTİFLEŞTİR!</button>
                </form>
            </div>
        </div>
    </div>

    <!----
    <html>

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Untitled</title>
        <link rel="stylesheet" href="bootstrap.min.css" />
        <link rel="stylesheet" href="styles.css" />
    </head>

    <body>
    <div class="register-photo">
        <div class="form-container">
            <div class="image-holder"></div>
            <form>
                <h2 class="text-center">KAYIT OL</h2>
                <div class="form-group">
                    <input type="input" v-model="activationKey" name="activationKey" placeholder="Kullanıcı Adı" class="form-control" />
                </div>
                <div class="form-group">
                    <input type="email" v-model="email" name="email" placeholder="Email" class="form-control" />
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" type="button" v-on:click="register">GİRİŞ YAP</button>
                </div></form>
        </div>
    </div>
    </body>

    </html>
    !---->
</template>