import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import swimImg from '../../assets/images/swimming.png';
import classImg from '../../assets/images/class.png';
import playgroundImg from '../../assets/images/playground.png';
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Spinner from '../../components/Spinner';


function HomeRight() {

  const {user} = useContext(AuthContext);

  return (
  <>

    {!user && (
        <div className="w-full space-y-3">
            <h3 className="poppins-semibold text-xl py-5">Login With</h3>

            <Link to="/login" className="btn w-full bg-white text-black border-[#e5e5e5]">
              <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
              Login with Email
            </Link>

            <Link to="/login" className="btn w-full bg-white text-black border-[#e5e5e5]">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </Link>
        </div>
    )}



    <div className="w-full space-y-3">
        <h3 className="poppins-semibold text-xl py-5">Find Us On</h3>

        <div className="join join-vertical w-full">
          <button className="btn join-item"><FaFacebook className="text-lg" />Facebook</button>
          <button className="btn join-item"><AiFillTwitterCircle className="text-xl" />Twitter</button>
          <button className="btn join-item"><FaInstagram className="text-lg" />Instagram</button>
        </div>
    </div>


     <div className="w-full space-y-3 bg-gray-200 mt-5">
        <h3 className="poppins-semibold text-xl p-5">Q-Zone</h3>
        <img className='w-full h-auto' src={swimImg} alt="swimming image" />
        <img className='w-full h-auto' src={classImg} alt="class image" />
        <img className='w-full h-auto' src={playgroundImg} alt="playground image" />
    </div>


  </>
  );
}

export default HomeRight;