<template>
<div id="home">
    <div class="banner">
        <div class="header">
            <div class="logoWrapper">
                <div class="logo"></div>
            </div>
            <div class="navigatorWrapper">
                <ul class="navigator">
                    <li>开放平台</li>
                    <li>企业订餐</li>
                    <li>手机端</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="lawMsg">
        <div class="topMsg">
            <div class="left"></div>
            <div class="center"></div>
            <div class="right"></div>
        </div>
        <div class="bottomMsg"></div>
    </div>
</div>
</template>

<script>
/* eslint-disable*/
export default {
  name: "Home",
  data () {
    return {
        screenHeight: window.innerHeight,
        minScreenHeight: 450,
        imgBannar: '',
    }
  },

  created () {
      
  },

  mounted () {
      // 使用异步函数nextTick更新DOM
      this.$nextTick(() => {
          console.log("DOM更新了")
      })

      // 计算屏幕高度，并把之赋给#home
      window.screenHeight = window.innerHeight
      this.screenHeight = window.screenHeight
      var home = document.getElementById('home')
    //   home.style.height = this.screenHeight + 'px'
      home.style.height = window.screenHeight > this.minScreenHeight ? this.screenHeight + 'px' : this.minScreenHeight + 'px'
      console.log(home.style.height < this.minScreenHeight)

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
          var home = document.getElementById('home')
        //   home.style.height = this.screenHeight + 'px'
          home.style.height = window.screenHeight > this.minScreenHeight ? this.screenHeight + 'px' : this.minScreenHeight + 'px'
          console.log(home.style.height < this.minScreenHeight)
      }
  }

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global.scss';

#home{
    position: relative;
    width: 100%;
    .banner{
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 30%;
        @include bgCenter("../../assets/imgs/homeBg.jpeg");
        .header{
            width: 100%;
            height: px2rem(100);
            display: flex;
            justify-content: space-between;
            .logoWrapper{
                position: relative;
                width: px2rem(350);
                height: 100%;
                .logo{
                    width: 60%;
                    height: 60%;
                    position: absolute;
                    left: 40%;
                    top: 20%;
                    @include bgCenter("../../assets/imgs/logo.svg");
                }
            }
            .navigatorWrapper{
                width: px2rem(500);
                height: 100%;
                position: relative;
                .navigator{
                    position: absolute;
                    left: 10%;
                    bottom: 30%;
                    @include ulNav();
                    li{
                        @include liNav();                   
                    }
                }
            }
        }
    }
    .lawMsg{
        position: absolute;
        bottom: 0;
        top: 70%;
        background: red;
        width: 100%;
        .topMsg{
            position: absolute;
            top: 0;
            bottom: 20%;
            background: yellow;
            width: 100%;
            display: flex;
            justify-content: space-around;
            div{
                background: green;
                width: px2rem(300);
                height: 100%;
            }
        }
    }
}

</style>
