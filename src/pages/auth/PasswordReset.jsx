import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import NavBar from "../../components/NavBar";

function PasswordReset() {

    const {passwordResetOnForget, isMessage} = useContext(AuthContext);

    function handleResetPassword(event){
        event.preventDefault();

        const form = event.target;
        const email = event.target.email.value;

        passwordResetOnForget(email)
        form.reset();
    }

  return (
        <>
        <NavBar></NavBar>
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 shadow-2xl p-[100px]">
            <h3 className='poppins-semibold text-3xl text-center p-10'>Reset Your Password</h3>
            <span className="block w-full h-[1px] bg-gray-300"></span>
            <div className="card-body">
                <form onSubmit={handleResetPassword}>
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name="email" placeholder="Email" />
                    <button className="btn bg-secondary text-white mt-4">Send</button>
                  </fieldset>
                </form>

                 <p className='mt-3 text-base text-green-500 text-center'>{isMessage}</p>
            </div>
            </div>
        </div>
        </>
  );
}

export default PasswordReset;