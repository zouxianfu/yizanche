<template>
	<!--汽车资讯主页面-->
	<div>
		
		<qczxseach :aclass="aclass"></qczxseach>
	</div>
</template>

<script>
import axios from 'axios'
	import Qczxseach from "@/components/QczxZjs/Qczxseach"
	export default{
		name:"qczx",
		data(){
			return {
				aclass:[]
			}
		},
		components:{
			qczxseach:Qczxseach
		},
		mounted(){
			this.getAclassInfo()
		},
		methods:{
			getAclassInfo(){
				const adclassUrl=" index/index/indexaclss"
				axios.get(adclassUrl)
				.then((res)=>{
					this.aclass=res.data.data.aclass
				})
			}
		}
	}
</script>

<style scoped>
</style>