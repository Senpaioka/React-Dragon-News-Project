import { Link } from "react-router";

function HomeLeft({category}) {
  return (
    <div>
      <h3 className="poppins-semibold text-xl py-5">All Category</h3>

      <div>
        <ul>
            {
                category.map(item => <li key={item.id} className="w-full poppins-semibold text-base text-gray-500 hover:text-black btn btn-ghost mt-3"><Link>{item.name}</Link></li>)
            }
        </ul>
      </div>
    </div>
  );
}

export default HomeLeft;