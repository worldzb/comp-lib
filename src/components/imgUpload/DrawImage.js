/*
* @Author: yang
* @Date:   2017-12-27 15:15:24
* @Last Modified by:   yang
* @Last Modified time: 2017-12-29 11:12:55
*/

class DrawImg{
	constructor(ipt,context){
		this.ipt=ipt;//图像输入input控件id
		this.context=context;//图像显示canvas id
		this.canvas='';//获取所得的canvas对象
		this.ctx='';//canvas创建的上下文2d 画图对象（2d画板）

		this.beginX=0;
		this.beginY=0;

		this.Img=new Image();

		this.createCanvas();
		this.loadImg();
	}
	/**
	 * 创建canvas画板对象
	 */
	createCanvas(){
		this.canvas=document.getElementById(this.context);
		this.ctx=this.canvas.getContext('2d');
	}

	/**
	 * 加载图片
	 */
	loadImg(){
		let fileReader=new FileReader();
		let fileNode=document.getElementById(this.ipt);
		let file=fileNode.files[0];
		fileReader.readAsDataURL(file);
		var that=this;
		fileReader.onloadend=()=>{
			this.Img.src=fileReader.result;
		}
	}
	/**
	 * 等图片加载完成后画图
	 */
	draw(){
		this.Img.onload=()=>{
			this.ctx.drawImage(this.Img,this.beginX,this.beginY);
		}
	}
	/**
	 * 居中画图
	 */
	drawCenter(){
		this.beginX=(this.canvas.width-this.Img.width)/2;
		this.beginY=(this.canvas.height-this.Img.height)/2;
		this.draw();
	}

	test(){
		console.log(this.canvas.width);
		console.log(this.Img.width);
		console.log(this.beginX);
	}
}

export default DrawImg;







