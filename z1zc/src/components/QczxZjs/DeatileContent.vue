<template>
  <div>
    <div class="box">
      <div class="bag">
        <div class="zhubox">
          <img :src="banner.back_url" alt />
          <ul class="author">
            <li>
              <span>作者 :</span>
              <span>{{banner.author}}</span>
            </li>
            <li>
              <span>{{banner.add_time | totime}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "DeatileContent",
  data() {
    return {
      type: 0,
      banner: {}
    };
  },
  methods: {
    getInfodeatile() {
      let id = this.$route.query.Art;
      const url = "index/Article/details";
      console.log(id);
      axios
        .post(
          url,
          qs.stringify({
            article_id: id
          })
        )
        .then(res => {
          console.log(res.data);
          this.$emit("change", res.data.article.title);
          // this.img=res.data.article.titl
          this.banner = res.data.article;
        });
    }
  },
  mounted() {
    this.getInfodeatile();
  }
};
</script>
<style scoped>
.box{
    position: relative;
}
.zhubox {
  position: absolute;
  left: 0;
  right: 0;
  /* height: 100%; */
  z-index: 88;
}
.zhubox img {
  width: 100%;
  height: 100%;
  font-size: 0px;
}
.author {
  display: flex;
  color: #fff;
  opacity: 0.6;
  position: absolute;
  right: 20px;
  top: 10px;
}
.author > li {
  margin-left: 10px;
}
.bag {
  /* width: 100%;
    height: 100%; */
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999;
  background-color: rgba(000, 000, 000, 0.6);
}
</style>