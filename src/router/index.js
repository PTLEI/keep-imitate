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
import TrainingList from '@/components/Lesson/TrainingList';
import LesShow from '@/components/Show/LesShow'

// 动作库
import Movement from '@/components/Lesson/Movement'
import MovementList from '@/components/Lesson/MovementList';
import MoveShow from '@/components/Show/MoveShow'

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
      path: '/Movement',
      name: 'movement',
      component: Movement
    },
    {
      path: '/Training',
      name: 'training',
      component: Training
    },

    // 动作库列表及详情
    {
      path: '/MovementList',
      name: 'movementlist',
      component: MovementList
    },
    {
      path: '/MoveShow',
      name: 'moveshow',
      component: MoveShow
    },

    // 训练课程列表及详情
    {
      path: '/TrainingList',
      name: 'traininglist',
      component: TrainingList
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
