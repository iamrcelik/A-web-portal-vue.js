<script>
    import {HTTPAuth, HTTP} from '../services/http-common'
    import Foota from './Foota.vue'

    export default {
        name: 'ProgramsDetails',
        props: {
        },
        data(){
            return {
                isLoading:true,
                userdata:[],
            }
        },
        components: {
            Foota,
        },
        created(){
            console.log(this.$route.params)
            this.loggedIn = window.loggedIn;
            HTTP.get(`http://localhost:8090/countries/${this.$route.params.id}/cities`)
                .then(response => {this.userdata = response.data, this.isLoading = false;
                    console.log(this.$route.params.id)
                    console.log(response)
                })
        },
        computed: {
            Register(){
                return `/register`;
            },
            Login(){
                return `/auth`;
            },

        }
    };

</script>

<template>
    <section>
        <h1>{{userdata[0].universities[0].name}}</h1>
        <h1>{{userdata[0].universities[0].masterNumber}}</h1>
    </section>


</template>