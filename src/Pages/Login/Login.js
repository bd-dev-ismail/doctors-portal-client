import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const {register, formState: {errors},  handleSubmit} = useForm();
    const { signIn, withGoogle, user, forgetPassword } =
      useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [forgetPass, setForgetPass] = useState(null);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if(token){
      navigate(from, { replace: true });
    }
    
    const handalLogin = (data) => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setLoginUserEmail(data.email);
          
        })
        .catch(err => {
          console.log(err.message);
          setLoginError(err.message)
        });
    };
    //login with google
    const handalGoogle = ()=> {
      withGoogle()
      .then(result=> {
        const user = result.user;
        console.log(user);
        navigate("/")
      })
      .catch(err => console.log(err))
    };

    //Forget password!!
    const handelForgetPassword = () => {
      console.log(forgetPass);
      if (!forgetPass){
        return toast.warning('Please type you email')
      }
        forgetPassword(forgetPass)
          .then(() => {
            toast.success("Password reset Request! Check Your Email");
          })
          .catch((err) => toast.warning(err.message));
    };
    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h3 className="text-xl text-center">Login</h3>
          <form onSubmit={handleSubmit(handalLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-error my-2">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Passsword is Required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 Characters & Longer",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have Uppercase Number & Special Character",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <label
                  htmlFor="forget-modal"
                  className="label-text btn btn-link"
                >
                  Forget password?
                </label>
              </label>
              {errors.password && (
                <p className="text-error my-2">{errors.password?.message}</p>
              )}
              {/* Start Modal */}
              <input
                type="checkbox"
                id="forget-modal"
                className="modal-toggle"
              />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="forget-modal"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">Reset Your Password</h3>
                  <div>
                    <label htmlFor="email" className="my-6">
                      Email
                    </label>
                    <input
                    
                      onChange={(e) => setForgetPass(e.target.value)}
                      defaultValue={user?.email}
                      type="email"
                      name="forgetEmail"
                      className="input input-bordered w-full"
                      placeholder="Enter Your Email"
                    />
                    <button
                      htmlFor="forget-modal"
                      onClick={handelForgetPassword}
                      type="submit"
                      className="btn w-full my-4 modal-action"
                    >
                      Forget Password
                    </button>
                    
                  </div>
                </div>
              </div>
              {/* end modal  */}
            </div>

            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Login"
            />
            <div>
              {loginError && <p className="text-warning my-2">{loginError}</p>}
            </div>
          </form>
          <p className="my-3">
            New To Dcotors Portal?
            <Link className="text-secondary" to="/signup">
              Create New Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handalGoogle}
            className="btn btn-outline w-full mt-3"
          >
            Continue With Google
          </button>
        </div>
      </div>
    );
};

export default Login;