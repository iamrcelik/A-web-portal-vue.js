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
                    <br/>
                    <button class="btn btn-primary btn-block" type="button" v-on:click="register" style="margin-left: 1px;">KAYIT OL</button>
                </form>
            </div>
        </div>
    </div>

</template>