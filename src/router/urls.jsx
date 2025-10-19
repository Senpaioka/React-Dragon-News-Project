import { createBrowserRouter } from "react-router";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/base/Home";
import DetailLayout from "../layouts/DetailLayout";
import Details from "../pages/details/Details";



const router = createBrowserRouter([
    {
        path: '/',
        Component: BaseLayout,

        children: [
            {
                index: true,
                Component: Home,
                loader: async() => {
                    const [categoryResponse, newsResponse] = await Promise.all([
                        fetch('/data/categories.json'),
                        fetch('/data/news.json')
                    ]);

                    if (!categoryResponse.ok || !newsResponse.ok){
                        throw new Error('Failed to load data!!')
                    }

                    const [categories, news] = await Promise.all([
                        categoryResponse.json(),
                        newsResponse.json()
                    ]);

                    return {categories, news};
                }
            }
        ]
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
])

export {router};