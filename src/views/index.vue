<template>
    <div>
        <div id="header">
            <div class="left">
                <p class="num">{{day}}</p>
                <p class="one">{{month}}月</p>
            </div>
            <div>
                <img src="@/assets/img/shu.png" class="img">
            </div>
            <div class="center">
                <span>{{sayHello}}</span>
            </div>
            <div class="right" @click="To">
                <img src="@/assets/img/header.png" width="46rem" height="46rem">
            </div>
        </div>
        <!-- /header -->
         <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
         <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="item in swiperList" :key="item.id" @click="go">
                    <a>
                        <img :src="item.image" width="100%" height="400px" />
                        <p style="font-size:1.6rem">
                            {{item.title}}<br />
                            <span style="font-size:1rem">{{item.hint}}</span>
                        </p>
                    </a>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- /banner -->
        <div id="con">
            <a v-for="item in conList" :key="item.id" @click="go">
                <p>
                    {{item.title}}<br />
                    <span>{{item.hint}}</span>
                </p>
                <img :src="item.images" width="100rem" height="100rem">
            </a>
        </div>
        <!-- /con -->
        </van-pull-refresh>      
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Toast } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

export default{
    components: {

    },

    data(){
        return {
            day:'',
            month:'',
            sayHello:'',
            swiperList: [],
            conList: [],
            count: 0,
            isLoading: false,
        }
    },
    methods: {
        go() {
            this.$router.replace('/Xiangqing');
        },
        To() {
            this.$router.replace('/My');
        },
        onRefresh() {
        setTimeout(() => {
            Toast('刷新成功');
            this.isLoading = false;
            this.count++;
        }, 1000);
        }
    },
    mounted(){
    var _this = this;
    this.axios.get("news/latest").then(res => {
      for (let i = 0; i < res.data.top_stories.length; i++) {
        if (res.data.top_stories[i].image.indexOf("pic3") != -1) {
          res.data.top_stories[i].image = res.data.top_stories[i].image.replace(
            /pic3/,
            "pic1"
          );
        }
      }
      for (let i = 0; i < res.data.stories.length; i++) {
        if (res.data.stories[i].images[0].indexOf("pic3") != -1) {
          res.data.stories[i].images[0] = res.data.stories[i].images[0].replace(
            /pic3/,
            "pic1"
          );
        }
      }
      this.swiperList = res.data.top_stories;
      this.conList=res.data.stories;
    });
       this.day = getNowDate().getDate();
       this.month = getNowDate().getMonth()+1;
       let sayHello = getNowDate().getHours();
       switch(sayHello){
            case 0:;
            case 1:;
            case 2:;
            case 3:;
            case 4:;
            case 5:;
            case 6:;
            case 7:;
            case 8 : this.sayHello = '早上好' ; break;
            case 9:;
            case 10:;
            case 11:;
            case 12:;
            case 13 : this.sayHello = '中午好' ; break;
            case 14:;
            case 15:;
            case 16:;
            case 17:;
            case 18:;
            case 19 : this.sayHello = '下午好' ; break;
            case 20:;
            case 21:;
            case 22:;
            case 23 : this.sayHao = '晚上好' ; break;
       }
    },
    
}
var getNowDate = function(){
    return new Date();
}
</script>

<style>
.banner a{color: #fff;}
.banner p{width:95%;position:absolute;bottom:24px;color: #fff;text-align: left;padding-left:1rem;}
#header{
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    width: 98%;
}
#header .img{
    height: 3.6rem;
    width: 1rem;
    padding-top: .5rem
}
.left{
    padding-left: .7rem
}
.left .num{
    font-size: 1.8rem;
    height: 1.8rem;
    padding-left: 1rem
}
.left .one{
    padding-top: 1rem;
    padding-left: 1.3rem
}
.center{
    padding-right: 7rem;
    padding-top: .5rem
}
.center span{
    font-size: 1.8rem
}
.right{
    padding-top: .8rem
}
#con a{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:96%;
    padding-bottom: .5rem;
    color: #000!important;
    padding-left: 1rem!important
}
#con p{
    font-size: 1.1rem;
    line-height: 1.5rem
}
#con p span{
    font-size: 1rem;
}
#con a img{
    padding-left: .5rem;
    padding-right: 1rem;
    padding-top: 1rem
}
</style>