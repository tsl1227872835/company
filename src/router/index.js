import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    children:[{
path:'/',
component:()=>
import('../views/Main_home.vue')
    },
     {
       path:'/main/top_product',
       component:()=>import('../views/Top_product.vue')
     },
     {
       path:'/main/co_map',
       component:()=>import('../views/Co_map.vue') 
     }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
