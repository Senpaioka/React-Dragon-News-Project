import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/base/Home";
import DetailLayout from "../layouts/DetailLayout";
import About from "../pages/others/About";
import Career from "../pages/others/Career";
import HomeIndex from "../pages/base/HomeIndex";
import Spinner from "../components/Spinner";
import Details from "../pages/details/Details";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
const DetailPage = lazy(() => import('../pages/details/DetailPage'));
import PrivateRoute from '../context/PrivateRoute';
import PasswordReset from "../pages/auth/PasswordReset";


// loading data
const loadingFetchingData = async () => {
  const [categoryResponse, newsResponse] = await Promise.all([
    fetch('/data/categories.json'),
    fetch('/data/news.json')
  ]);

  if (!categoryResponse.ok || !newsResponse.ok) {
    throw new Error('Failed to load data!!');
  }

  const [categories, news] = await Promise.all([
    categoryResponse.json(),
    newsResponse.json()
  ]);

  return { categories, news };
};


const router = createBrowserRouter([
  // Home page
   {
    path: "/",
    Component: BaseLayout,
    // element: (
    //   <AuthProvider>
    //     <BaseLayout></BaseLayout>
    //   </AuthProvider>
    // ),
    loader: loadingFetchingData,

    children: [
      {
        path: "/",
        Component: Home,
        loader: loadingFetchingData,
        children: [
          {
            index: true,
            Component: HomeIndex,
          },
          {
            path: ":category_name",
            Component: HomeIndex, 
          },
          {
            path: 'about',
            Component: About,
          },
          {
            path: 'career',
            Component: Career,
          }
        ],
      },
    ],
  },

  // details page
  {
      path: '/details/:id/',
      Component: DetailLayout,
    
      children: [
          {
             path: '/details/:id/',
             Component: Details,
             loader: loadingFetchingData,

             children: [
              {
                index: true,
                element: (
                  <PrivateRoute>
                    <Suspense fallback={<Spinner></Spinner>}>
                      <DetailPage></DetailPage>
                    </Suspense>
                  </PrivateRoute>
                )
              }
             ]
          }
      ]
    },

    // authentication
    {
      path: 'register',
      Component: Register
    },
    {
      path: 'login',
      Component: Login,
    },
    {
      path: 'resetpassword',
      Component: PasswordReset,
    }
]);


export {router};
