import { createRouter, createWebHashHistory } from 'vue-router'

//引入路由
const Category=()=>import('@/views/category/Category')
const Home=()=>import('@/views/home/Home')
const Profile=()=>import('@/views/profile/Profile')
const ShopCart=()=>import('@/views/shopCart/ShopCart')




//配置路径
const routes = [
  //重定向
  {path:'',redirect:'/home'},     //888888888888888

  {path:'/home',component:Home},
  {path:'/category',component:Category},
  {path:'/profile',component:Profile},
  {path:'/shopCart',component:ShopCart},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
