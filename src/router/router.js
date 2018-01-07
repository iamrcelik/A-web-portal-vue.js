import Home from '../components/Home.vue'
import CountriesDetails from '../components/CountiesDetails.vue'
import AllCountries from '../components/AllCountries.vue'
import Programs from '../components/Programs.vue'
import Cities from '../components/Cities.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Profile from '../components/Profile.vue'
import UniversityDetails from '../components/UniversityDetails.vue'
import Search from '../components/Search.vue'
import RegisterAuth from '../components/RegisterAuth.vue'
import ProgramDetails from '../components/ProgramDetails.vue'
import Suggestion from '../components/Suggestion.vue'
import LostPassword from '../components/LostPassword.vue'
import ResetPassword from '../components/ResetPassword.vue'
import ProgramsDetails from '../components/ProgramsDetails.vue'
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
            path: '/countries/:id/cities/:id/universities',
            component: UniversityDetails,
        },
        {
            path: '/search',
            component : Search,
        },
        {
            path: '/activation',
            component: RegisterAuth,
        },
        {
            path: '/countries/:id/cities/:id/universities/:id/programmes',
            component: ProgramDetails,
        },
        {
            path: '/suggestion',
            component: Suggestion,
        },
        {
            path: '/lostpassword',
            component: LostPassword,
        },
        {
            path: '/reset',
            component: ResetPassword,
        },
        {
            path: '/universities/:id/:programId',
            component: ProgramsDetails,
        }


    ],
    mode: 'history',

}
