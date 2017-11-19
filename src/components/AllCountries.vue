<script>
    import LandingPage from './LandingPage.vue'
    import Loader from './Loader.vue'
    import Foota from './Foota.vue'
    import CountriesList from "./CountriesList.vue";

    export default {
        name: 'AllCountries',
        data(){
            return {
                isLoading:true,
                db:[]
            }
        },
        components: {
            Loader,
            LandingPage,
            Foota,
            CountriesList,


        },
        created(){
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then(response => {this.db = response.data, this.isLoading = false;})

        }
    }
</script>
<template>
    <section>
    <landing-page></landing-page>
    <loader v-if="isLoading"></loader>
    <countries-list v-for="ulkes in db"
                    key="ulkes.id"
                    :country="ulkes"></countries-list>
    <foota></foota>
    </section>
</template>