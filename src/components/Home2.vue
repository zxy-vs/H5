<template>
  <div>
    <section class="shop_class">
      <div class="class_content" v-for="item in 4" :key="item">
        <span>淘抢购</span>
        <img
          class="small"
          src="http://tanzhouweb.com/taobao/image/wantBuy/lUrl1.jpg"
          alt=""
        />
        <img
          class="big"
          src="http://tanzhouweb.com/taobao/image/wantBuy/rUrl1.jpg"
          alt=""
        />
      </div>
    </section>
    <section class="shop_Tv">
      <div class="Tv_title">淘宝直播</div>
      <div class="Tv_contnet" v-for="(item, index) of 6" :key="index">
        <img src="http://tanzhouweb.com/taobao/image/live/live1.jpg" alt="" />
        <p class="Tv-logo">LIVE</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="less" scoped>
div {
  .shop_class {
    height: 490px;
    .class_content {
      display: flex;
      position: relative;
      float: left;
      width: 375px;
      height: 225px;
      border: 1px solid #eee;
      border-collapse: collapse;
      span {
        font-size: 20px;
        color: red;
        position: absolute;
        top: 20px;
        left: 20px;
      }
      .small {
        width: 150px;
        height: 116px;
        position: absolute;
        bottom: 20px;
        left: 20px;
      }
      .big {
        width: 157px;
        height: 167px;
        position: absolute;
        bottom: 20px;
        right: 20px;
      }
    }
    border-bottom: 40px solid #eee;
  }
  .shop_Tv {
    height: 540px;
    position: relative;
    .Tv_title {
      position: absolute;
      width: 200px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 32px;
      background-color: #ff2d63;
      color: #eee;
      border-radius: 0 25px 25px 0;
      top: -25px;
      left: 0;
      z-index:1;
    }
    .Tv_contnet {
      // display: flex;
      float: left;
      width: 250px;
      height: 250px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .Tv-logo {
        position: absolute;
        width: 60px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        color: #eee;
        font-size: 12px;
        bottom: 0;
        left: 0;
      border-radius: 0 14px 0 0;
        background-color: #ff2d63;
      }
    }

    border-bottom: 40px solid #eee;
  }
}
</style>