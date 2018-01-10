<template>
	<div id="imgBox" :class="boxClassName" @mouseover="toolShow()" @mouseout="toolHide()">
		<div class="imgTool" v-if="isToolShow">
			<ul>
				<li>
					<span id="dropdownMenu1" class="dropdown-toggle" data-toggle="dropdown">
						<i class="fa fa-cog"></i>
					</span>
					<div class="dropdown-menu dropdown-list" role="menu">
						<div class="dropdown-item" @click="changeImgClass('img-rounded')">
							<i class="fa fa-square-o"></i>&nbsp;&nbsp;矩形
						</div>
						<div class="dropdown-item" @click="changeImgClass('img-circle')">
							<i class="fa fa-circle-o"></i>&nbsp;&nbsp;圆形
						</div>
						<div class="dropdown-item" @click="changeImgClass('img-thumbnail')">
							<i class="fa fa-square"></i>&nbsp;&nbsp;缩略图
						</div>
					</div>
				</li>

				<li>
					<span id="dropdownMenu2" class="dropdown-toggle" data-toggle="dropdown">
						<i class="fa fa-photo"></i>
					</span>
					<div class="dropdown-menu dropdown-list" role="menu">
						<div class="dropdown-item" @click="changBoxClass('imgBox-small')">
							<i class="fa fa-lg fa-photo"></i>&nbsp;&nbsp;小
						</div>
						<div class="dropdown-item" @click="changBoxClass('imgBox-mid')">
							<i class="fa fa-2x fa-photo"></i>&nbsp;&nbsp;中
						</div>
						<div class="dropdown-item" @click="changBoxClass('imgBox-big')">
							<i class="fa fa-3x fa-photo"></i>&nbsp;&nbsp;大
						</div>
					</div>
				</li>
				<!-- <li><i class="fa fa-th-list"></i></li> -->
			</ul>
		</div>
		<img :class="imgClassName" :src="url">
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				imgClassName:'img-rounded',
				boxClassName:"imgBox-small",
				isToolShow:false,
				url:'',
			}
		},
		created(){
			this.url=this.src;
		},
		props:{
			src:{
				type:String,
				default:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3c4e049cc1cec3fd8b3ea073eeb3b302/6159252dd42a2834b1c7cf5b59b5c9ea15cebf79.jpg"
			}
		},
		methods:{
			focus(){
				alert('fd');
			},
			toolShow(){
				//alert('fd');
				//console.log(isToolShow);
				this.isToolShow=true;
			},
			toolHide(){
				this.isToolShow=false;
			},
			changeImgClass($className){
				this.imgClassName=$className;
			},
			changBoxClass($className){
				this.boxClassName=$className;
			}
		}
	}

</script>


<style type="text/css">
	#imgBox img{
		width: 100%;height: 100%
	}
	#imgBox:hover{
		border: 2px dashed red;
	}
	.imgBox-small{
		width: 200px;height: 200px;background: #eee;overflow: hidden;
		padding: 0;margin: 0;
	}
	.imgBox-mid{
		width: 400px;height: 400px;background: #eee;overflow: hidden;
		padding: 0;margin: 0;
	}
	.imgBox-big{
		width: 600px;height: 600px;background: #eee;overflow: hidden;
		padding: 0;margin: 0;
	}

	


	.imgTool{
		position: absolute;
		background: #666;
		opacity: 0.95;
		z-index: 100
	}
	.imgTool ul{
		border: 1px solid #ccc;
		list-style-type:none;
		padding: 0;margin:0;
	}
	.imgTool ul li{
		color:#eee;
		float: left;
	}
	.imgTool ul li span{
		padding: 5px
	}
	.imgTool ul li:hover{
		background: #eee;color:#333;
	}


	.dropdown-list{
		width: 40px;padding: 0
	}
	.dropdown-item{
		padding: 5px;
		text-align: left;
		cursor: pointer;
	}
	.dropdown-item:hover{
		color:#fff;
		background-color: #333
	}
</style>