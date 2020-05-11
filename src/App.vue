<template>
  <router-view id="responsiveWrapper"></router-view>
</template>

<script>
/* eslint-disable*/
// import Home from './components/home/home'
export default {
  name: 'App',

  data () {
    return {
        screenHeight: window.innerHeight,
        minScreenHeight: 450,
    }
  },

  mounted () {
      // 使用异步函数nextTick更新DOM
      this.$nextTick(() => {
          console.log("DOM更新了")
      })

      // 计算屏幕高度，并把之赋给#home
      window.screenHeight = window.innerHeight
      this.screenHeight = window.screenHeight
      var responsiveWrapper = document.getElementById('responsiveWrapper')
      responsiveWrapper.style.height = window.screenHeight > this.minScreenHeight ? this.screenHeight + 'px' : this.minScreenHeight + 'px'
      console.log(responsiveWrapper.style.height < this.minScreenHeight)

      const that = this
      // 相应屏幕变化
      window.onresize = () => {
          return ( () => {
              window.screenHeight = window.innerHeight
              that.screenHeight = window.screenHeight
          })()
      }
  },

  watch:{
      // 监听屏幕宽度变化
      screenHeight(val){
          // 更新DOM
          var responsiveWrapper = document.getElementById('responsiveWrapper')
          responsiveWrapper.style.height = window.screenHeight > this.minScreenHeight ? this.screenHeight + 'px' : this.minScreenHeight + 'px'
          console.log(responsiveWrapper.style.height < this.minScreenHeight)
      }
  }
}
</script>

<style>
.responsiveWrapper{
  position: relative;
  width: 100%;
}
</style>
