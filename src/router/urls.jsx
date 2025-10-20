import { createBrowserRouter } from "react-router";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/base/Home";
import DetailLayout from "../layouts/DetailLayout";
import Details from "../pages/details/Details";
import About from "../pages/others/About";
import Career from "../pages/others/Career";
import HomeIndex from "../pages/base/HomeIndex";


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
  {
    path: "/",
    Component: BaseLayout,
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

  {
      path: '/details/:id/',
      Component: DetailLayout,

      children: [
          {
              index: true,
              Component: Details,
          }
      ]
    }
]);


export {router};