<script>
    import {HTTP} from '../services/http-common'
    export default {
        name: 'Search',
        data(){
            return {
                universities:[],
            }
        },
        created(){
            HTTP.get(`http://localhost:8090/search?q=${this.$route.params.term}`
            ).then(response => {
                this.universities = response.data;
            })
        },
    };

</script>

<template>
    <section>
    <h1 v-for="university in universities">{{ university.name }}</h1>
    </section>
</template>