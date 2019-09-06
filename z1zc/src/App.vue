<template>
  <div id="app">
    <router-view />

    
    <Xfoots></Xfoots>
  </div>
</template>


<script>
import Xfoots from "@/components/Xfoots";
export default {
  name: "App",
  components: {
    Xfoots
  }
};
</script>
<style>
@import "./font/iconfont.css";
.iconfont {
  font-size: 20px;
  vertical-align: middle;
}
ul {
  list-style: none;
}
p,h3{
  padding: 0px;
  margin: 0px;
}
* {
  padding: 0px;
  margin: 0px;
}
html{
  background-color: #fff
}
#app {
  height: 100%;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  color: #333
  }
  </style>