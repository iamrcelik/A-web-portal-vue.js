import Home from '../components/Home.vue'
import CountriesDetails from '../components/CountiesDetails.vue'
import AllCountries from '../components/AllCountries.vue'
import Programs from '../components/Programs.vue'
import Cities from '../components/Cities.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Profile from '../components/Profile.vue'
import ProgramDetails from '../components/ProgramDetails.vue'
import Search from '../components/Search.vue'
import RegisterAuth from '../components/RegisterAuth.vue'
export default {
    routes:[
        {
            path: '/',
            component: Home,
        },
        {
            path: '/countries',
            component: AllCountries,
        },
        {
            path: '/countries/:id',
            component: CountriesDetails,
        },
        {
            path: '/programs/:id',
            component: Programs,
        },
        {
            path: '/countries/:id/cities',
            component: Cities,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/auth',
            component: Login,
        },
        {
            path: '/profile',
            component: Profile,
        },
        {
            path: '/countries/:id/cities/programmes',
            component: ProgramDetails,
        },
        {
            path: '/search/:term',
            component : Search,
        },
        {
            path: '/activation',
            component: RegisterAuth,
        },


    ],
    mode: 'history',

}
