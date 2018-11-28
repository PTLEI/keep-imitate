import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index-one'
import Choice from '@/components/Choice/choice'
import Training from '@/components/Lesson/Training'
import Movement from '@/components/Lesson/Movement'
import MoveShow from '@/components/Show/MoveShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/Choice',
      name: 'Choice',
      component: Choice
    },
    {
      path: '/Movement',
      name: 'movement',
      component: Movement,
      children: [
        { path: 'MoveShow',
          name: 'moveshow',
          component: MoveShow}
      ]
    },
    {
      path: '/Training',
      name: 'training',
      component: Training
    }
  ]
})
