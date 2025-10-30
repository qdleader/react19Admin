/**
 * 路由配置
 */

import { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { Spin } from 'antd';
import type { RouteMeta } from '@/types';
import MainLayout from '@/layouts/MainLayout';
import AuthGuard from './AuthGuard';

// 路由懒加载包装组件
const LazyLoad = (Component: React.LazyExoticComponent<React.ComponentType<any>>) => {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: 'center', marginTop: '200px' }}>
          <Spin size="large" tip="加载中..." />
        </div>
      }
    >
      <Component />
    </Suspense>
  );
};

// 懒加载页面组件
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const DataList = lazy(() => import('@/pages/DataList'));
const Login = lazy(() => import('@/pages/Login'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// 扩展路由对象类型
export interface AppRouteObject extends Omit<RouteObject, 'children'> {
  meta?: RouteMeta;
  children?: AppRouteObject[];
}

/**
 * 路由配置
 */
const routes: AppRouteObject[] = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    meta: {
      requireAuth: true,
    },
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: LazyLoad(Home),
        meta: {
          title: '首页',
          requireAuth: true,
        },
      },
      {
        path: 'about',
        element: LazyLoad(About),
        meta: {
          title: '关于',
          requireAuth: true,
        },
      },
      {
        path: 'data-list',
        element: LazyLoad(DataList),
        meta: {
          title: '数据列表',
          requireAuth: true,
        },
      },
    ],
  },
  {
    path: '/login',
    element: LazyLoad(Login),
    meta: {
      title: '登录',
      requireAuth: false,
    },
  },
  {
    path: '/404',
    element: LazyLoad(NotFound),
    meta: {
      title: '404',
      requireAuth: false,
    },
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
];

export default routes;
