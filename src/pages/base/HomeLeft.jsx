import { Link, NavLink } from "react-router";
import { FaRegCalendar } from "react-icons/fa";


function HomeLeft({category, onSelect, editorial}) {
  return (
    <div>
      <h3 className="poppins-semibold text-xl py-5">All Category</h3>
      <div>
        <ul>
            {
                category.map(item => <li key={item.id}>
                  <NavLink to={`/${item.name}`} onClick={() => onSelect(item.id)} className='w-full poppins-semibold text-base text-gray-500 hover:text-black btn btn-ghost mt-3'>
                  {item.name}
                  </NavLink>
                </li>)
            }
        </ul>
      </div>


      <h3 className="poppins-semibold text-xl py-5">Top Editorials</h3>
        {
          editorial.map(item => (
            <div key={item.id} className="mt-5">
              <img src={item.thumbnail_url} className="w-full h-auto rounded-md" alt="thumbnail photo" />
              <Link to={`/details/${item.id}/`} className="poppins-semibold text-xl">{item.title}</Link>

              <div className="flex justify-between items-center py-5">
                <p className="text-gray-400">{category.find(id => id.id === item.category_id).name}</p>

                <p className="flex items-center gap-3 text-gray-400">
                  <FaRegCalendar />
                  {new Date(item.author.published_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
           
              </div>
            </div>
          ))
        }

    </div>
  );
}

export default HomeLeft;