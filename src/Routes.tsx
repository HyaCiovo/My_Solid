import { useRoutes } from '@solidjs/router';
import { lazy } from 'solid-js';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/Home/index')),
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/About/index')),
  }
]

const Routes = useRoutes(routes)

export default Routes