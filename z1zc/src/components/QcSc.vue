<template>
	<!--汽车商城主页面-->
	<div>
		<h1 @click="Zhuoqu">汽车商城父组件</h1>
		
	</div>
</template>

<script>
	export default{
		name:"qcsc",
		data(){
			return {}
		},
		methods:{
			Zhuoqu(){
				alert(1)
			}
		}
	}
</script>

<style scoped>
</style>