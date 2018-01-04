/*
* @Author: worldzb
* @Date:   2017-12-18 01:00:31
* @Last Modified by:   worldzb
* @Last Modified time: 2018-01-04 20:43:12
*/
import iu from './imgUpload.vue'

const imgUpload={
	install:function(Vue,options){
		Vue.component("imgUpload",iu);
	}
}

if (typeof window !== 'undefined' && window.Vue) {window.Vue.use(imgUpload); }

export default imgUpload;