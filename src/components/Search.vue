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
        data() {
            return {
                universities: [],
                universitiess: [],
                universitiesss: [],

            }
        },
        created() {
            let tempParams = "";

            if (this.$route.query.p) {
                tempParams = "p=" + this.$route.query.p;
            }
            if (this.$route.query.q) {
                if(tempParams)
                    tempParams += "&";
                tempParams += "q=" + this.$route.query.q;
            }

            if(tempParams){
                HTTP.get(`http://localhost:8090/search?${tempParams}`
                ).then(response => {
                    this.universitiesss = response.data;
                    console.log(response)
                })
            }

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