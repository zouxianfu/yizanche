<template>
  <div>
    <Deatile-header :titles="tit"></Deatile-header>
    <Deatile-content @change="title" ></Deatile-content>
  </div>
</template>
<script>
import DeatileHeader from '@/components/QczxZjs/DeatileHeader'
import DeatileContent from '@/components/QczxZjs/DeatileContent'
export default {
  name: "Wzdeatile",
  data() {
    return {
      tit:''
    };
  },
  components:{
    DeatileHeader,
    DeatileContent
  },
  methods: {
   title(msg){
     this.tit=msg
   }
  },
  mounted(){
      // this.getInfodeatile()
  }
};
</script>
<style scoped>
</style>>

