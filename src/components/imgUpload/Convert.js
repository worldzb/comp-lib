/*
* @Author: yang
* @Date:   2018-01-03 14:21:57
* @Last Modified by:   yang
* @Last Modified time: 2018-01-03 15:32:41
*/


/**
 *数据类型转换类
 */

class Convert{

	/**
	 * dataURL加载的 base64数据转换为二进制 数据流
	 * @param  {base64} dataurl [一般为通过fileReader 读取加载的图片数据]
	 * @return {byte} formdata [用于上传的 比特数据 ]
	 */
	static dataURL2formData(dataurl){
		console.log(typeof dataurl);
		let formdata='';
		let byteString = atob(dataurl.split(',')[1]);
	    let mimeString = dataurl.split(',')[0].split(':')[1].split(';')[0];
	    let ab = new ArrayBuffer(byteString.length);
	    let ia = new Uint8Array(ab);
	    for (let i = 0; i < byteString.length; i++) {
	        ia[i] = byteString.charCodeAt(i);
	    }
	    formdata= new Blob([ab], {type: mimeString});
	    return formdata;
	}

	static test(){
		
	}
}


export default Convert;
