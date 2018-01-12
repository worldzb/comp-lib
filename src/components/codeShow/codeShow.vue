<template>
	<div id="codeShow">
		<input type="button" name="" value="house" @click="changeColor()">
<pre class="language-css">
<code class="language-css" v-html='code'>
	
</code>
</pre>
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
				var cd=".hello{background:#999}";
				var html = Prism.highlight(cd, Prism.languages.css);
				this.code=html;
				console.log(html);
			},
		}
	}

</script>