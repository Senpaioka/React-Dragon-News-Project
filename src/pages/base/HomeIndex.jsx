import { useOutletContext } from "react-router";
import { lazy, Suspense } from "react";
const HomeMain = lazy(() => import("./HomeMain"))
import Spinner from '../../components/Spinner';



function HomeIndex() {

  const { newsCollection } = useOutletContext(); 


  return (
      <div className="md:col-span-5 lg:col-span-7 order-1 md:order-2">
        <Suspense fallback={<Spinner></Spinner>}>
          <HomeMain news={newsCollection} />
        </Suspense>
      </div>
  );
}

export default HomeIndex;
