import { useParams, useLoaderData, Outlet } from "react-router";
import HomeRight from "../base/HomeRight";




function Details() {

  const { id } = useParams();
  const { news } = useLoaderData();
  const selectedNews = news.find(item => item.id === id);

  return (
     <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5">
      
      {/* Content */}
      <div className="md:col-span-5 lg:col-span-9 order-1">
        <Outlet context={{ selectedNews }}></Outlet>
      </div>

      {/* Right Sidebar */}
      <div className="md:col-span-3 lg:col-span-3 order-2">
        <HomeRight />
      </div>
    </div>
  );
}

export default Details;