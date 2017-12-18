import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueToastr from '@deveodk/vue-toastr'
import VueCarousel from 'vue-carousel';
import routerOptions from './router/router'
import Tabs from 'vue-tabs-component';
import VeeValidate from 'vee-validate';
import VueNumeric from 'vue-numeric';

Vue.use(VueNumeric);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueCarousel);
Vue.use(Tabs);
Vue.use(VeeValidate);
Vue.use(VueToastr, {
    defaultPosition: 'toast-top-right',
    defaultType: 'info',
    defaultTimeout: 3000
});
const router = new VueRouter(routerOptions);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});


Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
        return { tabs: [] };
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.href == selectedTab.href);
            });
        }
    }
});


Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        };
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    },
});


