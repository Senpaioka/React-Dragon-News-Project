import { Link, NavLink } from 'react-router';
import userDefault from '../assets/images/user.png';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


function NavBar() {

    const { user, logoutUser } = useContext(AuthContext);
 

  return (
    <nav>
        <div className="w-10/12 mx-auto flex justify-center md:justify-between items-center flex-wrap py-5 space-y-3">
            <div>
                {
                    user ? 
                    <p className='text-lg text-gray-600'>@{user.displayName}</p>
                    :
                    <p className='text-lg text-gray-600'></p>
                }
            </div>

            <div>
                <ul className="flex items-center gap-5 ">
                    <li className='text-lg text-gray-500 hover:text-primary'><NavLink to="/">Home</NavLink></li>
                    <li className='text-lg text-gray-500 hover:text-primary'><NavLink to="/about">About</NavLink></li>
                    <li className='text-lg text-gray-500 hover:text-primary'><NavLink to="/career">Career</NavLink></li>
                </ul>
            </div>


            <div className='flex items-center gap-5'>
                {
                    user ?
                    <img className='w-12 h-12 overflow-hidden object-cover rounded-full' src={user.photoURL || userDefault} alt={user.displayName || 'default_user_photo'} />
                    :
                    <img src={userDefault} alt="default user photo" />
                }
                {
                    user ?
                    <button onClick={logoutUser} className='bg-secondary hover:bg-primary poppins-semibold text-lg text-white px-10 py-2 cursor-pointer'>Logout</button>
                    :
                    <Link to="/login" className='bg-secondary hover:bg-primary poppins-semibold text-lg text-white px-10 py-2 cursor-pointer'>Login</Link>
                }
            </div>
        </div>
    </nav>
  );
}

export default NavBar;