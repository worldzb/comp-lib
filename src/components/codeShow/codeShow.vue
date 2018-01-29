<template>
	<div class="codeShow">
		<div>
			
		</div>
		<div>

<pre class="language-javascript prismjsVes" contenteditable="true">
<code class="language-javascript" v-html='code'>
</code>
</pre> 
			<textarea class="inputCode" v-model='inpuCode' @input="runChang()" @keydown="enterKeyDown()" spellcheck="false" rows="1">
			</textarea>
		</div>
</div>

</template>


<script type="text/javascript">
	import Prism from 'prismjs';
	
	export default{
		data(){
			return{
				code:"<html></html>",
				inpuCode:"",
				codeEditerHeight:'',
				linesNumber:'',
			}
		},
		created(){
			
		},
		mounted(){
			
		},
		methods:{
			runChang(){
				//console.log(this.inpuCode);
				this.code = Prism.highlight(this.inpuCode,Prism.languages.javascript);
			},
			enterKeyDown:function(event){
				let ev=event || window.event;
				//|| ev.keyCode==32 || ev.keyCode==8
				if(ev.keyCode==13){
					this.code = Prism.highlight(this.inpuCode,Prism.languages.javascript);
					//alert(domFunc.setCss('.codeShow pre','height'));
				}else if(ev.keyCode==8){

				}
			}
		}
	}

</script>


<style type="text/css">
	.inputCode{
		position: absolute;
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		margin-left: -91%;
		resize: none;
		width: 95%;
		font-size:13px;
		overflow-y:hidden;
		outline: none;
		background-color:rgba(225,225,225,0);
		line-height: 1.5;
		color: #fff;
		caret-color:#fff;
		padding: 1em;
		border-radius: 0.3em;
		opacity: 0.2;

	}
	.codeShow{
		padding: 0;margin: 0;
		display: inline-block;
		width: 100%;
		background: red;
		clear : none | left|right| both;
	}
	.prismjsVes{
		float: left;
		width: 95%;
	}

</style>