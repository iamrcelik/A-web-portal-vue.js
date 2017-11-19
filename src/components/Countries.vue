<script>
    export default {
        name: 'Countries',
        props: {
            country: {
                type: Object,
                required: true,

            }
        },
        computed: {
            CountriesDetailsPath() {
               return `countries/${this.country.id}`;
            }
        }
    }
</script>
<template>
    <section class="ülkeler">
        <router-link :to="CountriesDetailsPath" class="fh5co-card-item image-popup">
            <div class="container">
                <div class="media-container-row">
                    <div class="card p-3 col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-img">
                                <img :src=country.image alt="Image" class="img-responsive">
                            </div>
                            <div class="card-box">
                                <h4 class="card-title mbr-fonts-style display-7" style="text-align: center; margin-top: 15px">
                                    {{country.name}}
                                </h4>
                                <p class="mbr-text mbr-fonts-style display-7">
                                    {{country.summary}}
                                </p>
                            </div>
                            <div class="mbr-section-btn text-center">
                                <a href="https://mobirise.com" class="btn btn-primary display-4">
                                    İNCELE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </section>
</template>

<style>
    .card{
        float: left !important;
    }
    .media-container-row {
        display: -ms-flexbox;
        display: inherit !important;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: start;
        -ms-flex-align: start;
        align-items: start; }
    .media-container-row .media-size-item {
        width: 800px; }

    /*! Text-aligns */
    .align-left {
        text-align: left; }

    .align-center {
        text-align: center; }

    .align-right {
        text-align: right; }

    @media (max-width: 767px) {
        .align-left, .align-center, .align-right, .mbr-section-btn, .mbr-section-title {
            text-align: center; } }
    /*! Font-weight  */
    .mbr-light {
        font-weight: 300; }

    .mbr-regular {
        font-weight: 400; }

    .mbr-semibold {
        font-weight: 500; }

    .mbr-bold {
        font-weight: 700; }


</style>