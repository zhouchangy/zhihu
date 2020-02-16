<template>
    <div>
        <div id="header">
            <div class="left">
                <p class="num">29</p>
                <p class="one">一月</p>
            </div>
            <div>
                <img src="@/assets/img/shu.png" class="img">
            </div>
            <div class="center">
                <span>早上好！</span>
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
    mounted:function(){
        this.axios.get("news/latest").then(res => {
            this.swiperList = res.data.top_stories;
            this.conList = res.data.stories
        })
    }
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
}
.left .one{
    padding-top: 1rem
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