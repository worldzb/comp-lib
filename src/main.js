import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

import imgUpload from './components/imgUpload/imgUpload.js'
import test from './components/Test/index.js'

Vue.use(test);
Vue.use(imgUpload);
Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App)
})
