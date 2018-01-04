/*
* @Author: worldzb
* @Date:   2018-01-04 20:20:41
* @Last Modified by:   worldzb
* @Last Modified time: 2018-01-04 20:26:32
*/
import comTest from './test.vue';

const Test={
	install:function(Vue){
		Vue.component('Test',comTest);
	}
}


if(typeof window!=='undefined' && window.Vue){
	window.Vue.use(imgUpload);
}

export default Test;