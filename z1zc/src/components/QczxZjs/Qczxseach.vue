  <template>
    <div>
      <div class="box" :class="{flexed:seachBar}" ref="xx">
        <div>
          品牌
          <i class="iconfont">&#xe655;</i>
        </div>
        <div @click="showstate">
          {{msg}}
          <i class="iconfont" v-show="stateShow">&#xe601;</i>
          <i class="iconfont" v-show="!stateShow">&#xe655;</i>
        </div>
        <ul class="state" v-show="stateShow">
        <li
          v-for="(item,index) in aclass"
          :key="index"
          :class="{fontColor: stateColor==index}"
          @click="state(index,item.classname);seach(item.aclassid,$event)"
        >{{item.classname}}</li>
      </ul>
      </div>
      
    </div>
  </template>
  <script>
  export default {
    name: "Qczxseach",
    props: {
      aclass: Array
    },
    data() {
      return {
        stateShow: false,
        stateColor: 0,
        msg: "所有文章",
        seachBar:false //显示
      };
    },

    methods: {
      showstate() {
        this.stateShow = !this.stateShow;
      },
      state(ind, msg) {
        this.stateColor = ind;
        this.stateShow = false;
        this.msg = msg;
      },
      seach(a, e) {
        this.$router.push({
          path: "/Qczx",
          query: {
            c_id: a
          }
        });
        this.$emit("updted", a);
      },
      showBar(){
        let scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
        var offsetTop=1
        if(scrollTop>0){
          this.seachBar=scrollTop>(offsetTop-45)
          // console.log(this.seachBar)
        }else{
          this.seachBar=false
        }
      }
    },
    mounted(){
      window.addEventListener('scroll',this.showBar)
    },
    destroyed(){
      window.addEventListener('scroll',this.showBar)
    }
  };
  </script>
  <style scoped>
  .box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
  }
  .box > div {
    width: 50%;
    height: 38px;
    line-height: 38px;
    /* border-bottom: 1px solid #f0f0f0 */
  }
  .state {
    /* margin-top: 10px; */
    position: absolute;
    left: 0;
    top: 37px;;
    z-index: 999;
    width: 100%;
    background-color: #fff;
  }
  .state > li {
    border-bottom: 1px solid #f0f0f0;
    height: 40px;
    line-height: 40px;
  }
  .fontColor {
    color: #e5000c;
  }
  .flexed {
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff
  }
  </style>
