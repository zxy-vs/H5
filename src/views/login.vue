<template>
    <div>
        <canvas ref="cs" width = 400 height = 400></canvas>
    </div>
</template>

<script>
import { nextTick, onMounted, ref } from '@vue/runtime-core'
    export default {
        name:"login",
        setup(){
            const cs = ref(null)
            onMounted(()=>{
               const cxt =  cs.value.getContext('2d');


            })
            return{
                cs
            }
        },
        mounted() {
            this.$refs
        },
    }
</script>

<style lang="less" scoped>
div{
    width: 400px;
    height: 400px;
    border:  1px solid skyblue;
    margin: auto;
}
</style>