// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Mui from 'vue-awesome-mui'
import 'vue-awesome-mui/mui/dist/css/mui.css'
// import axios from "axios"
// Vue.use(axios)

Vue.use(Mui)

Vue.config.productionTip = false

//时间过滤器 年 月 日
const Totime = function (timestap) {
  var date;
  if (timestap !== undefined) {
    if (timestap.toString().length < 13) {
      date = new Date(timestap * 1000)
    } else {
      date = new Date(timestap)
    }
    let Y=date.getFullYear()+"-";
    let M=date.getMonth()+"-";
    let D=date.getDay()
    // console.log(timestap)
    return Y+M+D
  }
}
Vue.filter('totime', Totime)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
