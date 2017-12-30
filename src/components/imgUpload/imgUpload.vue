<template>
	<div id="imgUpload">
		<form id="fileUpload" accept-charset="utf-8" enctype="multipart/form-data">
			<input id="ipt-file" class="ipt-file" type="file" name="" @change="fileChange()" style="outline:none">
		</form>
		<canvas id="canvas-img" width='501' height="400" v-model="image" v-show="isFileSelect">
			fsda
		</canvas>
		<div id="preview" v-show="isFileSelect">
			<img :src="image" width="100" height="100" style="background:#eee;">
			<img :src="image" width="100" height="100" style="background:#eee;border-radius: 50px">
			<img :src="image" width="50" height="50" style="background:#eee;">
			<img :src="image" width="50" height="50" style="background:#eee;border-radius: 50px">
		</div>
		<div id="submitBox" v-show="isFileSelect">
			<button class="btn btn-success btn-block btn-sm"  
			title="图片将被裁切压缩" @click="uploadImg()">上传</button>
			<button class="btn btn-default btn-block btn-sm" 
			title="图片未被裁切压缩" @click="uploadImgPri()">上传原图</button>
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
				var that=this;
				if(this.drawImg===''){
					this.drawImg=new DrawImg('ipt-file','canvas-img');
				}
				this.drawImg.drawCenter();
				this.drawImg.eventUpdate=()=>{
					that.image=that.drawImg.rtImageData();//获取canvas数据
				}
				//this.image=this.drawImg.rtImageData();
				this.isFileSelect=true;
			},
			uploadImg:function(){
				//图片上传
				var that=this;
				this.$http.post(this.imgUrl,new FormData($('#fileUpload')[0]),{
					emulateJSON: true,
				}).then((res)=>{
					console.log(res);
				});
			},
			uploadImgPri:function(){
				//原始图片上传
			}
		}
	}

</script>

<style type="text/css">
	#imgUpload{
		border:1px solid #eee;width:502px;
	}
	#canvas-img{
		border-top: 2px solid #bbb;
		border-bottom: 2px solid #bbb;
		background: #ccc;
		cursor:move;
	}
	input[type=file]{
		padding: 0;
		margin: 0;
		background: #eee;
		width: 100%;
		border:0;
		outline: none;
		box-shadow: 0 0 1px #999;
	}
	#preview{
		width: 80%;
		background: #eee;
		box-shadow: 0 0 1px #999;
		margin:0;
		margin-top: -5px;
		padding: 5px;
		float: left;
	}
	#preview img{
		margin-left: 5px;
		box-shadow: 0 0 10px #999;
	}
	#submitBox{
		width: 20%;
		height: 110px;
		background: #eee;
		box-shadow: 0 0 1px #999;
		margin:0;
		margin-top: -5px;
		padding: 5px;
		float: left;
	}
</style>