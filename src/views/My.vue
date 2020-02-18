<template>
    <div>
        <div id="top" @click="My">
            <img src="@/assets/img/back.png" width="30rem" height="30rem">
        </div>
        <div id="center">
            <img src="@/assets/img/header.png" width="90rem">
            <p class="name">周长月</p>
        </div>
        <div id="con">
            <div class="con_one">
                <p class="shou">我的收藏</p>
                <img src="@/assets/img/you.png">
            </div>
            <div class="con_two">
                <p class="shou">消息中心</p>
                <img src="@/assets/img/you.png">
            </div>
        </div>
        <div id="footerBox">
            <div>
                <img src="@/assets/img/ye.png" width="40rem" style="padding-left:.7rem">
                <p>夜间模式</p>
            </div>
            <div>
                <img src="@/assets/img/shezhi.png" width="40rem">
                <p style="padding-left:.2rem">设置</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        My() {
            this.$router.replace('/');
        }
    },
}
</script>

<style>
#top{
    padding-top: 1rem;
    padding-left: .5rem
}
#center{
    padding-top: 1.5rem;
    text-align: center;
}
#center .name{
    font-size: 1.3rem;
    padding-bottom: 4.5rem;
}
#con .con_one{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    border-bottom: .08rem solid #ccc;
    height: 3.5rem;
}
#con .con_one:hover,#con .con_two:hover{
    background: rgb(245, 244, 244)
}
#con .con_two{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    height: 3.5rem;
}
#con .shou{
    font-size: 1.2rem;
    padding-left: 1rem
}
#con .con_one img,#con .con_two img{
    padding-right: 1rem
}
#footerBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin: auto;
    margin-top:20rem
}
</style>