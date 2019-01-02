import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index-one'
import Choice from '@/components/Choice/choice'
import Training from '@/components/Lesson/Training'
import Movement from '@/components/Lesson/Movement'
import MoveShow from '@/components/Show/MoveShow'
import LesShow from '@/components/Show/LesShow'

import SettingNavbar from '@/components/SelfCenter/Setting/SettingNavbar'
import Setup from '@/components/SelfCenter/Setting/Setup'
import Binding from '@/components/SelfCenter/Setting/Binding'

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
      component: Movement
    },
    {
      path: '/Training',
      name: 'training',
      component: Training
    },
    {
      path: '/MoveShow',
      name: 'moveshow',
      component: MoveShow
    },
    {
      path: '/LesShow',
      name: 'lesshow',
      component: LesShow
    },
    {
      path: '/Setting',
      name: 'setting',
      component: SettingNavbar,
      children: [
        {
          path: 'setting',
          component: Setup,
        },
        {
          path: 'binding',
          component: Binding,
        }
      ]
    }
  ]
})
