<template>
	<div id="imgUpload">
		<input id="ipt-file" class="ipt-file" type="file" name="" @change="fileChange()">
		<button @click="test()">测试</button>
		<button @click="test2()">测试2</button>
		<canvas id="canvas-img" width='400' height="300" style="background: #ccc"></canvas>
	</div>
</template>

<script>
	import DrawImg from './DrawImage.js';
	export default{
		name:'imgUpload',
		data(){
			return{
				drawImg:'',
				filePath:"",
				testString:'lalal',
			}
		},
		created:function(){
			
		},
		mounted(){
		},
		methods:{
			fileChange:function(){
				if(this.drawImg===''){
					this.drawImg=new DrawImg('ipt-file','canvas-img');
				}
				this.drawImg.drawCenter();
			},
			fileShow(){
				let fileReader=new FileReader();
				let ipt=document.getElementById('ipt-file').files[0];
				let imgshow=document.getElementById('imgshow');
				fileReader.readAsDataURL(ipt);
				fileReader.onloadend=()=>{
					imgshow.src=fileReader.result;
				}
			},
			test(){
				this.drawImg.test()
				//this.drawImg.test();
			},
			test2(){
				this.drawImg.drawCenter();
				console.log(this.drawImg.drawCenter());
			}
		}
	}

</script>

<style type="text/css">
	.ipt-file{
	}
</style>