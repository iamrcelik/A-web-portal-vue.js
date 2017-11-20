<script>
    import AppHeader from './AppHeader.vue'
    import Loader from './Loader.vue'
    import Countries from './Countries.vue'
    import LandingPage from './LandingPage.vue'
    import Banner from './Banner.vue'
    import Foota from './Foota.vue'
    import Spotlight from './Spotlight.vue'
    import Programs from './Programs.vue'
    import {HTTPAuth, HTTP} from '../services/http-common'
    import {loggedIn} from "../services/settings";

    export default {
        name: 'Home',
        data(){
            return {
                isLoading:true,
                db:[],
                loggedIn:false
            }
        },
        components: {
            AppHeader,
            Loader,
            LandingPage,
            Countries,
            Banner,
            Foota,
            Spotlight,
            Programs,


        },
        created(){
            this.loggedIn = window.loggedIn;
            HTTP.get("http://localhost:8090/countries")
                .then(response => {this.db = response.data, this.isLoading = false;
                })

        },
    }

</script>


<template>
    <section>
        <landing-page></landing-page>

        <Loader v-if="isLoading"></Loader>
        <spotlight></spotlight>
        <section id="ülke">
            <section class="mbr-section content4 cid-qBlfyNkGo0" id="content4-l" data-rv-view="133">

                            <h2 class="align-center pb-3 mbr-fonts-style display-2" STYLE="text-align: center !important;"><strong>ÜLKELER</strong></h2>
                            <h3 class="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">
                                S<span style="font-style: italic;">hape </span><span style="font-style: italic;">your </span><em>future web project </em><span style="font-style: italic;">with </span><span style="font-style: italic;">sharp </span><span style="font-style: italic;">design </span><span style="font-style: italic;">and </span><span style="font-style: italic;">refine </span><span style="font-style: italic;">coded </span><span style="font-style: italic;">functions.</span></h3>
                <Countries v-for="country in db"
                           key="Countries.id"
                           :country="country"></Countries>
            </section>
            <div class="clearfix"></div>
        </section>

        <section id="programlar" style="background-color: gainsboro; height: 400px">
        <div class="highlight-clean">
            <div class="container">
                <div class="intro">
                    <h2 class="text-center" style="padding-top: 50px"><strong>UZMANLIK ALANLARI</strong></h2>
                    <p class="text-center" style="padding-bottom: 50px">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
                </div>
            </div>
        </div>
        <programs></programs>
        </section>
        <banner></banner>
        <foota></foota>
    </section>
</template>
<style>
    .okullar-header{
        padding: 100px 0;
    }
</style>