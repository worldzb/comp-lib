<template>
	<div>
		<input type="button" name="" value="添加" @click="add()">
		<br>
		<div id="test">

		</div>
	</div>
</template>


<script type="text/javascript">
	import Vue from 'vue';
	import demo from '../imgBox/imgBox.vue';
	let oDemo=Vue.extend(demo);

	export default{
		methods:{
			add:()=>{
				new oDemo({
					propsData:{
						src:"http://pic29.photophoto.cn/20131204/0034034499213463_b.jpg"
					}
				}).$mount('#test')
			}
		}

	}
</script>