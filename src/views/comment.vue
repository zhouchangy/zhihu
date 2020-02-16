<template>
	<div id="commment">
		<div class="back">
			<img src="@/assets/img/back.png" @click="go" />
			<h1>13条评论</h1>
		</div>
        <!-- /back -->
		<div class="long">
			<h2>15条长评</h2>
			<div class="long_Words" v-for="long in long" :key="long.title">
				<div class="left">
					<img :src="long.avatar" />
				</div>
				<div class="right">
					<h3>{{ long.author }}</h3>
					<p>{{long.content}}</p>
					<div class="line">
						<span>02-03 11:43</span>
						<img src="@/assets/img/zan.png" />
						<img src="@/assets/img/msg.png" class="com" />
					</div>
				</div>
			</div>
		</div>
        <!--/long-->
		<div class="short">
			<h2>14条短评</h2>
			<div class="short_com" v-for="short in short" :key="short.title">
				<div class="short_Left">
					<img :src="short.avatar" />
				</div>
				<div class="short_Right">
					<h3>{{ short.author }}</h3>
					<p>{{ short.content }}</p>
					<div class="line">
						<span>02-03 11:43</span>
						<img src="@/assets/img/zan.png" />
						<img src="@/assets/img/msg.png" class="com" />
					</div>
				</div>
			</div>
		</div>
        <!--/short-->
	</div>
</template>

<style>
#commment .back{
    padding:0.5rem;
    overflow:auto;
    border-bottom:0.1rem solid #F1F1F1;
    margin-top: 1rem
}
.back img{
    float:left;
    width:7%;
}
.back h1{
    width:92%;
    text-align:center;
    font-size:1.2rem;
}
.long{
    padding:0.5rem;
}
.long h2{
    font-size:1.1rem;
}
.long_Words{
    padding:1rem 0.5rem 0.5rem 0;
    border-bottom:0.1rem solid #F1F1F1;
    display:flex;
 }
.left{
    padding:0 0.5rem 0 0;
    margin-bottom:5rem;
}
.left img{
    width:2.5rem;
}
.right h3{
    margin-bottom:0.4rem;
}
.right p{
    line-height:1.5rem;
}
.line{
    overflow:auto;
    margin-top:1rem;
}
.line span{
    float:left;
    margin-right:7rem;
}
.line img{
    width:1.3rem;
    float:left;
}
.line img.com{
    margin-left:3rem;
}
.line span{
    color:#666;
}
.short{
    padding:0.5rem;
}
.short h2{
    font-size:1.1rem;
}
.short_com{
    padding:1rem 0.5rem 0.5rem 0;
    border-bottom:0.1rem solid #F1F1F1;
    display:flex;
}
.short_Left{
    padding:0 0.5rem 0rem 0;
}
.short_Left img{
    width:2.5rem;
}
.short_Right h3{
    margin-bottom:0.4rem;
    }
.short_Right p{
    line-height:1.5rem;
}

</style>

<script>
	export default{
		components:{
			
        },
        methods: {
        go() {
            this.$router.replace('/Xiangqing');
        } 
        },
		data(){
			return{
				long:[],
				short:[]
			}
		},
		//接口
		mounted:function(){
			this.axios.get("story/4232852/long-comments").then(res =>{
			this.long=res.data.comments;	
			});
			this.axios.get("story/4232852/short-comments").then(res =>{
			this.short=res.data.comments;	
			});
		}
	}
</script>

<style>
</style>
