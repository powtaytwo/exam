import { Navigate, useRoutes } from 'react-router-dom'

import DashboardLayout from '../shared/layouts/dashboard'
import LogoOnlyLayout from '../shared/layouts/LogoOnlyLayout'

import User from './packs/User'

import DashboardApp from '../shared/pages/DashboardApp';
import NotFound from '../shared/pages/Page404'

export default function Router() {
    return useRoutes([
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
        { path: 'app', element: <DashboardApp /> },
          { path: 'user', element: <User /> },
        ],
      },
      {
        path: '/',
        element: <LogoOnlyLayout />,
        children: [
          { path: '/', element: <Navigate to="/dashboard/app" /> },
          { path: '404', element: <NotFound /> },
          { path: '*', element: <Navigate to="/404" /> },
        ],
      },
      { path: '*', element: <Navigate to="/404" replace /> },
    ]);
  }