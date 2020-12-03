import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import BookList from '../views/BookList.vue'
import Book from '../views/Book.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book/:slug',
    name: 'Book',
    props: true,
    component: Book
  }
]

const router = new VueRouter({
  routes
})

export default router
