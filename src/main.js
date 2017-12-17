import Vue from 'vue'
import App from './App.vue';

import imgUpload from './components/imgUpload/imgUpload.js'


Vue.use(imgUpload);
new Vue({
  el: '#app',
  render: h => h(App)
})
