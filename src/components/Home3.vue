<template>
    <div class="footer">
        <div class="foot_img" v-for="item of 3" :key="item"> 
            <img src="http://tanzhouweb.com/taobao/image/lifeInstitute/big1.jpg" alt="">
            <p>就爱宽松感</p>
        </div>
        <div class="foot_list" v-for="item of 6" :key="item">
            <p class="big">囤货小当家</p>
            <p class="small">素食辣条</p>
            <img src="http://tanzhouweb.com/taobao/image/lifeInstitute/1.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.footer{
    width: 100vw;
    height: 100vw;
    .foot_img{
        float: left;
        width: 250px;
        height: 250px;
        position: relative;
        img{
            width: 250px;
            height: 250px;
        }
        p{
            width: 250px;
            height: 54px;
            position: absolute;
            bottom: 0;
            left: 0;
            padding:0 10px;
            line-height: 54px;
            font-size: 30px;
            background-color: rgba(0, 0, 0, 0.233);
            color: #fff;
        }
    }
    .foot_list{
        float: left;
        width: 250px;
        height: 250px;
        padding: 20px;
        .big{
            font-size: 28px;
            color:#9e6dff;
        }
        .small{
            font-size: 26px;
            color: #999;
        }
        img{
            margin-top: 20px;
            width: 132px;
            height: 132px;
        }
    }
}
</style>