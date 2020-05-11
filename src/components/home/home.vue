<template>
<div>
    <div class="banner">
        <div class="header">
            <div class="logoWrapper">
                <div class="logo"></div>
            </div>
            <div class="navigatorWrapper">
                <ul class="navigator">
                    <li>
                        <router-link to="/openAPI">
                            开放平台
                        </router-link>
                    </li>
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
    }
  },

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global.scss';

.banner{
        background: red;
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

</style>
