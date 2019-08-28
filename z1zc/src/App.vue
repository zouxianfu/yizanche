<template>
  <div id="app">
    <router-view/>
    <Xfoots></Xfoots>
  </div>
</template>

<script>
	import Xfoots from '@/components/Xfoots'
export default {
  name: 'App',
  	components:{
  		Xfoots
  	}
}
</script>

<style>
*{
	margin: 0px;
	padding: 0px;
}
</style>
