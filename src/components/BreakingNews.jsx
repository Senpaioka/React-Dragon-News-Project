import Marquee from "react-fast-marquee";


function BreakingNews() {
  return (
    <div className="bg-gray-200 w-10/12 mx-auto py-3 flex items-center">
        <div className="ml-5">
            <h3 className="bg-primary p-3 text-white text-lg">Latest</h3>
        </div>
        <div className="poppins-semibold text-lg ml-5 overflow-hidden">
            <Marquee pauseOnHover={true} speed={70}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    </div>
  );
}

export default BreakingNews;