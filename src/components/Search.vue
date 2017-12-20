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
                universitiess:[],
                universitiesss:[],

            }
        },
        created(){
            console.log(this.$route.params);
            if(this.$route.params.term){
                if(this.$route.params.country){
                HTTP.get(`http://localhost:8090/search?p=${this.$route.params.term}&q=${this.$route.params.country}`
                ).then(response => {
                    this.universities = response.data;
                    console.log(response)
                })
            }}
            if(this.$route.params.term) {
                if(!this.$route.params.country){
                HTTP.get(`http://localhost:8090/search?p=${this.$route.params.term}`
                ).then(response => {
                    this.universitiess = response.data;
                    console.log(response)
                })
            }}
            if(this.$route.params.country) {
                if(!this.$route.params.term){
                HTTP.get(`http://localhost:8090/search?q=${this.$route.params.country}`
                ).then(response => {
                this.universitiesss = response.data;
                console.log(response)
            })
                }}

        },
    };

</script>

<template>
    <section>
        <app-header></app-header>
        <h1 v-for="university1 in universities">{{ university1.name }}</h1>
        <h1 v-for="university2 in universitiess">{{ university2.name }}</h1>
        <h1 v-for="university3 in universitiesss">{{ university3.name }}</h1>
        <foota></foota>
    </section>
</template>