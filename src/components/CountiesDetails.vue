
<script>
    import Countries from './Countries.vue'
    import CountryLandingPage from './CountryLandingPage.vue'
    import Loader from './Loader.vue'
    import Foota from './Foota.vue'
    import LandingPage from './LandingPage.vue'
    import {HTTPAuth, HTTP} from '../services/http-common'
    import CountryLandingPageLoggedIn from './CountryLandingPageLoggedIn.vue'

    export default {
        name:'CountriesDetails',
        data(){
            return {
                isLoading:true,
                userdata:[],
                cities: [
                    {
                        name: 'NewYork',
                        id: 1
                    },
                    {
                        name: 'Milano',
                        id: 4
                    },
                    {
                        name: 'Londra',
                        id: 2
                    },
                    {
                        name: 'Toronto',
                        id: 3
                    },
                    {
                        name: 'Amsterdam',
                        id: 5
                    },
                    {
                        name: 'Paris',
                        id: 6
                    },
                    {
                        name: 'Barselona',
                        id: 7
                    },
                    {
                        name: 'Berlin',
                        id: 8
                    }
                ]

            }
        },
        computed: {
            CitiesDetails() {
                return `/countries/${this.userdata.id}/cities`;
            }
        },


    components: {
            LandingPage,
            Loader,
            Countries,
            Foota,
            CountryLandingPage,
            CountryLandingPageLoggedIn,
        },
        created(){
            console.log(this.$route.params)
            this.loggedIn = window.loggedIn;
                HTTP.get(`http://localhost:8090/countries/${this.$route.params.id}`)
                .then(response => {
                    this.userdata = response.data;
                    this.isLoading = false;
                    setTimeout(() => {

                        $('.cities a').each((index, element) => {
                            $(element).removeAttr('href');
                        });

                        $('.cities a').click((event) => {
                            let html = $(event.target).html().trim();
                            let city = this.cities.find((tempCity) => tempCity.name === html);
                            if(city){
                                this.$router.push('/countries/' + this.$route.params.id + '/cities/');
                            }
                        })
                    }, 100);
                })
        },
    };



</script>

<template>
    <section>
        <div v-if="loggedIn"><country-landing-page-logged-in :userdata=userdata></country-landing-page-logged-in></div>
        <div v-if="!loggedIn"><country-landing-page :userdata=userdata></country-landing-page></div>

          <Loader v-if="isLoading"></Loader>
        <div>
            <tabs>
                <tab name="Eğitim" >
                    <div v-html="userdata.education">
                    </div>
                </tab>
                <tab name="Kariyer">
                    <div v-html="userdata.career"></div>
                </tab>
                <tab name="Yaşam">
                    <div v-html="userdata.living"></div>
                </tab>
                <tab name="Hakkında">
                    <div v-html="userdata.about"></div>
                </tab>
                <tab name="Şehirler" class="cities">
                    <div v-html="userdata.cityInfo"></div>
                </tab>
                <tab name="Üniversiteler">
                    <div v-html="userdata.universitiesInfo"></div>
                </tab>
            </tabs>
        </div>
        <foota></foota>
    </section>
</template>
