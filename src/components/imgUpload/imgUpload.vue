<template>
	<div id="imgUpload">
		<input id="ipt-file" class="ipt-file" type="file" name="" @change="fileChange()">
		<img id="imgshow" src="">
		<canvas id="canvas-img" width='400' height="300" style="background: #ccc"></canvas>
	</div>
</template>

<script>
	import DrawImage from './DrawImage.js';
	export default{
		name:'imgUpload',
		data(){
			return{
				filePath:"",
			}
		},
		created:function(){

		},
		methods:{
			fileChange:function(){
				//this.fileShow()
				let url=$('#ipt-file').val();
				let iu=new DrawImage('ipt-file','canvas-img');
				iu.loadImg();
			},
			fileShow(){
				let fileReader=new FileReader();
				let ipt=document.getElementById('ipt-file').files[0];
				let imgshow=document.getElementById('imgshow');
				fileReader.readAsDataURL(ipt);
				fileReader.onloadend=()=>{
					imgshow.src=fileReader.result;
				}
			}
		}
	}

</script>

<style type="text/css">
	.ipt-file{
		width: 100px;
		height: 100px;
	}
</style>