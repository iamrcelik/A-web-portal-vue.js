
<script>
    import Countries from './Countries.vue'
    import CountryLandingPage from './CountryLandingPage.vue'
    import Loader from './Loader.vue'
    import Foota from './Foota.vue'
    import LandingPage from './LandingPage.vue'
    export default {
        name:'CountriesDetails',
        data(){
            return {
                isLoading:true,
                userdata:[]
            }
        },
        computed: {
            AllCountries() {
                return `/countries`;
            }
        },

        components: {
            LandingPage,
            Loader,
            Countries,
            Foota,
            CountryLandingPage,
        },
        created(){
            axios.get(`http://localhost:8090/countries/${this.$route.params.id}`)
                .then(response => {this.userdata = response.data, this.isLoading = false;
                })
        }
    };



</script>

<template>
    <section>
        <country-landing-page :userdata=userdata></country-landing-page>
        <Loader v-if="isLoading"></Loader>
        <section class="container py-5">


        </section>
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
        margin-top: 200px;
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
        background-color: transparent;
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
        background: transparent;
        border-bottom: 1px solid white;
        border-right: none;
        border-top: none;
        border-left: none;
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
</style>