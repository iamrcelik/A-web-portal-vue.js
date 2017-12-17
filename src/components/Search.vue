<script>
    import {HTTP} from '../services/http-common'
    import AppHeader from './AppHeader.vue'
    import Foota from './Foota.vue'
    export default {
        name: 'Search',
        components: {

            AppHeader,
            Foota,


        },
        data(){
            return {
                universities:[],
            }
        },
        created(){
            console.log(this.$route.params);
            HTTP.get(`http://localhost:8090/search?p=${this.$route.params.term}&q=${this.$route.params.country}`
            ).then(response => {
                this.universities = response.data;
                console.log(response)
            })
        },
    };

</script>

<template>
    <section>
        <app-header></app-header>
    <h1 v-for="university in universities">{{ university.name }}</h1>
        <foota></foota>
    </section>
</template>