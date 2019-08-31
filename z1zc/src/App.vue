<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App"
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
* {
  padding: 0px;
  margin: 0px;
}
#app {
  height: 100%;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  color: #333
}
</style>
