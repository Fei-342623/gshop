<template>
  <header class="header">
    <!-- 插槽 占据位置 父组件也可以通过插槽将数据传递到子组件中来 -->
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <!-- 插槽 占据位置 -->
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    // 父组件传递来的数据 直接可以使用 例如 使用this
    props: {
      title: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    background-color limegreen
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
</style>
