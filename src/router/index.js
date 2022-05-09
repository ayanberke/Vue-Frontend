import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Papers from '@/components/Papers'
import Constraints from '@/components/Constraints'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/papers',
      name: 'PaperPage',
      component: Papers
    },
    {
      path: '/constraints',
      name: 'ConstraintsPage',
      component: Constraints
    }
  ]
})