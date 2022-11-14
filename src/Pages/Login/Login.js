import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const {register, formState: {errors},  handleSubmit} = useForm()
    const handalLogin = (data) => {
        console.log(data);
    }
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
                {...register("password", { required: "Passsword is Required" , minLength: {value: 6, message: 'Password must be 6 Characters & Longer'}})}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">Forget Password?</span>
              </label>
              {errors.password && (
                <p className="text-error my-2">{errors.password?.message}</p>
              )}
            </div>

            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Login"
            />
          </form>
          <p className="my-3">
            New To Dcotors Portal?
            <Link className="text-secondary" to="/signup">
              Create New Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full mt-3">
            Continue With Google
          </button>
        </div>
      </div>
    );
};

export default Login;