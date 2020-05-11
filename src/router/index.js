import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/home'
import OpenAPI from '../components/openAPI/openAPI'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
          path: '/openAPI',
          component: OpenAPI
      }
    ]
  })
  
  export default router