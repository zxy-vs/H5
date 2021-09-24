<template>
    <div id="move" ref="move" v-move>
        <img src="https://p.ssl.qhimg.com/sdm/417_417_/t0157c33b7aa54425da.jpg" alt="">
        <img src="https://p.ssl.qhimg.com/sdm/420_207_/t0174da52fff3983aad.jpg" alt="">
        <img src="https://p.ssl.qhimg.com/sdm/365_259_/t0134afe82d727c4ce0.jpg" alt="">
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
    export default {
        name:'drag',
        setup(){
            const move = ref(null);
            onMounted(() => {
                const s = move.value.children;
                for(let i = 0 ; i<s.length;i++){
                    s[i].onmousedown = function(e){
                        e.preventDefault();
                        let x = e.clientX - this.offsetLeft;
                        let y = e.clientY - this.offsetTop;
                        this.onmousemove = (e)=>{
                            this.style.left = e.clientX -x +'px';
                            this.style.top = e.clientY-y +'px';
                        }
                        this.onmouseup =()=>{
                            this.onmousemove=null;
                        }
                    }
                }
            })
            return{
                move
            }
        },
        directives:{
            move:{
                inserted(el){
                    // console.log(el);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
#move{
    img{
    position: absolute;
}
}

</style>