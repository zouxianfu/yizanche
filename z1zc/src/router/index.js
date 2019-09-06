import Vue from 'vue'
import Router from 'vue-router'

//测试组件
import test from '@/components/test/test'

import QC from '@/components/Qcsc/Qczs/QC'

//组件引入模块
import Qcsc from '@/components/QcSc' //汽车商城父组件
import Qczx from '@/components/QcZx' //汽车商城父组件
import Gwc from '@/components/Gwc' //汽车商城父组件
import Grzx from '@/components/GrZx' //汽车商城父组件
import Wzdeatile from '@/components/QzzxDeatile' //汽车资讯文章详情父组件

//全局插件模块
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Qcsc',
      component: QC
    },
    {
    	path:'/Qcsc',
    	name:'qcsc',
    	component:Qcsc
    },
    {
    	path:'/Qczx',
    	name:'Qczx',
    	component:Qczx
    },
    {
    	path:'/Gwc',
    	name:'Gwc',
    	component:Gwc
    },
    {
    	path:'/Grzx',
    	name:'Grzx',
    	component:Grzx
    },
    {
      path:'/Wzdeatile',
      name:'Wzdeatile',
      component:Wzdeatile
    }
  ]
})
