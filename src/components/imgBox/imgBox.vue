<template>
	<div id="imgBox" :class="className" :style="sty" @blur="focus()" @mouseover="toolShow()" @mouseout="toolHide()">
		<div class="imgTool" v-if="isToolShow">
			<ul>
				<li><i class="fa fa-th-list"></i></li>
				<li><i class="fa fa-th-list"></i></li>
				<li>{{isToolShow}}</li>
			</ul>
		</div>
		<img class="imgNode" :src="url">
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				className:'test',
				isToolShow:true,
				url:'',
				sty:{

				}
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
			focus:()=>{
				alert('fd');
			},
			toolShow:()=>{
				//alert('fd');
				console.log('true');
				this.isToolShow=true;
			},
			toolHide:()=>{
				console.log('false');
				this.isToolShow=false;
			}
		}
	}

</script>


<style type="text/css">
	#imgBox{
		width: 200px;height: 200px;background: #eee;overflow: hidden;
		padding: 0;margin: 0;
	}
	.test{
		background: red;border: 1px solid #000
	}
	#imgBox img{
		width: 100%;height: 100%
	}

	.imgNode{
		z-index: 0;
		opacity: 1
	}
	.imgTool{
		position: absolute;
		background: #666;
		opacity: 0.8;
		z-index: 100
	}
	.imgTool ul{
		border: 1px solid #ccc;
		list-style-type:none;
		padding: 0;margin:0;
	}
	.imgTool ul li{
		color:#eee;
		padding: 5px;
		float: left;
	}
	.imgTool ul li:hover{
		background: #eee;color:#333;
	}
</style>