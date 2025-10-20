import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


function BreakingNews({news}) {

  const [breaking, setBreaking] = useState([]);

  useEffect(function(){
    const getBreaking = news.filter(item => item.category_id === 1);
    setBreaking(getBreaking)
  },[news])


  return (
    <div className="bg-gray-200 w-10/12 mx-auto py-3 flex items-center">
        <div className="ml-5">
            <h3 className="bg-primary p-3 text-white text-lg">Latest</h3>
        </div>
        <div className="w-full poppins-semibold text-lg ml-5 overflow-hidden">
            <Marquee pauseOnHover={true} speed={70}>
                {
                  breaking.length > 0 ?
                  (
                    breaking.map(item => (
                      <div>
                        
                        <p><span className="badge badge-sm badge-primary m-3" key={item.id}>breaking</span> {item.title} </p>
                      </div>
                    ))
                  )
                  :
                  (
                    <span>Nothing to show right now !!!</span>
                  )
                }
            </Marquee>
        </div>
    </div>
  );
}

export default BreakingNews;