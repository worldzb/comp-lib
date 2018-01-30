<template>
	<div id="imgUpload">
		<form id="fileUpload" accept-charset="utf-8" enctype="multipart/form-data" method="post">
			<input id="ipt-file" class="ipt-file" type="file" name="imgFile" @change="fileChange()" style="outline:none">
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
			title="图片将被裁切压缩" @click="uploadImg()">
				<span v-if="!isUploading">上传</span> 
				<span v-else><i class="fa fa-spinner fa-spin"></i>&nbsp;上传中</span> 
			</button>
			<button class="btn btn-default btn-block btn-sm" 
			title="图片未被裁切压缩" @click="uploadImgPri()">
				<span v-if="!isUploading2">上传原图</span> 
				<span v-else><i class="fa fa-spinner fa-spin"></i>&nbsp;上传中</span> 
			</button>
		</div>
	</div>
</template>


<script>
	import DrawImg from './DrawImage.js';
	import Convert from './Convert.js';
	export default{
		name:'imgUpload',
		data(){
			return{
				drawImg:'',//画图对象
				filePath:"",//文件路径
				isFileSelect:false,//文件是否选择打开
				isUploading:false,//文件上传中 状态
				isUploading2:false,//源文件上传中状态
				uploadUrl:'',//图片上传地址
				image:'',//图片预览src
				testString:'lalal',//测试字符串
				resultURL:'',
			}
		},
		props:{
			URL:{
				type:String,
				default:"http://dev.cc:80/imgUpload",
			},
		},
		created:function(){
			this.uploadUrl=this.URL;
		},
		mounted(){
		},
		updated(){

		},
		methods:{
			fileChange:function(){
				var that=this;
				if(this.drawImg===''){
					this.drawImg=new DrawImg({
						ipt:'ipt-file',
						context:'canvas-img',
						multiple:0.04,
					});
					this.drawImg.drawFill();
					//事件委托
					this.drawImg.eventUpdate=()=>{
						that.image=that.drawImg.rtImageData();//获取canvas数据
					}
					//this.image=this.drawImg.rtImageData();
				}
				
				this.isFileSelect=true;
			},
			//裁切压缩图上传
			uploadImg:function(){
				//图片上传
				this.isUploading=true;
				let that=this;
				let dataBlob=Convert.dataURL2formData(this.image);
				let formData=new FormData();
				formData.append('imgFile',dataBlob);
				this.$http.post(this.uploadUrl,formData,{
					emulateJSON: true,
				}).then((res)=>{
					that.isUploading=false;
					that.$emit('uploadend',res);
					if(res){
						that.drawImg='';
						that.isFileSelect=false;
					}else{
						console.error('上传出错');
					}
				});
			},
			//原图上传
			uploadImgPri:function(){
				//原始图片上传
				this.isUploading2=true;
				var that=this;
				this.$http.post(this.uploadUrl,new FormData($('#fileUpload')[0]),{
					emulateJSON: true,
				}).then((res)=>{
					this.isUploading2=false;
					//var red=eval(res.body);
					that.$emit('uploadend',res);
					if(res){
						that.drawImg='';
						that.isFileSelect=false;
					}else{
						console.error('上传出错');
					}
				});
			},
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