<template>
	
	<div>
		<div class="mui-switch">
		  <div class="mui-switch-handle"></div>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{}
		},
		mounted(){
			Mui('.mui-switch')['switch']()
		}
	}
</script>

<style>
</style>