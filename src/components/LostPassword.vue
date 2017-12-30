<script>
    import {HTTP} from '../services/http-common'
    export default {
        data(){
            return{
                email:null,
                emailValid :true,
            }
        },
        created(){
            this.$toastr('warning', 'Mail Gönder işlemini tamamladıktan sonra şifre sıfırlama ekranına yönlendirileceksiniz', 'Lütfen Bekleyin!');

        },
        methods:{
            lost() {
                if(this.email){
                    this.$toastr('Success', 'Lütfen Mailinizi Kontrol Edin!', 'Mail!');
                }
                if(!this.email){
                    this.emailValid = false;
                } else {
                    this.emailValid = true;
                }
                HTTP.get("http://localhost:8090/lostpassword?e="+ this.email
                ).then(response => {

                    this.$router.push('/reset');

                },error => {
                    if (this.email){
                        this.$toastr('error', 'Email Geçersiz!', 'Hatalı!');
                    }else{this.$toastr('error', 'Bu mail boş geçilemez!', 'Hatalı!');}
                    })
            }
        },

    }
</script>

<template>
    <div class="agile-login" style="background-image: url(/src/assets/back2.jpg); background-size: cover; min-height: 100vh;">
        <!---728x90--->


        <!---728x90--->
        <div class="wrapper">
            <router-link to="/" class="navbar-brand"><img src="/src/assets/jf-logos-03.png"> </router-link><br><br>
            <h2>Şifremi Unuttum</h2>
            <div class="w3ls-form">
                <form action="/" method="post">
                    <label>Email</label>
                    <span style="color: red;" v-show="errors.has('email:required')">Email Zorunlu!</span>
                    <span style="color: red;" v-show="errors.has('email:email')">Email Hatalı!</span>
                    <input class="form-control" type="email" v-model="email" name="email"  id="inputUsername" placeholder="email" v-bind:class="{ valid: emailValid, invalid: !emailValid }" v-validate="{ required: true, email: true, regex: '[0-9]' }"/>
                    <br/>
                    <button type="button" class="btn btn-primary btn-block" v-on:click="lost" style="margin-left: 1px;">Mail Gönder</button>                </form>
            </div>
        </div>
        <br>
    </div>
</template>