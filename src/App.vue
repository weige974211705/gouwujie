<template>
  <div id="nav">
    <Tabbar></Tabbar>
    <router-view/>
  </div>

</template>

<script>
  import Tabbar from "./components/common/tabbar/Tabbar";
  export default {
    name:'App',
    components:{
      Tabbar
    }
  }
</script>

<style>
@import "assets/css/base.css";
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>
