<template>
  <div>
    <div class="box">
      <div>
        品牌
        <i class="iconfont">&#xe655;</i>
      </div>
      <div @click="showstate">
        {{msg}}
        <i class="iconfont" v-show="stateShow">&#xe601;</i>
        <i class="iconfont" v-show="!stateShow">&#xe655;</i>
      </div>
    </div>
    <ul class="state" v-show="stateShow">
        <li v-for="(item,index) in aclass" :key="index" :class="{fontColor: stateColor==index}" @click="state(index)">{{item.classname}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Qczxseach",
  props:{
          aclass:Array
      },
  data() {
    return {
      stateShow: false,
      stateColor:0,
      msg:"所有文章"
    };
  },
  methods: {
    showstate() {
      this.stateShow = !this.stateShow;
    },
    state(ind){
        this.stateColor=ind;
        this.stateShow=false;
    }
  }
};
</script>
<style scoped>
.box {
  display: flex;
  justify-content: space-between;
}
.box > div {
  width: 50%;
  height: 38px;
  line-height: 38px;
  /* border-bottom: 1px solid #f0f0f0 */

}
.state{
    /* margin-top: 10px; */
}
.state>li{
    border-bottom: 1px solid #f0f0f0;
    height: 40px;
    line-height: 40px;
}
.fontColor {
		color: #e5000c;
	}
</style>
