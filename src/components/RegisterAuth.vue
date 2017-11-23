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

<style>

    .agile-login {

        padding-top: 60px;
    }
    .wrapper {
        width: 450px;
        margin: auto;
        /* border-radius: 20px; */
        text-align: center;
        padding: 3% 0px;
        /*background-color: rgba(255, 255, 255, 0.31);*/
        background-color: rgba(6, 5, 5, 0.33);
        webkit-box-shadow: 10px 3px 66px -19px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 3px 66px -19px rgba(0,0,0,0.75);
        box-shadow: 10px 3px 66px -19px rgba(0,0,0,0.75);
    }
    .w3ls-form {
        display: inline-block;
        width: 350px;
        margin: auto;
        text-align: left;
    }
    label, input[type="text"],input[type="submit"]{
        display: block;
        font-family: 'Open Sans', sans-serif;
    }
    input[type="text"] {
        outline: 0;
        padding: 12px 15px;
        border-radius: 25px;
        border: none;
        /* background-color: rgba(31, 248, 255, 0.59); */
        background-color: rgba(87, 102, 103, 0.59);
        color: white;
        width: 90%;
        letter-spacing: 1px;
    }
    .agile-login h1 {
        text-align: center;
        color: #fff;
        margin-bottom: 2%;
        font-size: 45px;
        font-weight: 300;
        letter-spacing: 5px;
        text-transform: uppercase;
    }
    .wrapper h2 {
        margin-bottom: 30px;
        text-transform: uppercase;
        font-size: 26px;
        color: white;
        font-weight: 600;
        letter-spacing: 2px;
    }
    a.pass {
        font-size: 15px;
        color: #efbb42;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: 2px;
    }
    .w3ls-form a {
        display: block;
        text-align: right;
        margin: 15px 0px;
    }

    label {
        margin: 20px 0px 8px 15px;
        font-size: 13px;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-left: 0px;
    }
    input[type="submit"] {
        margin: 20px auto;
        padding: 9px 60px;
        border-radius: 25px;
        font-size: 18px;
        border: none;
        background-color: transparent;
        color: #fff;
        outline: 0;
        border: 1px solid #4f5d61;
        cursor: pointer;
        width: 100%;
        letter-spacing: 1px;
    }
    input[type="submit"]:hover {
        color: #fff;
        background-color:  rgba(0, 245, 255, 0.69);
    }
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #ccc6c6;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        color: #ccc6c6;
    }
    :-ms-input-placeholder { /* IE 10+ */
        color: #ccc6c6;
    }
    :-moz-placeholder { /* Firefox 18- */
        color: #ccc6c6;
    }

    .agile-icons {
        padding: 3% 0px;
    }
    span.fa.fa-twitter:hover {
        background-color: #00b6f1;
        color: white;
    }
    span.fa.fa-facebook:hover {
        background-color: #3b5998;
        color: white;
    }
    span.fa.fa-pinterest-p:hover {
        background-color: #cb2027;
        color: white;
    }
    .agile-icons span.fa {
        font-size: 12px;
        margin: auto 10px;
        color: #fff;
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 50%;
        background-color: rgba(243, 249, 249, 0.22);
    }
    .copyright p {
        text-align: center;
        padding: 15px 0px;
        color: white;
        /* background-color: rgba(35, 30, 30, 0.43); */
        margin-top: 4%;
        letter-spacing: 2px;
        font-size: 13px;
    }
    .copyright a {
        color: aqua;
    }
    .copyright a:hover {
        color: yellow;
    }
    /* responsive */
    @media screen and (max-width: 1024px){

        .copyright p {
            margin-top: 0%;
        }
    }


    @media screen and (max-width: 568px){
        .agile-login h1 {
            font-size: 40px;

        }
    }

    @media screen and (max-width: 480px){
        body{
            background-position: center;
        }
        .agile-login {
            padding-top: 35px;
        }
        .agile-login h1 {
            font-size: 35px;
            letter-spacing: 4px;
        }
        .wrapper h2 {
            font-size: 26px;

        }
        .wrapper {
            width: 370px;
        }
        .copyright p {
            letter-spacing: 1px;

        }

    }
    @media screen and (max-width: 414px){
        .agile-login h1 {
            font-size: 30px;
            letter-spacing: 3px;
            margin-bottom: 6%;
        }
        .wrapper {
            width: 320px;
        }
        .w3ls-form {
            width: 300px;
        }
        .wrapper h2 {
            font-size: 20px;
            margin-bottom: 15px;
        }
        .copyright p {
            padding: 10px 0px;
            font-size: 14px;
            margin-top: 6%;
        }

    }
    @media screen and (max-width: 375px){
        .agile-login h1 {
            font-size: 29px;
        }
        input[type="text"] {
            width: 90%;
        }
        label {
            margin: 20px 0px 5px 10px;
            font-size: 13px;
            color: #fff;
        }
        .copyright p {
            font-size: 13px;

        }
    }
    @media screen and (max-width: 320px){
        .w3ls-form {
            width: 270px;
        }
        .agile-login h1 {
            font-size: 23px;
        }
        .wrapper {
            width: 280px;
        }
        .wrapper h2 {
            font-size: 18px;
            margin-bottom: 10px;
        }
        input[type="submit"] {
            margin: 10px auto;
            padding: 8px 60px;
        }
        .agile-login {
            padding-top: 30px;
        }
        label {
            margin: 15px 0px 5px 10px;
        }
        .copyright p {
            margin-top: 0%;
        }
        input[type="text"] {
            padding: 10px 15px;
        }
    }

    /****
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

 *****/

</style>