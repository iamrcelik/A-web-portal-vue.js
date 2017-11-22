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
                   this.$toastr('success', 'Bilgileriniz Güncellenmiştir.Teşekkürler!', 'Merhaba');
                   console.log(response);
               })
           },

        },
    };


</script>

<template>
    <section>
        <app-header></app-header>
        <div class="container">
            <h1>Kişisel Bilgiler</h1>
            <form class="profil">
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputUsername">Kullanıcı Adı</label>
                        <input type="input" v-model="username" name="userName"  id="inputUsername" placeholder="Kullanıcı Adı" class="form-control" disabled="disabled"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputName">İsim</label>
                        <input type="input" v-model="firstName" name="firstName" placeholder="İsim" id="inputName" class="form-control" disabled="disabled"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputLastName">Soyisim</label>
                        <input type="input" v-model="lastName" name="lastName" placeholder="Soyisim" id="inputLastName" class="form-control" disabled="disabled"/>

                    </div>
                </div>
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" v-model="email" name="email" placeholder="Email"  id="inputEmail" class="form-control" disabled="disabled"/>
                </div>

            </form>
        </div>
        <div class="container">
            <h1>İstenilen Bilgiler</h1>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputAvg">Mezuniyet Ortalaması</label>
                        <input type="input" v-model="averageGrade" name="averageGrade" placeholder="Mezuniyet Ortalaması" id="inputAvg" class="form-control"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputPoint">Toefl/Ielts Puanı</label>
                        <input type="input" v-model="toefl" name="toefl" placeholder="Toefl Puanı" id="inputPoint" class="form-control" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputCountry">Ülke</label>
                        <input type="input" v-model="country" name="country" placeholder="Ülke" id="inputCountry" class="form-control" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputExp">İş Tecrübesi</label>
                        <input type="input" v-model="experience" name="experience" placeholder="İş Tecrübesi(Yıl)" id="inputExp" class="form-control" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputGradCountry">Mezun Olduğun Ülke</label>
                        <input type="input" v-model="graduateCountry" name="graduateCountry" placeholder="Mezun Olduğun Ülke" id="inputGradCountry" class="form-control" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputGradProg">Mezun Olduğun Bölüm</label>
                        <input type="input" v-model="graduateProgram" name="graduateProgram" placeholder="Mezun Olduğun Bölüm"  id="inputGradProg" class="form-control" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputDesCountry">Okumak İstediğin Ülke</label>
                        <input type="input" v-model="interestCountry" name="interestCountry" placeholder="Okumak İstediğin Ülke" id="inputDesCountry" class="form-control" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputDesProg">Okumak İstediğin Bölüm</label>
                        <input type="input" v-model="interestProgram" name="interestProgram" placeholder="Okumak İstediğin Bölüm" id="inputDesProg" class="form-control" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-4 control-label" ></label>
                    <div class="col-md-4">
                        <button type="button" class="btn btn-success" v-on:click="updateUserProfile">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <foota></foota>
    </section>
    <!-------
    <section>
    <div>
    <app-header></app-header>
        <div class="container">
            <div class="row">
                <div class="col-md-10 ">
                    <form class="form-horizontal">
                        <fieldset>

                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-user">
                                            </i>
                                        </div>
                                        <input type="input" v-model="username" name="userName" placeholder="Kullanıcı Adı" class="form-control" />                                    </div>
                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-male" style="font-size: 20px;"></i>

                                        </div>
                                        <input type="input" v-model="firstName" name="firstName" placeholder="İsim" class="form-control" />
                                    </div>

                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-female" style="font-size: 20px;"></i>

                                        </div>
                                        <input type="input" v-model="lastName" name="lastName" placeholder="Soyisim" class="form-control" />
                                    </div>

                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-briefcase"></i>

                                        </div>
                                        <input type="email" v-model="email" name="email" placeholder="Email" class="form-control" />
                                    </div>


                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-briefcase"></i>

                                        </div>
                                        <input type="email" v-model="averageGrade" name="averageGrade" placeholder="Mezuniyet Ortalaması" class="form-control" />                                    </div>


                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-graduation-cap"></i>

                                        </div>
                                        <input type="country" v-model="country" name="country" placeholder="Ülke" class="form-control" />
                                    </div>


                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-phone"></i>

                                        </div>
                                        <input type="experience" v-model="experience" name="experience" placeholder="İş Tecrübesi(Yıl)" class="form-control" />
                                    </div>

                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-clock-o"></i>

                                        </div>
                                        <input type="graduateCountry" v-model="graduateCountry" name="graduateCountry" placeholder="Mezun Olduğun Ülke" class="form-control" />

                                    </div>


                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-street-view"></i>
                                        </div>
                                        <input type="graduateProgram" v-model="graduateProgram" name="graduateProgram" placeholder="Mezun Olduğun Bölüm" class="form-control" />
                                    </div>


                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-sticky-note-o"></i>

                                        </div>
                                        <input type="interestCountry" v-model="interestCountry" name="interestCountry" placeholder="Okumak İstediğin Ülke" class="form-control" />
                                    </div>


                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-sticky-note-o"></i>

                                        </div>
                                        <input type="interestProgram" v-model="interestProgram" name="interestProgram" placeholder="Okumak İstediğin Bölüm" class="form-control" />
                                    </div>


                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-clock-o"></i>

                                        </div>
                                        <input type="toefl" v-model="toefl" name="toefl" placeholder="Toefl Puanı" class="form-control" />
                                    </div>

                                </div>
                            </div>



                            <div class="form-group">
                                <label class="col-md-4 control-label" ></label>
                                <div class="col-md-4">
                                    <button type="button" class="btn btn-success" v-on:click="updateUserProfile">Submit</button>
                                </div>
                            </div>

                        </fieldset>
                    </form>
                </div>


            </div>
        </div>
    </div>
    <foota></foota>
    </section>
    !----->
</template>
<style>
    .profil{border: 1px solid black;
        padding: 20px;
        margin-top: 10px;}
    .container h1 {
        margin-top: 30px;
    }
</style>