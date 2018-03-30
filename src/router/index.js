// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import indexPage from '@/components/header.vue'
/*import footerPage from './components/footer.vue'*/

import musicPage from '@/views/music.vue'
import aboutPage from '@/views/about.vue'
import homePage from '@/views/home.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/music',
            component:musicPage
        },
        {
            path:'/about',
            component:aboutPage
        },
        {
        	path:'/',
        	component:homePage
        }
    ]
})