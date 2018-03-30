//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'

import '@/assets/styles/base.css'
import 'mint-ui/lib/style.css'
import './assets/myFont/iconfont.css'
//import './assets/sass/reset.sass'//报错暂时不用sass
Vue.config.debug = true;//开启错误提示
Vue.use(MintUI)

Vue.prototype.staticSrc = 'static'

new Vue({
        router,
        el: '#appIndex',
        render: h => h(App)
})
