/*
* @Author: yang
* @Date:   2017-12-27 15:15:24
* @Last Modified by:   yang
* @Last Modified time: 2017-12-27 16:58:35
*/

class DrawImage{
	constructor(ipt,context){
		this.ipt=ipt;
		this.context=context;
		this.ctx='';
		this.createCanvas();
	}
	createCanvas(){
		let can=document.getElementById(this.context);
		this.ctx=can.getContext('2d');
	}
	loadImg(){
		let fileReader=new FileReader();
		let fileNode=document.getElementById(this.ipt);
		let file=fileNode.files[0];
		fileReader.readAsDataURL(file);
		fileReader.onloadend=()=>{
			alert(fileNode)
			this.ctx.drawImage(fileNode.src,0,0,400,400)
		}
	}

	test(){
		this.ctx.fillStyle="#FF0000";
		this.ctx.fillRect(0,0,150,75);
	}
}

export default DrawImage;







