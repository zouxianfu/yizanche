<template>
  <div>
    <div class="box">
      <span class="iconfont uni" @click="toQcwz">&#xe619;</span>
      <span class="tit">{{titles}}</span>
    </div>
  </div>
</template>
<script>
export default {
  naem: "DeatileHeader",
  props: {
    titles: String
  },
  methods:{
      toQcwz(){
          this.$router.push("/Qczx")
      }
  }
};
</script>
<style scope>
.box {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background-color: #fff;
}
.uni {
  float: left;
  margin-left: 10px;
}
.tit {
  float: left;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>