<script>
    import {HTTP} from '../services/http-common'
    import AppHeader from './AppHeader.vue'
    import Foota from './Foota.vue'

    export default {
        name: 'Search',
        components: {

            AppHeader,
            Foota,


        },
        data() {
            return {
                universities: [],
                universitiess: [],
                universitiesss: [],

            }
        },

        created() {
            let tempParams = "";

            if (this.$route.query.p) {
                tempParams = "p=" + this.$route.query.p;
            }
            if (this.$route.query.q) {
                if(tempParams)
                    tempParams += "&";
                tempParams += "q=" + this.$route.query.q;
            }

            if(tempParams){
                HTTP.get(`http://localhost:8090/search?${tempParams}`
                ).then(response => {
                    this.universitiesss = response.data;
                    console.log(response)
                })
            }



        },
        methods: {
            universityPage :function () {
                this.$router.push(`/countries/${this.universitiesss[0].id}/cities/${this.universitiesss[0].id}/universities`)     },
        }
    };

</script>

<template>
    <section>
        <app-header></app-header>
        <div v-for="university3 in universitiesss">
            <div class="container">
                <div class="listed-school animated">
                    <div class="school-logo-wrap">
                        <img src="https://d1qy7wmw5fq66c.cloudfront.net/media/18633/uduquébecàchicoutimi.jpg/listing">
                    </div>
                    <br>
                    <h2><a v-on:click="universityPage">{{university3.name}}</a></h2>
                    <h3><i data-icon="O"></i> {{university3.programmes[0].name}} , {{university3.programmes[0].duration}} Ay</h3>
                    <h3><i class="fa fa-map-marker" ></i> {{university3.programmes[0].countryName}}    </h3>
                    <div class="school-desc">
                        <ul class="list-unstyled school-attributes">
                            <li><i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                <span class="attribute-title">Öğrenci Sayısı</span>
                                <span class="attribute-value">{{university3.studentNumber}}</span>
                            </li>
                            <li>
                                <i class="fa fa-trophy" aria-hidden="true"></i>
                                <span class="attribute-title">Üniversite Sıralaması</span>
                                <span class="attribute-value">{{university3.ranking}}</span>
                            </li>
                            <li>
                                <i class="fa fa-money" aria-hidden="true"></i>
                                <span class="attribute-title">Fiyat</span>
                                <span class="attribute-value">{{university3.programmes[0].tuition}} TL</span>
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
    </section>
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