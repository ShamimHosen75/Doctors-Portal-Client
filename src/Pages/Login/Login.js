import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

 const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {
    register,
    formState: { errors },
    handleSubmit,
    } = useForm();
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);

    let signInError;

    if( loading || gLoading){
      return <Loading></Loading>
    }

    if(error || gError){
      signInError =  <p className="text-red-500"><small>{error?.message || gError?.message}</small></p>
    }

    if (gUser) {
      console.log(gUser);
    }

    const onSubmit = data => {
      console.log(data);
      signInWithEmailAndPassword(data.email, data.password);
    };
 
 return (
  <div className="flex h-screen justify-center items-center">
   <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
     <h2 className="text-center text-2xl font-bold">Login</h2>
     <form onSubmit={handleSubmit(onSubmit)}>

     <div className="form-control w-full max-w-xs">
       {/* Email Field  */}
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input 
            type="email" 
            placeholder="Enter Your Email" 
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required :{
                value: true,
                message: "Email is Require"
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid email!'
              }
            })}
            />
        <label className="label">
        {errors.email?.type === 'required' && <p className="text-red-500" role="alert">{errors.email.message}</p>}
        {errors.email?.type === 'pattern' && <p className="text-red-500" role="alert">{errors.email.message}</p>}
        </label>
     </div>
     {/* Password Field  */}
     <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input 
            type="password" 
            placeholder="Enter Your Password" 
            className="input input-bordered w-full max-w-xs"
            {...register("password", {
              required :{
                value: true,
                message: "Password is Require"
              },
              minLength: {
                value: 6,
                message: 'Must be 6 characters or longer!'
              }
            })}
            />
        <label className="label">
        {errors.password?.type === 'required' && <p className="text-red-500" role="alert">{errors.password.message}</p>}
        {errors.password?.type === 'minLength' && <p className="text-red-500" role="alert">{errors.password.message}</p>}
        </label>
     </div>
        {signInError}
        <input className="btn w-full max-w-xs text-white" type="submit" value="Login" />
     </form>
     <p className="text-center"><small>New to Doctors Portal ? <Link className="text-primary" to="/signUp">Create New Account</Link></small></p>
     <div className="divider">OR</div>
      <button onClick={() => signInWithGoogle()} 
        className="btn btn-outline">
        Continue with Google
      </button>
    </div>
   </div>
  </div>
 );
};

export default Login;
