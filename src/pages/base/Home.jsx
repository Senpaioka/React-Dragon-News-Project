import { useLoaderData, Outlet } from "react-router";
import { useState, lazy, Suspense } from "react";
import HomeLeft from "./HomeLeft";
// import HomeMain from "./HomeMain";
const HomeMain = lazy(() => import("./HomeMain"))
import HomeRight from "./HomeRight";
import Spinner from '../../components/Spinner';



function Home() {
  const { categories, news } = useLoaderData();

  const [newsCollection, setNewsCollection] = useState(news);

  function handleSelectedCategory(id) {
    if (Number(id) === 0) {
      setNewsCollection(news);
    }else {
      const filteredNews = news.filter(item => item.category_id === Number(id))
      setNewsCollection(filteredNews);
    }
  }


  // editorials
  const editorial = news.filter(item => item.others.is_trending === true).slice(0, 3);

  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5">
      {/* Left Sidebar */}
      <div className="md:col-span-3 order-2 md:order-1">
        <HomeLeft category={categories} onSelect={handleSelectedCategory} editorial={editorial}/>
      </div>

      {/* Content */}
      <Outlet context={{ newsCollection }}></Outlet>

      {/* Right Sidebar */}
      <div className="md:col-span-8 lg:col-span-2 order-3">
        <HomeRight />
      </div>
    </div>
  );
}

export default Home;
