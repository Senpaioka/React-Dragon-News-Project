import News from "./News";


function HomeMain({news}) {
  return (
    <div>
      <h3 className="poppins-semibold text-xl py-5">Home Page</h3>

        {
            news.map(item => <News data={item} key={item.id}></News>)
        }
      
    </div>
  );
}

export default HomeMain;