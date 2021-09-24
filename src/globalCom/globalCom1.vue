<template>
    <div class="list_content">
        <p class="list_h1">进口优先<img class="list_logo" src="http://tanzhouweb.com/taobao/image/AllGlobal/icon.png"/></p>
        <p class="list_text">正品保障15天售后无忧</p>
        <img class="list_show_left" src="http://tanzhouweb.com/taobao/image/AllGlobal/1.jpg" alt="">
        <img class="list_show_right" src="http://tanzhouweb.com/taobao/image/AllGlobal/2.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name:"globalCom1"
    }
</script>

<style lang="less" scoped>
.list_content{
    width: 50vw;
    height: 242px;
    padding: 20px;
    border: 1px solid #eee;
    position: relative;
    .list_h1{
        font-size: 30px;
        line-height: 40px;
        color:purple;
        .list_logo{
            height: 30px;
            position: absolute;
            top: 27px;
            left: 150px;
        }
    }
    .list_text{
        font-size: 24px;
    }
    .list_show_left{
        height: 126px;
        position: absolute;
        bottom: 20px;
        left: 20px;
    } 
    .list_show_right{
        height: 126px;
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
}
</style>