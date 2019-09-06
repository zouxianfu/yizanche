<template>
	<!--这是公共页面底部的父组件-->
	<div class="Xfoots">
		<div class="Xfoot" @click="toUrl(index)" v-for="(item,index) in foost" v-bind:key="index">
			<span  :class="[item.con1,item.con2]"></span>
			<br />
			{{item.name}}
		</div>
	</div>
</template>

<script>
	export default{
		name:"Xfoots",
		data(){
			return{
				foost:[
					{name:'汽车商城',bol:true,toUrl:"/Qcsc",con1:"mui-icon",con2:"mui-icon-home"},
					{name:'汽车资讯',bol:false,toUrl:"/Qczx",con1:"mui-icon",con2:"mui-icon-chatboxes"},
					{name:'购物车',bol:false,toUrl:"/Gwc",con1:"mui-icon",con2:"mui-icon-trash"},
					{name:'个人中心',bol:false,toUrl:"/Grzx",con1:"mui-icon",con2:"mui-icon-person"}
				]
			}
		},
		methods:{
			toUrl:function(index){
				for(var i = 0;i<this.foost.length;i++){
					this.foost[i].bol = false;
				}
				this.foost[index].bol = true;
				this.$router.push(this.foost[index].toUrl);
			}
		}
	}
</script>

<style scoped>
	.Xfoots{
	    height: 50px;
	    width: 100%;
	    position: fixed;
	    display: flex;
	    bottom: 0;
	    background-color: #fefefe;
	}
	.Xfoot{
		width: 25%;
		text-align: center;
	}
</style>