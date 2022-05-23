import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Papers from '@/components/Papers'
import Constraints from '@/components/Constraints'
import Schedule from '@/components/Schedule'
import AddPaper from '@/components/AddPaper'
import AddConstraint from '@/components/AddConstraint'

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
      path: '/addconstraint',
      name: 'AddConstraintPage',
      component: AddConstraint
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
    },
    {
      path: '/constraints',
      name: 'ConstraintPage',
      component: Constraints
    }
  ]
})