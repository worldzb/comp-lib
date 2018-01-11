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
	import demo from '../codeShow/codeShow.vue';
	let oDemo=Vue.extend(demo);

	export default{
		methods:{
			add:()=>{
				new oDemo({
					propsData:{
						
					}
				}).$mount('#test')
			}
		}

	}
</script>