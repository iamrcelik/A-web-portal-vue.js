<script>
    import {HTTPAuth, HTTP} from '../services/http-common'
    export default {
        name: 'Cities',
        data(){
            return {
                isLoading:true,
                userdata:[],
            }
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
    };
</script>

<template>
    <section>
        <h1>ali</h1>
        <h1>{{userdata[0].name}}</h1>
    </section>
</template>