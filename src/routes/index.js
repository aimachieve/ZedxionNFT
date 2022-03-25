import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import GuestGuard from '../guards/GuestGuard';

import MainLayout from '../layouts/main';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Auth Routes
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> }
      ]
    },

    // Dashboard Routes
    // {
    //   path: 'dashboard',
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: '/', element: <Navigate to="/dashboard/one" replace /> },
    //     { path: 'one', element: <PageOne /> },
    //     { path: 'two', element: <PageTwo /> },
    //     { path: 'three', element: <PageThree /> },
    //     {
    //       path: 'app',
    //       children: [
    //         {
    //           path: '/',
    //           element: <Navigate to="/dashboard/app/four" replace />
    //         },
    //         { path: 'four', element: <PageFour /> },
    //         { path: 'five', element: <PageFive /> },
    //         { path: 'six', element: <PageSix /> }
    //       ]
    //     }
    //   ]
    // },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/', 
      element: <MainLayout />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/bid/:id', element: <BidPage /> },
        { path: '/item-details/:id', element: <ItemDetails /> },
        { path: '/contact', element: <Contact /> },
        { path: '/aboutus', element: <AboutUs /> },
        { path: '/blog', element: <Blog /> },
        { path: '/terms', element: <Terms /> },
        { path: '/privacy', element: <Privacy /> },
        { path: '/my-assets', element: <MyAssets /> },
        { path: '/create', element: <Create /> },
        // ZEDZION FOOTER
        { path: '/explore', element: <Explore /> },
        { path: '/auction', element: <Auction /> },
        { path: '/activity', element: <Activity /> },
        { path: '/creators', element: <Creators /> },
        { path: '/nfts/all', element: <NFTsPage /> },
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('../pages/authentication/Login')));
const Register = Loadable(lazy(() => import('../pages/authentication/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/authentication/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/authentication/VerifyCode')));
// Dashboard
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const BidPage = Loadable(lazy(() => import('../pages/Bid/index.js')));
const ItemDetails = Loadable(lazy(() => import('../pages/Explore/Item/index.js')));
const MyAssets = Loadable(lazy(() => import('../pages/MyAssets/index.js')));
const Create = Loadable(lazy(() => import('../pages/Create/index.js')));
// Footer Community
const Contact = Loadable(lazy(() => import('../pages/Contact/index.js')));
const AboutUs = Loadable(lazy(() => import('../pages/AboutUs/index.js')));
const Blog = Loadable(lazy(() => import('../pages/Blog/index.js')));
const Terms = Loadable(lazy(() => import('../pages/Terms/index.js')));
const Privacy = Loadable(lazy(() => import('../pages/Privacy/index.js')));
// Footer Zedxion
const Explore = Loadable(lazy(() => import('../pages/Explore/index.js')));
const Auction = Loadable(lazy(() => import('../pages/Auction/index.js')));
const Activity = Loadable(lazy(() => import('../pages/Activity/index.js')));
const Creators = Loadable(lazy(() => import('../pages/Creators/index.js')));

const NFTsPage = Loadable(lazy(() => import('../pages/NFTsPage')));
