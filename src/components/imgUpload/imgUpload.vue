<template>
	<div id="imgUpload">
		<input id="ipt-file" class="ipt-file" type="file" name="" @change="fileChange()" style="outline:none">
		<canvas id="canvas-img" width='500' height="400" v-model="image" v-show="isFileSelect"></canvas>
		<div id="preview" v-show="isFileSelect" >
			<img :src="image" width="100" height="100" style="background:#eee;">
			<img :src="image" width="100" height="100" style="background:#eee;border-radius: 50px">
			<img :src="image" width="50" height="50" style="background:#eee;border-radius: 50px">
		</div>
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
				isDregStart:false,
				isFileSelect:false,
				image:'',
				testString:'lalal',
			}
		},
		created:function(){
			
		},
		mounted(){
		},
		updated(){

		},
		methods:{
			fileChange:function(){
				if(this.drawImg===''){
					this.drawImg=new DrawImg('ipt-file','canvas-img');
				}
				this.drawImg.drawCenter();
				this.image=this.drawImg.rtImageData();
				this.isFileSelect=true;
			},
		}
	}

</script>

<style type="text/css">
	#imgUpload{
		border:1px solid #eee;width:502px;
	}
	#canvas-img{
		border-top: 2px solid #ccc;
		background: #ccc;cursor: move;
	}
	input[type=file]{
		padding: 0;
		margin: 0;
		background: #eee;
		width: 100%;
		border:0;
		outline: none;
		box-shadow: 0
	}
	#preview{
		margin-top: 5px;
	}
	#preview img{
		margin-left: 10px;
		box-shadow: 0 0 10px #999;
	}
</style>