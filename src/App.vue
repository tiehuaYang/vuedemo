<!--App.vue是项目入口文件。-->
<template>
    <div id="app">
        <header-tab></header-tab>
        <footer-nav></footer-nav>
        <div class="nav-box">
            <p class="nav-list">
                <router-link class="nav-item" to="/music">音乐</router-link>
                <router-link class="nav-item" to="/about">视频</router-link>
                <router-link class="nav-item" to="/">电台</router-link>
            </p>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderTab from './components/header.vue'
import FooterNav from './components/footer.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    HeaderTab,
    FooterNav
  }
}
</script>

<style lang="scss">

</style>