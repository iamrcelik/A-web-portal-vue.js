<script>
    export default {
        name: 'CountriesTabs',
        data(){
            return {
                isLoading:true,
                userdata:[],
            }
        },
        created(){
            axios.get(`http://localhost:8090/countries/${this.$route.params.country_id}/cities/${this.$route.params.id}`)
                .then(response => {this.userdata = response.data, this.isLoading = false;
                })
        },
    }
</script>

<template>
    <section class="container py-5">
        <div id="app" class="container">
            <tabs>
                <tab name="Şehirler" :selected="true">
                    <h1>agmet
                    </h1>
                </tab>

                <tab name="About Our Culture">
                    <h1>Here is the content for the about our culture tab.</h1>
                </tab>

                <tab name="About Our Vision">
                    <h1>Here is the content for the about our vision tab.</h1>
                </tab>
            </tabs>
        </div>
    </section>
</template>