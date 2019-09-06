<template>
  <div>
    <div class="wzbox">
      <dl class="wzitem" v-for="(item,index) in article" @click="toDeatile(item.article_id)" :key="index">
        <dt>
          <img :src="item.file_url | fnName" alt />
        </dt>
        <dd>
          <h3 class="tit">{{item.title}}</h3>
          <p class="tet">{{toContent(item.content)}}</p>
          <div class="wzzz">
            <div>
              <span>{{item.author}}</span>
            </div>
            <div>
              <span>{{item.add_time | totime}}</span>
            </div>
          </div>
        </dd>
      </dl>
      <div class="jzgd" v-if="toloadmodel">
        <img v-if="toload" :src="require('@/assets/loading/loading.gif')" alt />
        <span v-else>查看更多</span>
      </div>
      <div v-if="toText">暂无更多内容</div>
    </div>
  </div>
</template>
<script>
import axiso from "axios";
export default {
  name: "Qczxlist",
  props: {
    c_id: Number,
    article: Array
  },
  data() {
    return {
      // article: "",
      opageNum: 0, //当前页码
      toload: false, //显示loading图
      toloadmodel: false, //是否显示更多
      toText: false
    };
  },
  watch: {
    c_id() {
      this.opageNum = 0;
      this.getInfo();
    },
    $route(to, from) {
      console.log(from);
      if (from.name == "Qczx") {
        this.$emit("clear", "清空");
      }
    }
  },
  methods: {
    getInfo() {
      const url = "index/Article/index";
      const id = this.$route.query;
      // console.log(id.c_id);
      console.log(this.article)
      this.opageNum = this.opageNum + 1; //第一次获取的页码
      if (Object.keys(id).length > 0) {
        axiso
          .get(url, {
            params: {
              //品牌id
              // l_id:0,
              //分类id
              c_id: id.c_id,
              //车系id
              // m_id:0,
              //排序id
              // sort:0,
              //当前页
              opage: this.opageNum
            }
          })
          .then(res => {
            console.log(res);
            if (res.data.error == 0) {
              this.$emit("setData", res.data.data);
              // this.article = res.data.data.article;

              console.log(this.article);
              if (this.opageNum < res.data.data.pageCount) {
                this.toload = true;
                this.toloadmodel = true;
                this.toText = false;
              } else {
                this.toload = false;
                this.toloadmodel = false;
                this.toText = true;
              }
            } else if (res.data.error == 1) {
              this.toText = true;
            }
          });
      } else {
        // console.log(this.opageNum)
        axiso
          .get(url, {
            params: {
              opage: this.opageNum
            }
          })
          .then(res => {
            this.$emit("setData", res.data.data);

            if (this.opageNum < res.data.data.pageCount) {
              this.toload = true;
              this.toloadmodel = true;
              this.toText = false;
            } else {
              this.toload = false;
              this.toloadmodel = false;
              this.toText = true;
            }
          });
      }
      // this.c_id=id.c_id
    },
    //处理文章样式
    toContent(con) {
      let on = con.replace(/&nbsp;/gi, "");
      return on.replace(/<\/?.+?>/gi, "");
    },
    //上拉加载更多
    toloadgdu() {
      let that = this;
      let scrTop =
        document.documentElement.scrollTop || document.body.scrollTop; //滚轴距离顶端的距离
      let pmHeight = document.documentElement.clientHeight; //屏幕高度
      let contentHeight = document.documentElement.scrollHeight;
      if (that.toloadmodel) {
        if (scrTop + pmHeight + 10 >= contentHeight) {
          that.getInfo();
        } else {
          return;
        }
      }
    },
  //跳转到详情页
    toDeatile(a){
    this.$router.push({
      path:"/Wzdeatile",
      query:{
        Art:a
      }
    })
  },
  },
  
  //过滤器
  filters: {
    fnName: function(value) {
      // console.log(value)
      // return value
      return value + "?x-oss-process=style/jietu";
    }
  },
  mounted() {
    this.getInfo();
    window.addEventListener("scroll", this.toloadgdu);
  },
  destroyed() {
    window.addEventListener("scroll", this.toloadgdu);
  },

};
</script>
<style scoped>
.wzbox {
  width: 100%;
  padding-bottom: 50px;
  overflow: hidden;
}
dl {
  width: 100%;
  height: 112px;
  /* overflow: hidden; */
  border-bottom: 1px solid #f0f0f0;
  padding: 20px 24px;
}
dt {
  width: 30%;
  float: left;
}
dd {
  width: 65%;
  float: left;
  margin-left: 18px;
}
.tit {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.tet {
  width: 100%;
  font-size: 12px;
  text-align: left;
  height: 43px;
  line-height: 15px;
  padding-top: 13px;
  color: #999;
  overflow: hidden;
  word-break: break-all;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; */
}
img {
  width: 100%;
}
.wzzz {
  display: flex;
  justify-content: space-around;
  /* margin-top: 10px; */
  font-size: 12px;
}
.wzzz > div {
  width: 100%;
  text-align: left;
  color: #666;
}
.jzgd > img {
  width: 48px;
  height: 20px;
  line-height: 20px;
  font-size: 20px;
}

</style>