import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Achievment from '../views/Achievment.vue'
import Project from '../views/Project.vue'
import Story from '../views/Story.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Project',
    component: Project
  },
  {
    path: '/achievments',
    name: 'Achievment',
    component: Achievment
  },
  {
    path: '/stories',
    name: 'Story',
    component: Story
  },
  {
    path: '/login',
    name: 'Login Page',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
