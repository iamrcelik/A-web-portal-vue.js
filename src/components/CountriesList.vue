<script>
    export default {
        name: 'CountriesList',
        props: {
            country: {
                type: Object,
                required: true,
            }
        },
        computed: {
            CountriesDetails() {
                return `countries/${this.country.id}`;
            }
        }
    }
</script>

<template>
    <router-link :to="CountriesDetails">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{{country.name}}</h4>
                <p class="card-text">{{country.bilgi}}</p>
            </div>
        </div>
    </router-link>
</template>