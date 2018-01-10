<template>
  <div id="app">
  	<h3>图片上传</h3>
    <imgUpload></imgUpload>
    <br><br><br>
    <br>
    <h3>图片显示</h3>
    <test></test>
  </div>
</template>

<script type="text/javascript">
	import test from './components/test/test.vue'
	export default{
		components:{
			test:test
		}
	}
</script>