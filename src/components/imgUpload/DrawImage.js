/*
* @Author: yang
* @Date:   2017-12-27 15:15:24
* @Last Modified by:   worldzb
* @Last Modified time: 2018-01-04 21:33:55
*/

class DrawImg{
	constructor(ipt,context){
		this.ipt=ipt;//图像输入input控件id
		this.context=context;//图像显示canvas id
		this.canvas='';//获取所得的canvas对象
		this.ctx='';//canvas创建的上下文2d 画图对象（2d画板）

		this.beginX=0;//画图初始坐标X
		this.beginY=0;//画图初始坐标X
		this.imgWidth=0;//画图实际宽度
		this.imgHeight=0;//画图实际高度
		this.beginPoint=[0,0];//画图初始坐标点
		this.multiple=0.05;

		this.isDregStart=false;//是否执行拖拽
		this.imgDataUrl='';//返回在canvas经过裁切的图像数据，以base64的方式
		this.eventUpdate=null;//委托，绑定实例自定事件

		this.Img=new Image();//需要绘制的图像
		this.createCanvas();//初始化canvas
		this.addEvent();//事件绑定
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
		var obj=this;//异步调用时，this转换
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
				//console.log(x+","+y);
				obj.beginX=event.clientX-x;
				obj.beginY=event.clientY-y;
				obj.ctx.clearRect(0, 0, obj.canvas.width,obj.canvas.height);
				//console.log(obj.imgWidth);
				obj.ctx.drawImage(obj.Img,obj.beginX,obj.beginY,obj.imgWidth,obj.imgHeight);
				obj.imgDataUrl=this.canvas.toDataURL();
			}
		});
		//鼠标弹起事件
		this.canvas.addEventListener('mouseup',()=>{
			obj.isDregStart=false;
			obj.eventUpdate();//在鼠标弹起时，调用外部事件
		});
		//鼠标移出canvas
		this.canvas.addEventListener('mouseout',()=>{
			obj.isDregStart=false;
			obj.eventUpdate();//在鼠标移出时，调用外部事件
		});
		//鼠标滚轮事件，控制图片的放大缩小
		this.canvas.addEventListener('mousewheel',(event)=>{
			obj.ctx.clearRect(0, 0, obj.canvas.width,obj.canvas.height);
			//obj.beginX=(obj.canvas.width-obj.imgWidth)/2;居中放大
			//obj.beginY=(obj.canvas.height-obj.imgHeight)/2;
			if(event.wheelDelta>0){
				obj.imgWidth*=(1+this.multiple);
				obj.imgHeight*=(1+this.multiple);
				obj.ctx.drawImage(obj.Img,obj.beginX,obj.beginY,obj.imgWidth,obj.imgHeight);
				//console.log('放大');
			}else{
				obj.imgWidth*=(1-this.multiple);
				obj.imgHeight*=(1-this.multiple);
				obj.ctx.drawImage(obj.Img,obj.beginX,obj.beginY,obj.imgWidth,obj.imgHeight);
				//console.log('缩小');
			}
			obj.eventUpdate();//图片大小发生变化时，触发外部事件
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
			that.Img.src=fileReader.result;//在图片加载完成后，将其数据以base64 赋值给Img对象
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
			this.eventUpdate();
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







