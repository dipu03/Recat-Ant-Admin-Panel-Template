import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import Blog from '../views/pages/Blog';
import UserPage from '../views/pages/Game';
import AddUser from '../views/pages/AddGame';
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/blog', exact: true, element: <Blog /> },
      { path: '/blog', exact: true, element: <Blog /> },
      { path: '/user', exact: true, element: <UserPage /> },
      { path: '/add-user', exact: true, element: <AddUser /> },
      { path: '/edit-user/:id', exact: true, element: <AddUser /> },
      { path: '/game', exact: true, element: <UserPage /> },
      { path: '/add-game', exact: true, element: <AddUser /> },
      { path: '/edit-game/:id', exact: true, element: <AddUser /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];
export default Router;
