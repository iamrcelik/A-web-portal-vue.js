<script>
    import LandingPage from './LandingPage.vue'
    import {HTTP} from '../services/http-common'
    export default {
        name: 'Register',
        data(){
            return {
                isLoading:true,
                db:[],
                username:'',
                email: '',
                lastName:'',
                firstName:'',
                password: '',
                passwordAgain: ''
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
                if(this.password !== this.passwordAgain)
                    return;

                HTTP.post("http://localhost:8090/register", {
                    email: this.email,
                    password: this.password,
                    lastName: this.lastName,
                    firstName: this.firstName,
                    username: this.username
                }).then(response => {
                    this.username = response.data.username;
                    this.$router.push('/activation');
                    this.$toastr('warning', 'Size Uygun Okulun Belirlenmesi İçin Aşağıdaki Bilgileri Eksiksiz Doldurunuz!', 'Merhaba');
                })
            }
        }
    }
</script>

<template>
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
                    <input type="input" v-model="username" name="userName" placeholder="Kullanıcı Adı" class="form-control" />
                </div>
                <div class="form-group">
                    <input type="input" v-model="firstName" name="firstName" placeholder="İsim" class="form-control" />
                </div>
                <div class="form-group">
                    <input type="input" v-model="lastName" name="lastName" placeholder="Soyisim" class="form-control" />
                </div>
                <div class="form-group">
                    <input type="email" v-model="email" name="email" placeholder="Email" class="form-control" />
                </div>
                <div class="form-group">
                    <input type="password" v-model="password" name="password" placeholder="Şifre" class="form-control" />
                </div>
                <div class="form-group">
                    <input type="password" v-model="passwordAgain" name="password-repeat" placeholder="Şifre (tekrar)" class="form-control" />
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" type="button" v-on:click="register">KAYIT OLL</button>
                </div><a href="#" class="already">Daha önce bir hesabın var mı? Buradan giriş yap!</a></form>
        </div>
    </div>
    </body>

    </html>
</template>

<style>
    .register-photo {
        background:#f1f7fc;
        padding:80px 0;
    }

    .register-photo .image-holder {
        display:table-cell;
        width: auto;
        background:url(../assets/register.jpg);
        background-size: cover;
    }

    .register-photo .form-container {
        display:table;
        max-width:900px;
        width:90%;
        margin:0 auto;
        box-shadow:1px 1px 5px rgba(0,0,0,0.1);
    }

    .register-photo form {
        display:table-cell;
        width:400px;
        background-color:#ffffff;
        padding:100px 60px;
        color:#505e6c !important;
    }

    @media (max-width:991px) {
        .register-photo form {
            padding:40px;
        }
    }

    .register-photo form h2 {
        font-size:24px;
        line-height:1.5;
        margin-bottom:30px;
    }

    .register-photo form .form-control {
        background:#f7f9fc;
        border:none;
        border-bottom:1px solid #dfe7f1;
        border-radius:0;
        box-shadow:none;
        outline:none;
        color:inherit;
        text-indent:6px;
        height:40px;
    }

    .register-photo form .checkbox {
        font-size:13px;
        line-height:20px;
    }

    .register-photo form .btn-primary {
        background:#f4476b;
        border:none;
        border-radius:4px;
        padding:11px;
        box-shadow:none;
        margin-top:35px;
        text-shadow:none;
        outline:none !important;
    }

    .register-photo form .btn-primary:hover, .register-photo form .btn-primary:active {
        background:#eb3b60;
    }

    .register-photo form .btn-primary:active {
        transform:translateY(1px);
    }

    .register-photo form .already {
        display:block;
        text-align:center;
        font-size:12px;
        color:#6f7a85;
        opacity:0.9;
        text-decoration:none;
    }



</style>