import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Salvarcliente from '../components/cliente/salva/SalvarCliente.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
   path: '/cliente/salvar',
   name:'Salvar Cliente',
   component:  Salvarcliente
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
