import { FaRegBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";





function News({data}) {
  return (
    <div className="w-full border border-gray-100 mt-12">
        {/* top bar  */}
        <div className="bg-base-300 flex justify-between items-center p-5">
            <div className="flex items-center gap-3">
                <img className="w-12 rounded-full" src={data.author.img} alt="author picture"/>
                <div>
                    <h3 className="poppins-semibold text-base">{data.author.name}</h3>
                    <p className="poppins-regular text-sm text-gray-500">{new Date(data.author.published_date).toLocaleDateString('en-CA')}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <FaRegBookmark className="text-lg text-gray-500 cursor-pointer" />
                <FaShareAlt className="text-lg text-gray-500 cursor-pointer" />
            </div>
        </div>

        {/* body  */}

        <h1 className="poppins-bold text-xl p-5">{data.title}</h1>
        
        <div className="p-5">
            <img className="w-full h-auto rounded-md" src={data.image_url} alt="news image" />
        </div>
        
        <p className="poppins-regular text-base text-gray-500 p-5">{`${data.details.slice(0, 350)} ...`}
        <Link to={`/details/${data.id}`} className="text-orange-500">Read More</Link>
        </p>

       <span className="block w-[90%] mx-auto h-[1px] bg-gray-300"></span>

       {/* stat  */}

        <div className="flex justify-between items-center p-5">
            <div className="flex items-center gap-3">
                <div className="flex items-center">
                    {
                        Array.from({length: data.rating.number}).map((_, index) => (
                            <FaStar key={index} className="text-orange-500" />
                        ))
                    }
                </div>
                <p>{data.rating.number}</p>
            </div>

            <div className="flex items-center gap-2">
                <FaEye className="text-gray-500"/>
                <p className="text-gray-500">{data.total_view}</p>
            </div>
        </div>


      </div>
  );
}

export default News;