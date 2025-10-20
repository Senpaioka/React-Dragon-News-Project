import { Link, NavLink } from 'react-router';
import userDefault from '../assets/images/user.png';



function NavBar() {
  return (
    <nav>
        <div className="w-10/12 mx-auto flex justify-center md:justify-between items-center flex-wrap py-5 space-y-3">
            <div>
                <p className='text-lg text-gray-600'>
                    user@email.com
                </p>
            </div>

            <div>
                <ul className="flex items-center gap-5 ">
                    <li className='text-lg text-gray-500 hover:text-primary'><NavLink to="/">Home</NavLink></li>
                    <li className='text-lg text-gray-500 hover:text-primary'><NavLink to="/about">About</NavLink></li>
                    <li className='text-lg text-gray-500 hover:text-primary'><NavLink to="/career">Career</NavLink></li>
                </ul>
            </div>


            <div className='flex items-center gap-5'>
                <img src={userDefault} alt="default user photo" />
                <Link className='bg-secondary hover:bg-primary poppins-semibold text-lg text-white px-10 py-2 cursor-pointer'>Login</Link>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;