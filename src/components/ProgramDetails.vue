<script>
    import {HTTPAuth, HTTP} from '../services/http-common'
    import Foota from './Foota.vue'
    import {Tabs,Tab} from 'vue-tabs-component';

    export default {
        name: 'ProgramDetails',
        props: {},
        data() {
            return {
                isLoading: true,
                userdata: [],
            }
        },
        components: {
            Foota,
        },
        created(){
            console.log(this.$route.params)
            this.loggedIn = window.loggedIn;
            HTTP.get(`http://localhost:8090/countries/${this.$route.params.id}/cities/${this.$route.params.id}/universities/${this.$route.params.id}/programmes`)
                .then(response => {this.userdata = response.data, this.isLoading = false;
                })
            console.log(response);
        },
    }
</script>


<template>
    <section><h1> {{userdata[0].name}}</h1>
        <h1> {{userdata[0].universityName}}</h1></section>

</template>