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
                usernameValid: true,
                email: '',
                emailValid: true,
                lastName:'',
                lastNameValid: true,
                firstName:'',
                firstNameValid: true,
                password: '',
                passwordValid: true,
                passwordAgain: '',
                passwordAgainValid: true,
            }
        },
        computed:{
            Login(){
                return `/auth`;
            },
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
                if(!this.username){
                    this.usernameValid = false;
                } else {
                    this.usernameValid = true;
                }
                if(!this.email){
                    this.emailValid = false;
                } else {
                    this.emailValid = true;
                }
                if(!this.lastName){
                    this.lastNameValid = false;
                } else {
                    this.lastNameValid = true;
                }
                if(!this.firstName){
                    this.firstNameValid = false;
                } else {
                    this.firstNameValid = true;
                }
                if(!this.password){
                    this.passwordValid = false;
                } else {
                    this.passwordValid = true;
                }
                if(!this.passwordAgain){
                    this.passwordAgainValid = false;
                } else {
                    this.passwordAgainValid = true;
                }

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
                    this.$toastr('warning', 'Sistemimize Giriş Yapabilmeniz için Mailinize Gönderilen Aktivasyon Kodu ile hesabınızı aktifleştirmeniz gerekmektedir. ', 'Merhaba');
                },error => {
                    this.$toastr('error', 'Bu alanlar boş geçilemez!', 'Hatalı!');})
            }
        }
    }
</script>

<template>
    <div class="agile-login" style="background-image: url(src/assets/back2.jpg); background-size: cover; min-height: 100vh;">
        <!---728x90--->

        <!---728x90--->
        <div class="wrapper">
            <router-link to="/" class="navbar-brand"><img src="/src/assets/jf-logos-03.png"> </router-link><br><br>
            <h2>KAYIT OL | <router-link :to="Login">GİRİŞ YAP</router-link></h2>
            <div class="w3ls-form">
                <form action="/" method="post">
                    <label>Kullanıcı Adı *</label>
                    <span style="color: red;" v-show="errors.has('userName:required')">Kullanıcı Adı Zorunlu!</span>
                    <input type="input" v-model="username" name="userName" placeholder="Kullanıcı Adı" class="form-control" v-bind:class="{ valid: usernameValid, invalid: !usernameValid }"v-validate="{ required: true, }"/>
                    <label>İsİm *</label>
                    <span style="color: red;" v-show="errors.has('firstName:required')">İsim Zorunlu!</span>
                    <input type="input" v-model="firstName" name="firstName" placeholder="İsim" class="form-control" v-bind:class="{ valid: firstNameValid, invalid: !firstNameValid }"v-validate="{ required: true }"/>
                    <label>Soyİsİm *</label>
                    <span style="color: red;" v-show="errors.has('lastName:required')">Soyisim Zorunlu!</span>
                    <input type="input" v-model="lastName" name="lastName" placeholder="Soyisim" class="form-control"v-bind:class="{ valid: lastNameValid, invalid: !lastNameValid }" v-validate="{ required: true, }"/>
                    <label>Email *</label>
                    <span style="color: red;" v-show="errors.has('email:required')">Email Zorunlu!</span>
                    <span style="color: red;" v-show="errors.has('email:email')">Email Hatalı!</span>
                    <input type="email" v-model="email" name="email" placeholder="Email" class="form-control" v-bind:class="{ valid: emailValid, invalid: !emailValid }" v-validate="{ required: true, email: true, regex: '[0-9]' }"/>
                    <label>Şİfre *</label>
                    <span style="color: red;" v-show="errors.has('password:required')">Şifre Zorunlu!</span>
                    <input type="password" v-model="password" name="password" placeholder="Şifre" class="form-control" v-bind:class="{ valid: passwordValid, invalid: !passwordValid }" v-validate="{ required: true, }"/>
                    <label>Şİfre(Tekrar) *</label>
                    <span style="color: red;" v-show="errors.has('password-repeat:required')">Şifre Tekrar Zorunlu!</span>
                    <input type="password" v-model="passwordAgain" name="password-repeat" placeholder="Şifre (tekrar)" class="form-control" v-bind:class="{ valid: passwordAgainValid, invalid: !passwordAgainValid }" v-validate="{ required: true, }"/>
                    <button class="btn btn-primary btn-block" type="button" v-on:click="register" style="margin-left: 1px;">KAYIT OL</button>
                </form>
            </div>
        </div>
    </div>

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
    input.invalid{
        border-color: red;
    }

</style>