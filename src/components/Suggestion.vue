<script>
    import {HTTPAuth} from '../services/http-common'
    import AppHeader from './AppHeader.vue'
    import Foota from './Foota.vue'
export default {

    data(){
        return {
            suggestions:[]

        }
    },
    components: {

        AppHeader,
        Foota,


    },

    created(){
        HTTPAuth.get("http://localhost:8090/user/suggestion"
        ).then(response => {
            console.log(response);
            let i=0;
            for(i=0;i<5;i++){
                this.suggestions.push(response.data[i]);
            }




        })
    }
}
</script>

<template>
    <div>
        <app-header></app-header>
        <div v-for="suggestion in suggestions">
            <div class="card" style="margin-left: 500px;">
                <div class="card-block" style="margin-left: 100px;">
                    <h4 class="card-title">{{suggestion.name}}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">{{suggestion.countryName}}</h6>
                    <div class="row"><h5>{{suggestion.universityName}}</h5></div>
                    <div class="row">Tuition: {{suggestion.tuition}}</div>
                    <div class="row">duration {{suggestion.duration}}</div>
                    <div class="row">{{suggestion.ielts}}</div>

                </div>
            </div>

        </div>
        <foota></foota>
    </div>

</template>
<style>

</style>