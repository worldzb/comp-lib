/*
* @Author: yang
* @Date:   2017-12-27 15:15:24
* @Last Modified by:   yang
* @Last Modified time: 2017-12-30 09:34:18
*/

class DrawImg{
	constructor(ipt,context){
		this.ipt=ipt;//图像输入input控件id
		this.context=context;//图像显示canvas id
		this.canvas='';//获取所得的canvas对象
		this.ctx='';//canvas创建的上下文2d 画图对象（2d画板）

		this.beginX=0;//画图初始坐标X
		this.beginY=0;//画图初始坐标X
		this.imgWidth=0;
		this.imgHeight=0;
		this.beginPoint=[0,0];//画图初始坐标点
		this.multiple=0.05;

		this.isDregStart=false;//是否执行拖拽

		this.Img=new Image();//需要绘制的图像
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
		//监听鼠标按下事件，记录鼠标与图片相对位置
		this.canvas.addEventListener('mousedown',(event)=>{
			obj.isDregStart=true;
			event = event || window.event; //兼容处理
			x=event.clientX-obj.beginX;
			y=event.clientY-obj.beginY;
		});
		//鼠标移动事件，两者保持相对位置不变
		this.canvas.addEventListener('mousemove',(event)=>{
			event = event || window.event; //兼容处理
			if(obj.isDregStart){
				console.log(x+","+y);
				obj.beginX=event.clientX-x;
				obj.beginY=event.clientY-y;
				obj.ctx.clearRect(0, 0, obj.canvas.width,obj.canvas.height);
				console.log(obj.imgWidth);
				obj.ctx.drawImage(obj.Img,obj.beginX,obj.beginY,obj.imgWidth,obj.imgHeight);
			}
		});
		//鼠标弹起事件
		this.canvas.addEventListener('mouseup',()=>{
			obj.isDregStart=false;
			obj.rtImageData()
		});
		//鼠标移出canvas
		this.canvas.addEventListener('mouseout',()=>{
			obj.isDregStart=false;
		});
		//鼠标滚轮事件，控制图片的放大缩小
		this.canvas.addEventListener('mousewheel',(event)=>{
			obj.ctx.clearRect(0, 0, obj.canvas.width,obj.canvas.height);
			if(event.wheelDelta>0){
				obj.imgWidth*=(1+this.multiple);
				obj.imgHeight*=(1+this.multiple);
				obj.ctx.drawImage(obj.Img,obj.beginX,obj.beginY,obj.imgWidth,obj.imgHeight);
				console.log('放大');
			}else{
				obj.imgWidth*=(1-this.multiple);
				obj.imgHeight*=(1-this.multiple);
				obj.ctx.drawImage(obj.Img,obj.beginX,obj.beginY,obj.imgWidth,obj.imgHeight);
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
			that.Img.src=fileReader.result;
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
			this.imgWidth=this.Img.width;
			this.imgHeight=this.Img.height;
			this.ctx.clearRect(0, 0, this.canvas.width,this.canvas.height);
			this.ctx.drawImage(this.Img,this.beginX,this.beginY,this.Img.width,this.Img.height);
		}
	}

	//返回绘制的内容
	rtImageData(){
		return this.canvas.toDataURL();
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







