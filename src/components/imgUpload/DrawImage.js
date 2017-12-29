/*
* @Author: yang
* @Date:   2017-12-27 15:15:24
* @Last Modified by:   worldzb
* @Last Modified time: 2017-12-30 00:35:08
*/

class DrawImg{
	constructor(ipt,context){
		this.ipt=ipt;//图像输入input控件id
		this.context=context;//图像显示canvas id
		this.canvas='';//获取所得的canvas对象
		this.ctx='';//canvas创建的上下文2d 画图对象（2d画板）

		this.beginX=0;//画图初始坐标X
		this.beginY=0;//画图初始坐标X
		this.beginPoint=[0,0];//画图初始坐标点

		this.isDregStart=false;//是否执行拖拽

		this.Img=new Image();
		this.createCanvas();
		this.addEvent();
	}
	/**
	 * 创建canvas画板对象
	 */
	createCanvas(){
		this.canvas=document.getElementById(this.context);
		console.log(this.canvas.offsetLeft);
		this.ctx=this.canvas.getContext('2d');
	}
	//绑定事件
	addEvent(){
		var obj=this;
		var x=0;
		var y=0;
		var point=[0,0];
		this.canvas.addEventListener('mousedown',(event)=>{
			obj.isDregStart=true;
			event = event || window.event; //兼容处理
			x=event.clientX-obj.beginX;
			y=event.clientY-obj.beginY;
		});
		this.canvas.addEventListener('mousemove',(event)=>{
			event = event || window.event; //兼容处理
			if(obj.isDregStart){
				console.log(x+","+y);
				obj.beginX=event.clientX-x;
				obj.beginY=event.clientY-y;
				obj.ctx.clearRect(0, 0, obj.canvas.width,obj.canvas.height);
				obj.ctx.drawImage(obj.Img,obj.beginX,obj.beginY);

			}
		});
		this.canvas.addEventListener('mouseup',()=>{
			obj.isDregStart=false;
		});
		this.canvas.addEventListener('mouseout',()=>{
			obj.isDregStart=false;
		});
		this.canvas.addEventListener('mousewheel',(event)=>{
			obj.ctx.clearRect(0, 0, obj.canvas.width,obj.canvas.height);
			if(event.wheelDelta>0){
				obj.ctx.drawImage(obj.Img,obj.beginX,obj.beginY,obj.Img.width,obj.Img.height,obj.beginX,obj.beginY,obj.Img.width*1.1,obj.Img.height*1.1);
				console.log('放大');
			}else{
				obj.ctx.drawImage(obj.Img,obj.beginX,obj.beginY,obj.Img.width,obj.Img.height,obj.beginX,obj.beginY,obj.Img.width/2,obj.Img.height/2);
				console.log('缩小');
			}
		});
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
			this.ctx.clearRect(0, 0, this.canvas.width,this.canvas.height);
			this.ctx.drawImage(this.Img,this.beginX,this.beginY);
		}
	}
	/**
	 * 居中画图
	 */
	drawCenter(){
		this.loadImg();
		this.Img.onload=()=>{
			this.beginX=(this.canvas.width-this.Img.width)/2;
			this.beginY=(this.canvas.height-this.Img.height)/2;
			//this.ctx.clearRect(0, 0, this.canvas.width,this.canvas.height);
			this.ctx.drawImage(this.Img,this.beginX,this.beginY);
		}
	}
	test(){
		this.ctx.fillRect(25,25,100,100);
		console.log(this.canvas.width);
		console.log(this.Img.width);
		console.log(this.canvas.width-this.Img.width);
		console.log(this.beginX);
	}

}

export default DrawImg;







