<template>
	<div id="imgBox" :class="className" @blur="focus()">
		<img src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3c4e049cc1cec3fd8b3ea073eeb3b302/6159252dd42a2834b1c7cf5b59b5c9ea15cebf79.jpg">

	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				className:'test',
			}
		},
		methods:{
			focus:()=>{
				alert('fd');
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
</style>