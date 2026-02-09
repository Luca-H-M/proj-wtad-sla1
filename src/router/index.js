import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/cartao',
    name: 'cartao',
    component: function () {
      return import('../views/CartaoView.vue')
    }
  },
  {
    path: '/cardapio',
    name: 'cardapio',
    component: function () {
      return import('../views/cardapioView.vue')
    }
  },
  {
    path: '/locais',
    name: 'locais',
    component: function () {
      return import('../views/LocaisView.vue')
    }
  },
  {
    path: '/pizzas',
    name: 'pizzas',
    component: function () {
      return import('../views/pizzasView.vue')
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router