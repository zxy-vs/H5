<template>
  <div>
    <section class="header_search">
      <img src="http://tanzhouweb.com/tb/image/img/tbLogo.png" alt="" />
      <input type="text" placeholder="寻找宝贝店铺" />
    </section>
    <section class="header_banner" v-if="list.length">
      <img v-for="(item, index) of list" :key="index" :src="item" alt="" />
    </section>
    <section class="header_list" v-if="list1.length">
      <div
        class="header_list_content"
        v-for="(item, index) of list1"
        :key="index"
      >
        <img :src="item.pic" alt="" />
        <p>{{ item.con }}</p>
      </div>
    </section>
    <section class="header_new">
      <img src="http://tanzhouweb.com/tb/image/img/hdLineLogo.png" alt="" />
      <div class="new_content" >
        <!-- v-for="item,index of list2" :key="index" -->
        <div class="new_content_content">
          <p>1<span>2</span></p>
          <p>1<span>2</span></p>
        </div>
        <img src="" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
export default {
  name: "Home1",
  setup() {
    const list = ref([]);
    const list1 = ref([]);
    const list2 = ref([]);
    onMounted(async () => {
      await axios
        .get("http://tanzhouweb.com/mg/mgData.php?title=banner")
        .then((res) => {
          list.value = res.data;
        });
      await axios
        .get("http://tanzhouweb.com/mg/mgData.php?title=navIcon")
        .then((res) => {
          list1.value = res.data;
        });
         await axios
        .get("http://tanzhouweb.com/taobao/tbData.php?title=headlines&jsonp=headlines")
        .then((res) => {
          list2.value = res.data;
          console.log(res.data);
        });
       
    });
    return {
      list,
      list1,
      list2,
    };
  },
};
</script>

<style lang="less" scoped>
.header_search {
  width: 750px;
  height: 68px;
  display: flex;
  padding: 0 14px;
  line-height: 68px;
  justify-content: space-between;
  align-items: center;
  background-color: #ff852a;
  img {
    width: 54px;
    height: 40px;
  }
  input {
    width: 649px;
    height: 48px;
    padding: 5px;
    background-color: #ff4e22;
    border: none;
    text-align: center;
    color: #fff;
  }
}
.header_banner {
  width: 100%;
  height: 242px;
  overflow: hidden;
  img {
    width: 750px;
    height: 242px;
    float: left;
  }
}
.header_list {
  width: 750px;
  height: 324px;

  .header_list_content {
    float: left;
    width: 150px;
    height: 162px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    img {
      width: 90px;
      height: 90px;
      margin: auto;
    }
    p {
      font-size: 24px;
    }
  }
}
.header_new {
  width: 100vw;
  height: 120px;
  display: flex;
  img {
    width: 80px;
    height: 80px;
    margin: 20px;
  }
  .new_content {
    width: 630px;
    height: 120px;
    display: flex;
    justify-content: space-between;
    img {
      width: 170px;
      height: 120px;
      margin: 0;
    }
    .new_content_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        p{
            font-size: 24px;
        }
    }
  }
}
</style>