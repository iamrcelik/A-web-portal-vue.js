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
            <div class="container">
            <div class="row" style="border: 1px solid black;">
                <div class="column" >
                    <img src="/src/assets/uni.png" style="width:64px; height: 64px;"/>
                </div>
                <div class="column">
                    <div class="row"><h3 class="card-title" style="color: #f95c39;">{{suggestion.name}}</h3></div>
                    <div class="row"><h5>{{suggestion.universityName}}</h5></div>
                    <div class="row"><h6 class="card-subtitle mb-2 text-muted">{{suggestion.countryName}}</h6></div>
                    <div class="row">duration: {{suggestion.duration}} Ay</div>
                    <div class="row">IELTS: {{suggestion.ielts}}</div>
                </div>
                <div class="column" >
                    <div class="row"><h3>{{suggestion.tuition}} TL/yıl</h3></div>
                </div>
            </div>
            </div>
        </div>
        <foota></foota>
    </div>

</template>
<style>

</style>