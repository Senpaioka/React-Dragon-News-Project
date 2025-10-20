import { useOutletContext, useNavigate } from "react-router";



function DetailPage() {
    
    const {selectedNews} = useOutletContext(); 
    const navigate = useNavigate();

    return (
        <div>
        <h3 className="poppins-semibold text-xl py-5">Dragon News</h3>

            <div className="border border-gray-300">
            <div className="p-5">
                <img className="w-full h-auto rounded-md" src={selectedNews.image_url} alt="article image" />
            </div>
            <p className="poppins-bold text-2xl p-5">{selectedNews.title}</p>
            <p className="poppins-regular text-base text-gray-500 p-5">{selectedNews.details}</p>

            <div className="p-5">
                <button onClick={() => navigate(-1)} className="btn bg-primary text-white">&larr; Back</button>
            </div>
            </div>
        </div>
    );
}

export default DetailPage;