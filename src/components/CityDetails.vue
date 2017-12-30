
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
