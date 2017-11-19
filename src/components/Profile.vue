<script>
    import LandingPageLoggedIn from './LandingPageLoggedIn.vue'
    import LandingPage from './LandingPage.vue'
    import {loggedIn} from '../services/settings';
    import AppHeader from './AppHeader.vue'
    import App from "../App.vue";

    export default {
        name: 'Profile',
        components: {

            App,
            AppHeader,


        },
        data(){
            return {
                loggedIn:false,
            }
        },
        created(){
            this.loggedIn = window.loggedIn;
        },
    };


</script>

<template>
    <app-header></app-header>
</template>