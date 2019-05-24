import Vue from 'vue'
import Router from 'vue-router'

// 首页
import IndexPage from '@/components/Index-one'

// 精选
import Information from '@/components/Information/Information'
import InformationList from '@/components/Information/InformationList'
import InformationDetail from '@/components/Information/InformationDetail'

// 训练
import Training from '@/components/Lesson/Training'
import LessonList from '@/components/Lesson/LessonList';
import LesShow from '@/components/Show/LesShow'

// 动作库
import Movement from '@/components/Lesson/Movement'
import MovementList from '@/components/Lesson/MovementList';
import MoveShow from '@/components/Show/MoveShow'

import SettingNavbar from '@/components/SelfCenter/Setting/SettingNavbar'
import Setup from '@/components/SelfCenter/Setting/Setup'
import TrainHistory from '@/components/SelfCenter/Setting/History'
// 404
import Page404 from '@/components/404/Page404';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },

    // 精选模块
    {
      path: '/Information',
      name: 'Information',
      component: Information
    },
    {
      path: '/InformationList',
      name: 'InformationList',
      component: InformationList
    },
    {
      path: '/InformationDetail',
      name: 'InformationDetail',
      component: InformationDetail
    },

    {
      path: '/Movement/',
      name: 'movement',
      component: Movement,
      props: true
    },
    {
      path: '/Training',
      name: 'training',
      component: Training
    },

    // 训练课程列表及详情
    {
      path: '/LessonList',
      name: 'alllessonlist',
      component: LessonList
    },
    {
      path: '/LessonList/:trainId',
      name: 'lessonlist',
      component: LessonList
    },
    {
      path: '/LesShow/:lessonId',
      name: 'lesshow',
      component: LesShow
    },

    // 动作库列表及详情
    {
      path: '/MovementList/:bodyParts',
      name: 'movementlist',
      component: MovementList,
    },
    {
      path: '/MoveShow/:movementId',
      name: 'moveshow',
      component: MoveShow
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
          path: 'history',
          component: TrainHistory,
        }
      ]
    },
    {
      path: '/404', name: '404', component: Page404
    },
    {
      path: '*', redirect: '/404'
    }
  ]
})
