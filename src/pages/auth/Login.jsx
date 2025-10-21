import { Link, useNavigate, useLocation } from 'react-router';
import NavBar from '../../components/NavBar';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';


function Login() {

  const { signWithGmail, isError, isMessage, loginVerifiedUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // gmail auth
  function handleGmailAuth(event) {
    event.preventDefault();
    signWithGmail()
    .then(() => {
      navigate(location.state || '/');
    })
  }


  // login with email and password
  function handleLoginWithEmailAndPassword(event){
    event.preventDefault();

    const form = event.target;
    const email = event.target.email.value;
    const password = event.target.password.value;

    loginVerifiedUser(email, password)
    .then(() => {
      navigate(location.state || '/');
    })

    form.reset();
  }


  return (
    <>
    <NavBar></NavBar>
    <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 shadow-2xl p-[100px]">
            <h3 className='poppins-semibold text-3xl text-center p-10'>Login Your Account</h3>
            <span className="block w-full h-[1px] bg-gray-300"></span>
            <div className="card-body">
                <form onSubmit={handleLoginWithEmailAndPassword}>
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name="email" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><Link to="/resetpassword" className="link link-hover">Forgot password?</Link></div>
                    <button className="btn bg-secondary text-white mt-4">Login</button>
                  </fieldset>
                </form>

                <div className='text-center'>
                  <div className="divider">Or</div>

                  <button onClick={handleGmailAuth} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                  </button>
                </div>

            </div>
              <p className='text-center text-secondary poppins-semibold text-base'>Don't Have an account? <Link to="/register" className='text-primary'>Register</Link></p>
              <p className='mt-3 text-base text-red-500 text-center'>{isError}</p>
              <p className='mt-3 text-base text-green-500 text-center'>{isMessage}</p>
            </div>
        </div>
    </>
  );
}

export default Login;