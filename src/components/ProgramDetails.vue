<script>
    import {HTTPAuth, HTTP} from '../services/http-common'
    import Foota from './Foota.vue'
    import AppHeader from './AppHeader.vue'
    import {Tabs,Tab} from 'vue-tabs-component';

    export default {
        name: 'ProgramDetails',
        props: {},
        data() {
            return {
                isLoading: true,
                programs:[],
            }
        },
        components: {
            AppHeader,
            Foota,
        },
        created(){
            console.log(this.$route.params)
            this.loggedIn = window.loggedIn;
            HTTP.get(`http://localhost:8090/countries/${this.$route.params.id}/cities/${this.$route.params.id}/universities/${this.$route.params.id}/programmes`)
                .then(response => {this.isLoading = false;

                    let i=0;
                    for(i=0;i<5;i++){
                        this.programs.push(response.data[i]);
                    }
                })
        },
    }
</script>


<template>
    <section>
        <app-header></app-header>
        <div v-for="program in programs">
            <h1> {{program.name}}</h1>
            <h1> {{program.universityName}}</h1>
        </div>
        <foota></foota>
    </section>


</template>