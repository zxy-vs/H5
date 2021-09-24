<template>
  <div class="tb">
    <header>
      <home-1 />
    </header>
    <main>
      <home-2 />
      <section class="list_big" v-for="item of 3" :key="item">
        <global-com-1 class="list_show" v-for="item of 4" :key="item" />
      </section>
      <section class="list_small">
        <global-com-1 class="list_show" v-for="item of 10" :key="item" />
      </section>
    </main>
    <footer>
      <home-3/>
    </footer>
  </div>
</template>

<script>
import Home1 from "../components/Home1.vue";
import Home2 from "../components/Home2.vue";
import Home3 from '../components/Home3.vue';
export default {
  components: { Home1, Home2, Home3 },
};
</script>

<style lang="less" scoped>
.tb {
  width: 100%;
  height: 100%;
}
header {
  border-bottom: 20px solid #eee;
}
main {
  border-bottom: 40px solid #eee;
  .list_big {
    height: 524px;
    .list_show {
      float: left;
      height: 242px;
    }
    border-bottom: 40px solid #eee;
  }
  .list_small {
    height: 1210px;
    .list_show {
      float: left;
      height: 242px;
    }
  }
}
footer{
  height: 750px;
}
</style>