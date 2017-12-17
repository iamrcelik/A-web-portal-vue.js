
<script>
    import Countries from './Countries.vue'
    import CountryLandingPage from './CountryLandingPage.vue'
    import Loader from './Loader.vue'
    import Foota from './Foota.vue'
    import LandingPage from './LandingPage.vue'
    import {HTTPAuth, HTTP} from '../services/http-common'
    import CountryLandingPageLoggedIn from './CountryLandingPageLoggedIn.vue'

    export default {
        name:'CountriesDetails',
        data(){
            return {
                isLoading:true,
                userdata:[],
                cities: [
                    {
                        name: 'NewYork',
                        id: 1
                    },
                    {
                        name: 'Milano',
                        id: 4
                    },
                    {
                        name: 'Londra',
                        id: 2
                    },
                    {
                        name: 'Toronto',
                        id: 3
                    },
                    {
                        name: 'Amsterdam',
                        id: 5
                    },
                    {
                        name: 'Paris',
                        id: 6
                    },
                    {
                        name: 'Barselona',
                        id: 7
                    },
                    {
                        name: 'Berlin',
                        id: 8
                    }
                ]

            }
        },
        computed: {
            CitiesDetails() {
                return `/countries/${this.userdata.id}/cities`;
            }
        },


    components: {
            LandingPage,
            Loader,
            Countries,
            Foota,
            CountryLandingPage,
            CountryLandingPageLoggedIn,
        },
        created(){
            console.log(this.$route.params)
            this.loggedIn = window.loggedIn;
                HTTP.get(`http://localhost:8090/countries/${this.$route.params.id}`)
                .then(response => {
                    this.userdata = response.data;
                    this.isLoading = false;
                    setTimeout(() => {

                        $('.cities a').each((index, element) => {
                            $(element).removeAttr('href');
                        });

                        $('.cities a').click((event) => {
                            let html = $(event.target).html().trim();
                            let city = this.cities.find((tempCity) => tempCity.name === html);
                            if(city){
                                this.$router.push('/countries/' + this.$route.params.id + '/cities/');
                            }
                        })
                    }, 100);
                })
        },
    };



</script>

<template>
    <section>
        <div v-if="loggedIn"><country-landing-page-logged-in :userdata=userdata></country-landing-page-logged-in></div>
        <div v-if="!loggedIn"><country-landing-page :userdata=userdata></country-landing-page></div>

          <Loader v-if="isLoading"></Loader>
        <div>
            <tabs>
                <tab name="Eğitim" >
                    <div v-html="userdata.education">
                    </div>
                </tab>
                <tab name="Kariyer">
                    <div v-html="userdata.career"></div>
                </tab>
                <tab name="Yaşam">
                    <div v-html="userdata.living"></div>
                </tab>
                <tab name="Hakkında">
                    <div v-html="userdata.about"></div>
                </tab>
                <tab name="Şehirler" class="cities">
                    <div v-html="userdata.cityInfo"></div>
                </tab>
                <tab name="Üniversiteler">
                    <div v-html="userdata.universitiesInfo"></div>
                </tab>
            </tabs>
        </div>
        <foota></foota>
    </section>
</template>



<style>
    /*-------------
    Menü
    ------------- */
    .alan {
        height: 900px;
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
    }
    .nav-logo{
        color: white;
        font-weight: bold;
    }
    .navbar{
        margin-left: 5%;
        margin-right: 5%;
        padding-top: 30px;
    }
    @media screen and (max-width: 768px) {
        .navbar {
            padding-top: 10px;
            margin-left: 2%;
            margin-right: 2%;
        }
    }
    .header-pic h1{
        color: white;
        text-transform: uppercase;
        margin: 0 auto;
        margin-top: 100px;
        font-size: 100px;
        font-weight: 900;
    }
    @media screen and (max-width: 768px) {
        .header-pic img{
            width: 80%;
            padding-top: 10px;
            margin-left: 59px;
            margin-right: 0px;
            margin-bottom: 10%;
        }
    }
    .navbar-light .navbar-nav .nav-link {
        color: white;
    }
    .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link{
        color: white;
    }
    .login-form{
        width: 40%;
        height: 250px;
        padding: 40px 30px;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        margin-left: 490px;
        border-radius: 4px;
        left: 0;
        right: 0;
        top:80%;
    }
    @media screen and (max-width: 768px) {
        .login-form{
            width: 90%;
            padding-top: 10px;
            margin-left: 0px;
            margin-right: 0px;
        }
    }
    .login-form h1{
        color: white;
        text-transform: uppercase;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: lighter;
        letter-spacing: 4px;
        font-size: 20px;
    }
    .form-group {
        position: relative;
        margin-bottom: 15px;
    }
    .form-group .fa {
        position: absolute;
        right: 15px;
        top: 17px;
        color: white;
    }
    .form-control:active, .form-control:focus {
        outline: none;
        box-shadow: none;
        background-color: transparent !important;
        color: white;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid white;
    }
    .form-group .form-control::-webkit-input-placeholder {
        color: white;
    }
    .log-btn {
        background: transparent;
        dispaly: inline-block;
        width: 50%;
        margin-left: 26%;
        font-size: 14px;
        height: 50px;
        color: #fff;
        border: 1px solid white !important;
        text-decoration: none;
        border: none;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        border-radius: 4px;
    }
    .form-control {
        letter-spacing: 3px;
        text-transform: uppercase;
        box-shadow: none;
        background: transparent !important;
        border-bottom: 1px solid white !important;
        border-right: none !important;
        border-top: none !important;;
        border-left: none !important;;
        height: 54px;
        font-size: 11px;
        font-weight: 400;
    }
/*-----------
Numbers
 -----------*/
    .numbers{
        position: relative;
        text-align: center;
        background-color:transparent;
        border-radius: 10px;
        border: 1px solid white;
        padding: 15px;
        width: 234px;
        margin: 0px;
    }
    #numberlar .row {
        margin-left: 230px;
    }

    .numbers .icon,
    .numbers .counter,
    .numbers .label{
        display: block;
    }
    .numbers .label{
        color: rgba(255, 255, 255, 0.5);
        font-size: 18px;
        font-weight: bold;
    }
    .numbers .counter{
    font-size: 30px;
    color: #fff;
    font-weight: 300;
    }
    .numbers .icon{
        font-size: 30px;
        color: white;
    }
    .numbers{margin:10px; }

    @media screen and (max-width: 768px) {
        .numbers{
            width: 100px;
            text-align: center;
            padding-top: 15px;
            padding-right: 5px;
            padding-left: 5px;
            margin: 2px;

        }
        .numbers .label{
            display: none;
        }
        .numbers .counter{
            font-size: 20px;
            color: #fff;
            font-weight: 300;
        }

        .row{
            margin-left: 0px;
            margin-right: 0px;
        }
        .alan{
            height: 835px;
        }
        #numberlar .row {
            margin-left: 7px;
        }

    }
    /*--------

    Tabs
    ******/
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1 {
        padding: 50px 0;
        font-weight: 400;
        text-align: center;
    }

    p {
        margin: 0 0 20px;
        line-height: 1.5;
    }
    html, body {
        height: 100vh;
    }

    body {
        font: 14px/1 'Open Sans', sans-serif;
        color: #555;
        background: #eee;
    }
    main {
        min-width: 320px;
        max-width: 1000px;
        padding: 50px;
        margin: 0 auto;
        background: #fff;
    }
    input {
        display: none;
    }
    label {
         display: inline-block;
         margin: 0 0 -1px;
         padding: 15px 25px;
         font-weight: 600;
         text-align: center;
         color: #bbb;
         border: 1px solid transparent;
     }
    label:before {
        font-family: fontawesome;
        font-weight: normal;
        margin-right: 10px;
    }
    label[for*='1']:before { content: '\f02d'; }
    label[for*='2']:before { content: '\f19d '; }
    label[for*='3']:before { content: '\f0d6'; }
    label[for*='4']:before { content: '\f06c '; }
    label[for*='5']:before { content: '\f0f7 '; }
    label[for*='6']:before { content: '\f19c  '; }

    label:hover {
        color: #888;
        cursor: pointer;
    }
    input:checked + label {
        color: #555;
        border: 1px solid #ddd;
        border-top: 2px solid rgba(157, 255, 0, 0.356);
        border-bottom: 1px solid #fff;
    }
    #tab1:checked ~ #content1,
    #tab2:checked ~ #content2,
    #tab3:checked ~ #content3,
    #tab4:checked ~ #content4,
    #tab5:checked ~ #content5,
    #tab6:checked ~ #content6
    {
        display: block;
    }
    @media screen and (max-width: 650px) {
        label {
            font-size: 0;
        }
        label:before {
            margin: 0;
            font-size: 18px;
        }
    }

    @media screen and (max-width: 400px) {
        label {
            padding: 15px;
        }
    }
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 5px;
        text-align: left;
    }
    table.city ,th.city,td.city{
        border:none;
    }
    .tabs-details{
        padding: 100px;
    }
</style>
