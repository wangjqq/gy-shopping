import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由组件
import Home from '@/views/Home/Home.vue'
import Search from '@/views/Search/Search.vue'
import Login from '@/views/Login/Login.vue'
import Register from '@/views/Register/Register.vue'

let orginPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    orginPush.call(this, location, resolve, reject)
  } else {
    orginPush.call(this, location, () => {}, () => {})
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => {}, () => {})
  }
}


const routes = [
  // 首页路由重定向
  {
    path: "/",
    redirect: "/home"
  },
  // 其他路由
  {
    path: "/home",
    component: Home,
    meta: {
      show: true
    }
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: {
      show: true
    },
    name: 'search'
  },
  {
    path: "/login",
    component: Login,
    meta: {
      show: false
    }
  },
  {
    path: "/register",
    component: Register,
    meta: {
      show: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router