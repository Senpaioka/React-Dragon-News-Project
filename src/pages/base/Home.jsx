import { useLoaderData } from "react-router";
import HomeLeft from "./HomeLeft";
import HomeMain from "./HomeMain";
import HomeRight from "./HomeRight";



function Home() {

  const {categories, news} = useLoaderData();

  return (
    <div className="w-10/12 mx-auto grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <HomeLeft category={categories}></HomeLeft>
      </div>

      <div className="col-span-7">
        <HomeMain news={news}></HomeMain>
      </div>
      
      <div className="col-span-2">
        <HomeRight></HomeRight>
      </div>
    </div>
  );
}

export default Home;