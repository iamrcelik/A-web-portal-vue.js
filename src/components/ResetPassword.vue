<script>
    import {HTTP} from '../services/http-common'
    export default {
        data(){
            return{
                email:null,
                key:null,
                keyValid:true,
                password:null,
                emailValid:true,
                passwordValid:true,
            }
        },
        created(){
            this.$toastr('warning', 'Lütfen Mailinize Gönderilen anahtarı giriniz!', 'Anahtar!');

        },
        methods:{
            resettt() {
                if(!this.email){
                    this.emailValid = false;
                } else {
                    this.emailValid = true;
                }
                if(!this.key){
                    this.keyValid = false;
                } else {
                    this.keyValid = true;
                }
                if(!this.password){
                    this.passwordValid = false;
                } else {
                    this.passwordValid = true;
                }
                HTTP.post("http://localhost:8090/resetpassword",{email:this.email, newPassword:this.password, resetPasswordKey:this.key}
                ).then(response => {
                    this.$toastr('success', 'Şifreniz Başarıyla Değiştirilmiştir.', 'Başarılı!');
                    this.$router.push('/auth');
                }, error => {
                    this.$toastr('error', 'Şifre Sıfırlama Gerçekleştirilemedi.', 'Hatalı!');})
            }
        },

    }
</script>

<template>
    <div class="agile-login" style="background-image: url(src/assets/back2.jpg); background-size: cover; min-height: 100vh;">
        <!---728x90--->

        <!---728x90--->
        <div class="wrapper">
            <router-link to="/" class="navbar-brand"><img src="/src/assets/jf-logos-03.png"> </router-link><br><br>
            <h2>Şifre Sıfırla</h2>
            <div class="w3ls-form">
                <form action="/" method="post">
                    <label>Email</label>
                    <span style="color: red;" v-show="errors.has('email:required')">Email Zorunlu!</span>
                    <input class="form-control" type="email" v-model="email" name="email"  id="inputUsername" placeholder="email" v-bind:class="{ valid: emailValid, invalid: !emailValid }" v-validate="{ required: true, email: true, regex: '[0-9]' }"/>
                    <label>Şifre</label>
                    <span style="color: red;" v-show="errors.has('password:required')">Şifre Zorunlu!</span>
                    <input class="form-control" type="password" v-model="password" name="password"  id="inputUsername" placeholder="password" v-bind:class="{ valid: passwordValid, invalid: !passwordValid }" v-validate="{ required: true, }"/>
                    <label>Key</label>
                    <span style="color: red;" v-show="errors.has('key:required')">Anahtar Zorunlu!</span>
                    <input class="form-control" type="input" v-model="key" name="key"  id="inputUsername" placeholder="key" v-bind:class="{ valid: keyValid, invalid: !keyValid }" v-validate="{ required: true, }"/>
                    <br>
                    <button type="button" class="btn btn-primary btn-block" v-on:click="resettt" style="margin-left: 1px;">GÜNCELLE</button>
                </form>
            </div>
        </div>
        <br>
    </div>
</template>