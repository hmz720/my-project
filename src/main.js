// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'


import axios from 'axios'
// 将axios绑定在vue原型上,这样可以在其他组件中通过this.$axios使用axios
Vue.prototype.$axios = axios;




import { Form,FormItem,Table,TableColumn, } from 'element-ui';
 
import 'element-ui/lib/index.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);


Vue.config.productionTip = false

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
