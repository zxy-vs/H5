<template>
  <div class="files" ref="file"></div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
export default {
  setup() {
    const file = ref(null);
    onMounted(() => {
      file.value.ondragover = (e) => {
        e.preventDefault();
      };
      file.value.ondrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        for (let item of files) {
          if (/image/.test(item.type)) {
            show(item);
            // show1(item)
          }
        }
      };
      function show(item) {
        const blob = new Blob([item], {});
        const url = window.URL.createObjectURL(blob);
        const img = new Image();
        img.width = 100;
        img.height = 100;
        img.src = url;
        img.style.margin = "10px";
        img.onload = () => {
          let div = document.createElement("div");
          div.style.cssText =
            "position: relative;width:120px;height:120px;border:1px solid black;background-color:#fff;";
          div.style.cssFloat = "left";
          let p = document.createElement("p");
          p.style.cssText =
            "display:none;overflow: hidden;line-height: 20px;color:blackfont-size:12px;position:absolute;top:0;left:0;width:100px;height:20px;background-color:rgba(0,0,0,.4);";
          p.innerText = item.name;
          let span = document.createElement("span");
          span.innerText = "x";
          span.style.cssText =
            "display:none;text-align:center;line-height:20px;color:blackfont-size:12px;position:absolute;top:0;right:0;width:20px;height:20px;border:1px solid #eee;";
          div.appendChild(span);
          div.appendChild(p);
          div.appendChild(img);
          file.value.appendChild(div);
          for(let item of file.value.children){
              item.onmouseenter=()=>{
                item.children[0].style.display = 'block'
                item.children[1].style.display = 'block'
                item.children[0].onclick = function(){
                  file.value.removeChild(this.parentNode)
                }
              }
              item.onmouseleave=()=>{
                item.children[0].style.display = 'none'
                item.children[1].style.display = 'none'
              }
          }

        };

      }
      function show1(item) {
        let File = new FileReader();
        File.readAsDataURL(item);
        File.onload = () => {
          const img = new Image();
          img.width = 100;
          img.height = 100;
          img.src = File.result;
          img.onload = () => {
            file.value.appendChild(img);
          };
        };
      }
    });
    return {
      file,
    };
  },
};
</script>

<style lang="less" scoped>
.files {
  width: 80vw;
  height: 130px;
  line-height: 130px;
  margin: auto;
  background-color: #ff6700;
}
</style>