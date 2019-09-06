<template>
	<!--汽车资讯主页面-->
	<div>
		
		<qczxseach 
		:aclass="aclass"
		@updted="updted"		
		></qczxseach>
		<qczxlist 
		:c_id="c_id"
		@setData='setData'
		:article="article"
		@clear="clear"
		></qczxlist>
	</div>
</template>

<script>
import axios from 'axios'
	import Qczxseach from "@/components/QczxZjs/Qczxseach";
	import Qczxlist from "@/components/QczxZjs/Qczxlist";
	export default{
		name:"qczx",
		data(){
			return {
				aclass:[],
				c_id:0,
				article:[]
			}
		},
		components:{
			qczxseach:Qczxseach,
			qczxlist:Qczxlist
		},
		mounted(){
			this.getAclassInfo()
		},
		methods:{
			getAclassInfo(){
				const adclassUrl=" index/index/indexaclss"
				axios.get(adclassUrl)
				.then((res)=>{
					this.aclass=res.data.data.aclass;
					// this.c_id=res.data.data.aclassid
				})
			},
			//清空
			clear(){
				this.article=[]
			},
			updted(msg){
				this.c_id=msg
			},
			setData(res){
				for(let i=0;i<res.article.length; i++){
					this.article.push(res.article[i])
				}
			}
		}
	}
</script>

<style scoped>
</style>