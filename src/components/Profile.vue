<script>
    import LandingPage from './LandingPage.vue'
    import {loggedIn} from '../services/settings';
    import AppHeader from './AppHeader.vue'
    import App from "../App.vue";
    import {HTTP,HTTPAuth} from '../services/http-common'
    import Foota from './Foota.vue'

    export default {
        name: 'Profile',
        components: {

            App,
            AppHeader,
            Foota,


        },
        data(){
            return {
                loggedIn:false,
                username:'',
                email: '',
                lastName:'',
                firstName:'',
                password: '',
                passwordAgain: '',
                averageGrade: '',
                country:'',
                experience:'',
                graduateCountry:'',
                graduateProgram:'',
                interestCountry:'',
                interestProgram:'',
                toefl:'',
                userInfo:'{}',

            }
        },
        created(){
            this.loggedIn = window.loggedIn;
            HTTPAuth.get("http://localhost:8090/user"
            ).then(response => {
                console.log(response.data);
                this.username = response.data.username;
                this.email = response.data.email;
                this.firstName = response.data.firstName;
                this.lastName = response.data.lastName;
                    this.averageGrade = response.data.userInfo.averageGrade;
                    this.country = response.data.userInfo.country;
                    this.experience = response.data.userInfo.experience;
                    this.graduateCountry = response.data.userInfo.graduateCountry;
                    this.graduateProgram = response.data.userInfo.graduateProgram;
                    this.interestCountry = response.data.userInfo.interestCountry;
                    this.interestProgram = response.data.userInfo.interestProgram;
                    this.toefl = response.data.userInfo.toefl;



            })
        },
        methods: {
           updateUserProfile :function (event) {
               HTTPAuth.post("http://localhost:8090/user", {

                        averageGrade: this.averageGrade,
                        country: this.country,
                        experience: this.experience,
                        graduateCountry: this.graduateCountry,
                        graduateProgram: this.graduateProgram,
                        interestCountry: this.interestCountry,
                        interestProgram: this.interestProgram,
                        toefl: this.toefl,

               }).then(response => {
                   this.$toastr('success', ' Bilgileriniz Güncellenmiştir.Teşekkürler!', 'Merhaba');
                   console.log(response);
               })
           },

        },
    };


</script>

<template>
    <section>
        <app-header></app-header>
        <div class="a">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h1>Kişisel Bilgiler</h1>
                        <form role="form" style="border: 1px solid black;
        padding: 20px;
        margin-top: 10px;">
                            <div class="form-group">

                                <label for="inputUsername">Kullanıcı Adı</label>

                                <input type="input" v-model="username" name="userName"  id="inputUsername" placeholder="Kullanıcı Adı" class="form-control" disabled="disabled"/>
                            </div>
                            <div class="form-group">
                                <label for="inputName">İsim</label>

                                <input type="input" v-model="firstName" name="firstName" placeholder="İsim" id="inputName" class="form-control" disabled="disabled"/>
                            </div>
                            <div class="form-group">

                                <label for="inputLastName">Soyisim</label>

                                <input type="input" v-model="lastName" name="lastName" placeholder="Soyisim" id="inputLastName" class="form-control" disabled="disabled"/>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail">Email</label>

                                <input type="email" v-model="email" name="email" placeholder="Email"  id="inputEmail" class="form-control" disabled="disabled"/>
                            </div>

                        </form>
                    </div>
                    <div class="col-md-8">
                        <h1>İstenilen Bilgiler</h1>
                        <form role="form" style="border: 1px solid black;
        padding: 20px;
        margin-top: 10px;">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">

                                        <label for="inputAvg">Mezuniyet Ortalaması</label>

                                        <input type="input" v-model="averageGrade" name="averageGrade" placeholder="Mezuniyet Ortalaması(4.00)" id="inputAvg" class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPoint">Toefl/Ielts Puanı</label>

                                        <input type="input" v-model="toefl" name="toefl" placeholder="Toefl Puanı" id="inputPoint" class="form-control" />
                                    </div>
                                    <div class="form-group">

                                        <label for="inputCountry">Ülke</label>

                                        <input type="input" v-model="country" name="country" placeholder="Ülke" id="inputCountry" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputExp">İş Tecrübesi</label>

                                        <input type="input" v-model="experience" name="experience" placeholder="İş Tecrübesi(Yıl)" id="inputExp" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="inputGradCountry">Mezun Olduğun Ülke</label>


                                        <input type="input" v-model="graduateCountry" name="graduateCountry" placeholder="Mezun Olduğun Ülke" id="inputGradCountry" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputGradProg">Mezun Olduğun Bölüm</label>

                                        <input type="input" v-model="graduateProgram" name="graduateProgram" placeholder="Mezun Olduğun Bölüm"  id="inputGradProg" class="form-control" />
                                    </div>
                                    <div class="form-group">

                                        <label for="inputDesCountry">Okumak İstediğin Ülke</label>

                                        <input type="input" v-model="interestCountry" name="interestCountry" placeholder="Okumak İstediğin Ülke" id="inputDesCountry" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputDesProg">Okumak İstediğin Bölüm</label>

                                        <input type="input" v-model="interestProgram" name="interestProgram" placeholder="Okumak İstediğin Bölüm" id="inputDesProg" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>


            </div>
            <div class="highlight-blue">
                <div class="container">
                    <div class="buttons" style="text-align: center; margin-top: 20px">
                        <button type="button" class="btn btn-success" v-on:click="updateUserProfile">GÜNCELLE</button>
                    </div>
                </div>
            </div>
        </div>

    <foota></foota>

    </section>
</template>
<style>
    .profil{border: 1px solid black;
        padding: 20px;
        margin-top: 10px;}
    .container h1 {
        margin-top: 30px;
    }
</style>