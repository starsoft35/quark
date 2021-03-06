import { IRoute } from 'umi';

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    component: '@/page/Welcome',
    title: '欢迎',
    meta: {
      id: 'welcome',
    },
  },
  {
    path: '/home',
    component: '@/page/Home',
    title: '主页',
    meta: {
      id: 'home',
    },
  },
  {
    path: '/list-demo',
    title: '列表',
    component: '@/page/ListDemo',
    meta: {
      id: 'list-demo',
    },
  },
];

export default routes;
