import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const handelSingUp = (data )=> {
        console.log(data);
    }
    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h3 className="text-xl text-center">Signup</h3>
          <form onSubmit={handleSubmit(handelSingUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name filed is Required" })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-error my-2">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-error my-2">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: "Password is Required", minLength: {value: 6, message: "Password must be 6 Charaters or Long"} })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-error my-2">{errors.password.message}</p>
              )}
            </div>

            <input
              className="btn btn-accent w-full mt-6"
              type="submit"
              value="Signup"
            />
          </form>
          <p className="my-3">
            Already have an account?
            <Link className="text-secondary" to="/login">
              Please Login
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

export default SignUp;