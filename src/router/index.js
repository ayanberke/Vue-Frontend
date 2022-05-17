import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Papers from '@/components/Papers'
import Constraints from '@/components/Constraints'
import Schedule from '@/components/Schedule'
import AddPaper from '@/components/AddPaper'

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
    },
    {
      path: '/schedule',
      name: 'SchedulePage',
      component: Schedule
    },
    {
      path: '/addpaper',
      name: 'AddPaperPage',
      component: AddPaper
    }
  ]
})