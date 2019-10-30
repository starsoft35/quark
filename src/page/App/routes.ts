import {
  tarBarHomeImg, tarBarHomeSelectedImg, tarBarListImg, tarBarListSelectedImg,
} from '../../asset/images';

export default [
  {
    key: '0',
    path: '/home',
    title: '首页',
    tabBarTitle: '首页',
    showTabBar: true,
    component: () => import('../home/Home'),
    icon: tarBarHomeImg,
    selectedIcon: tarBarHomeSelectedImg,
  },
  {
    key: '1',
    path: '/list',
    title: '长列表',
    tabBarTitle: '列表',
    showTabBar: true,
    component: () => import('../list/List'),
    icon: tarBarListImg,
    selectedIcon: tarBarListSelectedImg,
  },
  {
    key: '2',
    path: '/list-detail/:id',
    title: '列表详情',
    tabBarTitle: '列表详情',
    showTabBar: false,
    component: () => import('../list-detail/ListDetail'),
    icon: tarBarListImg,
    selectedIcon: tarBarListSelectedImg,
  },
  {
    key: '3',
    path: '/report/nav',
    title: '运行报告',
    tabBarTitle: '运行报告',
    showTabBar: false,
    component: () => import('../report/report-nav/ReportNav'),
    icon: tarBarListImg,
    selectedIcon: tarBarListSelectedImg,
  },
  {
    key: '4',
    path: '/report/env',
    title: '运行环境',
    tabBarTitle: '运行环境',
    showTabBar: false,
    component: () => import('../report/env-report/EnvReport'),
    icon: tarBarListImg,
    selectedIcon: tarBarListSelectedImg,
  },
  {
    key: '5',
    path: '/report/log',
    title: '运行日志',
    tabBarTitle: '运行日志',
    showTabBar: false,
    component: () => import('../report/log-report/LogReport'),
    icon: tarBarListImg,
    selectedIcon: tarBarListSelectedImg,
  },
  {
    key: '6',
    path: '/rc-demo',
    title: 'rc-demo',
    tabBarTitle: 'rc-demo',
    showTabBar: false,
    component: () => import('../rc-demo/RcDemo'),
    icon: tarBarHomeImg,
    selectedIcon: tarBarHomeSelectedImg,
  },
];