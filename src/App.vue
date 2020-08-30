<template>
  <div id="app">
    <!-- 这个是显示路由组件 显示跳转过来的路由组件 -->
    <router-view/>
    <!-- 在路由组件meta中配置meta属性，并配置showFooter来控制是否显示. -->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    mounted () {
      // this.$store.dispatch('getAddress')
      this.getAddress()
      this.getUserInfo()
    },
    methods: {
      ...mapActions(['getAddress','getShops','getUserInfo'])
    },
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 整个应用组件的样式
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
