<template>
	<div id="codeShow">
		<input type="button" name="" value="house" @click="changeColor()">
		<pre><code class="language-css">
			{{code}}
		</code></pre>
	</div>
</template>


<script type="text/javascript">
	import Prism from 'prismjs';
	export default{
		data(){
			return{
				code:"<html></html>",
			}
		},
		created(){
			
		},
		methods:{
			changeColor(){
				var cd="<html><h3>fdsf</h3></html>";
				var html = Prism.highlight(cd, Prism.languages.javascript);
				this.code=html;
			},
		}
	}

</script>