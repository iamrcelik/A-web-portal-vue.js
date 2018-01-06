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
        <div>

            <h1>Sizin İçin En Uygun Üniversiteler</h1>
        </div>
        <div v-for="suggestion in suggestions">
            <div class="container">
            <div class="listed-school animated">
                <div class="school-logo-wrap">
                        <img src="https://d1qy7wmw5fq66c.cloudfront.net/media/18633/uduquébecàchicoutimi.jpg/listing">
                </div>
                <br>
                <h2><a href="/schools/masters-degree/université-du-québec-à-chicoutimi/?discipline=3" target="/schools/masters-degree/université-du-québec-à-chicoutimi/?discipline=3" title="Université du Québec à Chicoutimi" data-tracking="next-page">{{suggestion.universityName}}</a></h2>
                <h3><i data-icon="O"></i> {{suggestion.name}} , {{suggestion.duration}} Ay</h3>
                <h3><i class="fa fa-map-marker" ></i> {{suggestion.countryName}}    </h3>
                <div class="school-desc">
                    <ul class="list-unstyled school-attributes">
                        <li><i class="fa fa-graduation-cap" aria-hidden="true"></i>
                            <span class="attribute-title">Öğrenci Sayısı</span>
                            <span class="attribute-value">N/A</span>
                        </li>
                        <li>
                            <i class="fa fa-trophy" aria-hidden="true"></i>
                            <span class="attribute-title">Üniversite Sıralaması</span>
                            <span class="attribute-value">USD 7,911</span>
                        </li>
                        <li>
                             <i class="fa fa-money" aria-hidden="true"></i>
                            <span class="attribute-title">Fiyat</span>
                            <span class="attribute-value">{{suggestion.tuition}} TL</span>
                        </li>
                    </ul>
                    <p>UQAC is the third largest branch of the Université du Québec. It is a French-language institution offering programs in Arts, Sciences, Business, and Engineering, as well as a courses in French as a second language via the École de la langue française et de culture québécoise.
                        <span class="ellipsis-more">... </span>
                    </p>
                </div>
                <div class="school-action">
                    <div class="school-rendered" id="schoolData1000">
                        <div class="line-break">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <foota></foota>
    </div>
</template>
<style scoped>
    .listed-school {
        border: solid 1px #CCC;
        padding: 20px 5px 20px 115px;
        text-align: left;
    }
    .listed-school {
        position: relative;
        margin: 20px 0;
        padding: 0 0 20px 90px;
        text-align: left;
        border-bottom: 1px solid #ccc;
    }
    .listed-school .school-attributes span[class] {
        display: block;
    }
    .listed-school .attribute-icon {
        height: 40px;
        font-size: 32px;
    }
    .listed-school .school-desc p {
        max-width: 650px;
    }
    .listed-school .school-desc p, .listed-school .school-action, .listed-school .attribute-icon, .listed-school .school-attributes li {
        display: block;
    }
    .listed-school h2 a {
        color: #333;
    }
    a:hover, a:focus {
        color: #7B6230;
        text-decoration: none;
        outline: 0;
    }
    .listed-school .school-logo-wrap img {
        width: 70px;
    }
    .school-logo-wrap img {
        margin: auto;
        display: block;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }

    .listed-school h3 {
        max-width: 300px;
    }
    .listed-school h2, .listed-school h3 {
        margin: 0 0 14px;
        white-space: normal;
        overflow: initial;
    }
    .listed-school h3 {
        font-size: 20px;
        color: #888;
    }
    .school-action a.btn {
        padding: 0 24px;
        color: #ae956c;
        text-transform: uppercase;
        margin-right: 5px;
    }
    .listed-school {
        border: solid 1px #CCC;
        padding: 20px 5px 20px 115px;
        text-align: left;
    }
    .listed-school {
        position: relative;
        margin: 20px 0;
        padding: 0 0 20px 90px;
        text-align: left;
        border-bottom: 1px solid #ccc;
    }
    .listed-school .school-attributes {
        float: right;
        text-align: center;
        margin: -30px 0 0 10px;
    }
    .listed-school .school-attributes span[class] {
        display: block;
        font-size: 20px;
    }

    .listed-school .school-attributes li:first-child {
        font-weight: normal;
    }
    .listed-school .school-attributes li:first-child {
        display: block;
        font-weight: bold;
        font-size: 13px;
    }
    .listed-school .school-attributes li {
        float: left;
        padding: 10px 15px;
        color: #999;
    }
    .listed-school .school-logo-wrap {
        left: 20px;
        top: 25px;
    }
    .listed-school .school-logo-wrap {
        position: absolute;
        left: 10px;
    }
    .school-logo-wrap {
        margin: 0 auto 10px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        overflow: hidden;
    }
    .listed-school {
        position: relative;
        margin: 20px 0;
        padding: 0 0 20px 90px;
        text-align: left;
        border-bottom: 1px solid #ccc;
        background-color: white;
    }
    .listed-school h3 [data-icon] {
        display: inline-block;
        float: left;
        margin-right: 5px;
        top: 0;
    }
    @media screen and (max-width: 320px){
        .listed-school .school-attributes li {
            display: none;
        }
    }

</style>