<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :class="'slide'+index">
      <div class="mainContextWrapper">
        <div class="mainContext">
          <p class="title">{{slide.title}}</p>
          <p class="slogan">{{slide.slogan}}</p>
          <div class="buttonWrapper">
            <button>{{slide.buttonMsg}}</button>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
/* eslint-disable*/
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "banner",
  data () {
    return {
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          }
      },
      swiperSlides: [
        {
          title: '服务市场火热招募中',
          slogan: '优秀服务商集合地，点金共赢就等你来',
          buttonMsg: '立即免费加入',
          imgUrl: 'assets/imgs/ssi1.jpeg'
        },
        {
          title: '饿了么开放平台，连接千万商家',
          slogan: '与 3,000+ 位开发者一起，共建 O2O 行业良性生态',
          buttonMsg: '立即免费加入',
          imgUrl: 'assets/imgs/ssi2.jpeg'
        }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global.scss';

.slide0{
  @include bgCenter('../../assets/imgs/ssi1.jpeg')
}
.slide1{
  @include bgCenter('../../assets/imgs/ssi2.jpeg')
}
.swiper-slide{
  height: px2rem(500);
  position: relative;
  .mainContextWrapper{
    position: absolute;
    width: 100%;
    bottom: px2rem(100);
    .mainContext{
      position: relative;
      width: px2rem(700);
      height: px2rem(250);
      margin: auto;
      .title{
        font-size: px2rem(40);
        color: white;
        width: 600px;
        margin: 0 auto;
        text-align: center;
      }
      .slogan{
        font-size: px2rem(18);
        color: white;
        width: 600px;
        margin: px2rem(18) auto;
        text-align: center;
      }
      .buttonWrapper{
        width: 100%;
        position: absolute;
        bottom: px2rem(25);
        button{
          width: px2rem(160);
          height: px2rem(50);
          border-radius: px2rem(25);
          border: 0;
          font-size: px2rem(16);
          font-weight: bold;
          color: rgb(93, 128, 245);
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>