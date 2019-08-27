<template>
	<!-- 汽车商品 列表信息 -->
	<div class="box">
		汽车列表信息
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:"qclbxx",
		data(){
			return{}
		},
		mounted(){
			axios.get("index/Mall/search",{
				params:{
					in_color:0,
					outside_color:0,
					fuel:0,
					displacement:0,
					mark:0,
					shop_price:0,
					fine_name:0,
					in_paragraph:0,
					cartype_value:0,
					carvarsion:0,
					p_id:1,
					m_id:0,
					priceOrder:1,
					opage:1
				}
			})
			.then((rel) =>{
				console.log(rel)
			})
			.catch((err)=>{
				
			})
		}
		
	}
</script>

<style scoped>
</style>