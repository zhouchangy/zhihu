<template>
<div>
    <div class="img">
        <img :src="main.image" width="100%" height="380px"> 
        <div class="title">{{main.title}}</div>
        <div class="source">{{main.image_source}}</div>
    </div>
    <div v-html="main.body" class="text"></div>
    <div class="footer">
        <div class="back"><img src="@/assets/img/back.png" width="30rem" height="30rem" @click="hrefone"></div>
        <div class="msg">
            <img src="@/assets/img/msg.png" width="30rem" height="30rem" @click="hreftwo">
            <span>{{comments}}</span>
        </div>
        <div class="zan">
            <img src="@/assets/img/zan.png" width="30rem" height="30rem" @click="zan">
            {{like_count}}
        </div>
        <div class="collect" @click="collect">
            <img src="@/assets/img/shouc.png" width="30rem" height="30rem" v-show="downIcon">
            <img src="@/assets/img/yisc.png" width="30rem" height="30rem" v-show="!downIcon">
        </div>
        <div class="share"><img src="@/assets/img/zhuanf.png" width="30rem" height="30rem" @click="share"></div>
    </div>
    <!-- /footer -->
    <div class="poper" >
        <div :class="{poperBg:ifpoperCupHiden}" @click="shareClose"></div>
        <div class="poperArea" :class="{poperCupHiden:ifpoperCupHiden}">
            <div><img src="@/assets/img/weixin.png">微信好友</div>
            <div><img src="@/assets/img/firend.png"> 朋友圈 </div>
            <div><img src="@/assets/img/weibo.png">新浪微博</div>
            <div><img src="@/assets/img/QQ.png">QQ</div>
            <div> <img src="@/assets/img/copy.png">复制链接</div>
            <div><img src="@/assets/img/liu.png"> 浏览器打开</div>
            <div><img src="@/assets/img/more.png">更多</div>
        </div>   
    </div>
    <!-- /poper -->
</div>
</template>

<script>
import jq from '../js/jquery-1.js';
export default {
name: 'productdetailspage',
methods: {
        hrefone() {
            this.$router.replace('/');
        },
        hreftwo() {
            this.$router.replace('/comment');
        },
        //点赞
        zan(){
            if(this.flg){
                this.like_count++;
                this.flg=false;
            }else{
                this.like_count--;
                this.flg=true;
            }
        },
        //收藏
        collect(){
            this.downIcon=!this.downIcon
        },
        goComments(){
            this.$router.push(`/comments?comments=${this.comments}&longComments=${this.long_comments}&shortComments=${this.short_comments}&id=${this.id}`)
        },
        share(){
            this.ifpoperCupHiden = true;
        },
        shareClose(){
            this.ifpoperCupHiden = false;
        }
    },

mounted(){
        this.id = this.$route.params.id
        this.axios.get(`news/3892357`).then(res => {
            this.main = res.data
        })
         this.axios.get(`story-extra/${this.id}`).then(res => {
            this.comments = res.data.comments;
            this.popularity = res.data.popularity;
            this.long_comments = res.data.long_comments;
            this.short_comments = res.data.short_comments;
        })
    },

data() {
    return {
    id:'',
    main:'',
    comments:'',
    popularity:'',
    like_count:10,
    downIcon:true,
    imgsrc:'',
    long_comments:'',
    short_comments:'',
    ifpoperCupHiden:false,
    }
  }
}
</script>

<style>
.main{
    width: 96%;
    box-sizing: border-box;
    padding-left: 1.2rem;
    margin-top: 1rem
}
.img{
    position: relative;
}
.question-title{
     width: 90%;
     padding-left: 1.3rem;
}
.answer{
    width: 90%;
    padding-left: 1.3rem;
    margin-top: 1rem
}
.answer p{
    margin-top: .8rem;
    font-size: 1.1rem
}
.img .title{
    position: absolute;
    left: 1rem;
    bottom: 4rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
}
.img .source{
    position: absolute;
    bottom: 1rem;
    right:1rem;
    color: #fff;
    font-size: .8rem
}
.view-more a{
    color: #fff
}
.view-more{
    margin-bottom: 4rem;
    background-color: #1D82FE;
    border: 0;
    outline: 0;
    height: 3rem;
    border-radius: 1.5rem;
    width: 23rem;
    line-height: 3rem;
    font-size: 1.2rem;
    text-align: center;
    margin-left: 1.3rem;
    margin-top: 1rem
}
.text img{
    width: 100%
}
.text .avatar{
    width: 2.5rem
}
.footer{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #eee;
    padding: .5rem 0;
}
.footer div{
    flex: 1;
    display: flex;
    justify-content: center
}
.footer div.back{
    border-right: .08rem solid #ccc;
}
.msg,.zan{
    position: relative;
}
.msg span,.zan span{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1rem
}
.poperBg{
    position: fixed;
    top: 0;
    left: 0;
    background-color:rgba(0,0,0,0.6);
    height: 100%;
    width: 100%;
    z-index: 1200;
}
.poperArea{
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    padding:2rem 1rem;
    box-sizing: border-box;
    background-color: #fff;
    border-top-right-radius: 1.1rem;
    border-top-left-radius: 1.1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1600;
    transition: all 0.3s ease;
    transform:translateY(100%) 
}
.poperArea div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    box-sizing: border-box;
    margin-bottom: 1.2rem;
}
.poperCupHiden{
    transform:translateY(0%) 
}
.back img{
    width: 36%
}
</style>