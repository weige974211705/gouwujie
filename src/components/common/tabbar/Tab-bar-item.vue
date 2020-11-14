



<template>
    <div class="tab-bar-item" @click="itemClick">
<!--        图片只能显示一个-->
        <slot v-if="!isActive" name="slot-img"></slot>
        <slot v-else name="slot-active-img"></slot>
        <div :style="activeStyle">
<!--            这个slot会被整个替换掉-->
            <slot name="slot-text" ></slot>
        </div>



    </div>
</template>

<script>
    export default {
        name: "tab-bar-item",
        data(){
            return{
                // isActive:false
            }
        },
        computed:{
            isActive(){
                return this.$route.path == this.path
            },
            activeStyle(){
                return this.isActive? {color: this.activeColor}:{}
            }
        },
        //当首页点击时，把path传过来到这里
        props:{
            path:String,
            activeColor:{
                type:String,
                default:"deepskyblue"
            },
        },
        //然后把path 的值按照对应的不同，渲染给itemClick
        //使得this.path即为对应跳转位置
        methods:{
            //当点击时，产生对应的跳转
            itemClick(){
               // console.log('KKKKKKK')

                this.$router.push(this.path)


                // console.log(this.$route.path)
            }
        }
    }
</script>

<style scoped>

    .tab-bar-item{
        /*移动端底部导航固定像素，一般都是49px*/
        height: 49px;
        text-align: center;
    }

    /*因为颜色传递需要来自父级，所以不能在着写入*/
    /*.active{
        color:deepskyblue;
    }*/
</style>
