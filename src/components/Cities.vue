<script>
    export default {
        name: 'Cities',
        data(){
            return {
                isLoading:true,
                userdata:[]
            }
        },
        created(){
            axios.get(`http://localhost:8090/countries/${this.$route.params.id}/cities/${this.$route.params.id}`)
                .then(response => {this.userdata = response.data; this.isLoading = false;
                })
        }
    }
</script>

<template>
    <section class="ülkeler">
        <h2>{{userdata.name}}</h2>
        <h2>{{userdata.population}}</h2>
    </section>
</template>