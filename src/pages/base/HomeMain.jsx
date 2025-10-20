import News from "./News";


function HomeMain({news}) {
  return (
    <div>
      <h3 className="poppins-semibold text-xl py-5">Home Page</h3><span className="poppins-regular text-base text-gray-400">{news.length} Article Founds</span>

        {
            news.length > 0 ? news.map(item => <News data={item} key={item.id}></News>) : <p className="text-center text-xl mt-12 text-gray-400">No Article Found. Try Again Later!</p>
        }
      
    </div>
  );
}

export default HomeMain;