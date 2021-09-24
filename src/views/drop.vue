<template>
  <div>
    <div class="left" ref="left" draggable="true"></div>
    <ul class="right" ref="right">
      <li v-for="item,index of 6" :key="index" draggable="true" :index="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
export default {
  name: "drop",
  setup() {
    const left = ref(null);
    const right = ref(null);
    onMounted(() => {
      let lis = right.value.children;
      for(let item of lis){
        item.ondragstart = (e)=>{
          e.dataTransfer.setData('index',item.getAttribute('index'))
        }
      }
      left.value.ondragover = (e)=>{
        e.preventDefault();
      }
      left.value.ondrop =(e)=>{
        const li = e.dataTransfer.getData('index');
        for(let i = 0 ;i<lis.length;i++){
          if(lis[i].getAttribute('index')==li){
            right.value.removeChild(lis[i])
          }
        }
      }
    });
    // onMounted(()=>{
    //     let x ,y;
    //     right.value.ondragstart =function(e){
    //         x=e.clientX-this.offsetLeft;
    //         y=e.clientY-this.offsetTop;
    //         console.log(123);
    //     }
    //     right.value.ondrag =function(){
    //        let r = Math.random()*256|0;
    //        let g = Math.random()*256|0;
    //        let b = Math.random()*256|0;
    //         this.style.backgroundColor = `rgb(${r},${g},${b})`
    //         left.value.style.cssText= 'border:6px solid skyblue';
    //     }
    //     right.value.ondragend = function(e){
    //         this.style.left = e.clientX-x+'px';
    //         this.style.top = e.clientY-y+'px';
    //         left.value.style.cssText= 'border:none';

    //     }
    //     left.value.ondragenter = function(e){
    //         // e.preventDefault()
    //         console.log('jinlai');
    //     }
    //     left.value.ondragover = function(e){
    //         e.preventDefault();
    //         this.innerHTML = 'put'
    //     }
    //     left.value.ondragleave = function(){
    //         this.innerHTML = ''
    //     }
    //      left.value.ondrop = function(e){
    //         //  console.log(e.dataTransfer);

    //         // console.log(1111);
    //     }
    // })
    return {
      left,
      right,
    };
  },
};
</script>

<style lang="less" scoped>
div {
  width: 20vw;
  height: 40vw;
}
.left {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ff6700;
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f43e00;
}
li {
  width: 20vw;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid skyblue;
}
</style>