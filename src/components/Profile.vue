<script>
    import LandingPage from './LandingPage.vue'
    import {loggedIn} from '../services/settings';
    import AppHeader from './AppHeader.vue'
    import App from "../App.vue";
    import {HTTP,HTTPAuth} from '../services/http-common';
    import Foota from './Foota.vue';
    import VueNumeric from 'vue-numeric';
    export default {
        name: 'Profile',
        components: {

            App,
            AppHeader,
            Foota,
            VueNumeric,


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
                interestCountryValid:true,
                interestProgram:'',
                interestProgramValid:true,
                ielts:'',
                ieltsValid:true,
                userInfo:'{}',
                maxPrice:'',
                maxPriceValid:true,
                language:'',
                languageValid:true,
                duration:'',
                durationValid:true,

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
                this.ielts = response.data.userInfo.ielts;
                this.maxPrice = response.data.userInfo.maxPrice;
                this.language = response.data.userInfo.language;
                this.duration = response.data.userInfo.duration;



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
                        ielts: this.ielts,
                        maxPrice: this.maxPrice,
                        language: this.language,
                        duration: this.duration,

               }).then(response => {
                   this.$toastr('success', ' Bilgileriniz Güncellenmiştir.Teşekkürler!', 'Merhaba');
                   console.log(response);
               },)
           },
            Suggestion :function (event) {
                if(!this.language){
                    this.languageValid = false;
                } else {
                    this.languageValid = true;
                }
                if(!this.ielts){
                    this.ieltsValid = false;
                } else {
                    this.ieltsValid = true;
                }
                if(!this.maxPrice){
                    this.maxPriceValid = false;
                } else {
                    this.maxPriceValid = true;
                }
                if(!this.interestCountry){
                    this.interestCountryValid = false;
                } else {
                    this.interestCountryValid = true;
                }
                if(!this.interestProgram){
                    this.interestProgramValid = false;
                } else {
                    this.interestProgramValid = true;
                }
                if(!this.duration){
                    this.durationValid = false;
                } else {
                    this.durationValid = true;
                }
                if(this.language && this.ielts && this.maxPrice && this.interestCountry && this.interestProgram && this.duration){
                    this.$router.push(`/suggestion/`);
                    }
                   else{
                        this.$toastr('error', ' Zorunlu Alanlar Var', 'Merhaba!');

                }


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
                                        <label for="inputPoint">Ielts Puanı</label>
                                        <span style="color: red;" v-show="errors.has('ielts:required')">İelts Zorunlu!</span>
                                        <input type="input" v-model="ielts" name="ielts" placeholder="Ielts Puanı" id="inputPoint" class="form-control" v-bind:class="{ valid: ieltsValid, invalid: !ieltsValid }" v-validate="{ required: true, }"/>
                                    </div>
                                    <div class="form-group">

                                        <label for="inputCountry">Ülke</label>

                                        <input type="input" v-model="country" name="country" placeholder="Ülke" id="inputCountry" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputExp">İş Tecrübesi</label>

                                        <input type="input" v-model="experience" name="experience" placeholder="İş Tecrübesi(Yıl)" id="inputExp" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputExp">Fiyat</label>
                                        <span style="color: red;" v-show="errors.has('maxPrice:required')">Kullanıcı Adı Zorunlu!</span>
                                        <vue-numeric :read-only = 'false' seperator="." v-model="maxPrice" class="form-control" v-bind:class="{ valid: maxPriceValid, invalid: !maxPriceValid }" v-validate="{ required: true, }"></vue-numeric>
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
                                        <span style="color: red;" v-show="errors.has('interestCountry:required')">Ülke Zorunlu!</span>
                                        <input type="input" v-model="interestCountry" name="interestCountry" placeholder="Okumak İstediğin Ülke" id="inputDesCountry" class="form-control" v-bind:class="{ valid: interestCountryValid, invalid: !interestCountryValid }" v-validate="{ required: true, }"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputDesProg">Okumak İstediğin Bölüm</label>
                                        <span style="color: red;" v-show="errors.has('interestProgram:required')">Program Zorunlu!</span>
                                        <input type="input" v-model="interestProgram" name="interestProgram" placeholder="Okumak İstediğin Bölüm" id="inputDesProg" class="form-control" v-bind:class="{ valid: interestProgramValid, invalid: !interestProgramValid }" v-validate="{ required: true, }" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputDesProg">İstenilen Dil</label>
                                        <span style="color: red;" v-show="errors.has('language:required')">Dil Zorunlu!</span>
                                        <select v-model="language" v-bind:class="{ valid: languageValid, invalid: !languageValid }" v-validate="{ required: true, }">
                                            <option value="" disabled selected>Dil</option>
                                            <option value="ENGLISH">İngilizce</option>
                                            <option value="GERMAN">Almanca</option>
                                            <option value="FRENCH">Fransızca</option>
                                            <option value="SPANISH">İspanyolca</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputDesProg">İstenilen Süre</label>
                                        <span style="color: red;" v-show="errors.has('duration:required')">Kullanıcı Adı Zorunlu!</span>
                                        <select v-model="duration" v-bind:class="{ valid: durationValid, invalid: !durationValid }" v-validate="{ required: true, }">
                                            <option value="" disabled selected>Süre</option>
                                            <option value="LESS_THAN_A_YEAR">6 ay</option>
                                            <option value="BETWEEN_ONE_AND_TWO">12 ay</option>
                                            <option value="GREATER_THAN_TWO">24 ay</option>
                                        </select>
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
                    <div class="buttons" style="text-align: center; margin-top: 20px">
                        <button type="button" class="btn btn-warning" v-on:click="Suggestion">UYGUN ÜNİVERSİTE BUL</button>
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