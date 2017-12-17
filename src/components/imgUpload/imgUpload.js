/*
* @Author: worldzb
* @Date:   2017-12-18 01:00:31
* @Last Modified by:   worldzb
* @Last Modified time: 2017-12-18 01:04:54
*/
import iu from './imgUpload.vue'

const imgUpload={
	install:(Vue)=>{
		Vue.component("imgUpload",iu);
	}
}

if(typeof window!=='undefined' && window.Vue){
	window.Vue.use(imgUpload);
}
export default imgUpload;