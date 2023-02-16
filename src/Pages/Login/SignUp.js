import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const SignUp = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {
    register,
    formState: { errors },
    handleSubmit,
    } = useForm();
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

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
      createUserWithEmailAndPassword(data.name, data.password);
    };

  return (
    <div className="flex h-screen justify-center items-center">
   <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
     <h2 className="text-center text-2xl font-bold">Sign UP</h2>
     <form onSubmit={handleSubmit(onSubmit)}>

     <div className="form-control w-full max-w-xs">
       {/* Name Field  */}
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input 
            type="text" 
            placeholder="Enter Your Name" 
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required :{
                value: true,
                message: "Name is Require"
              }
            })}
            />
        <label className="label">
        {errors.name?.type === 'required' && <p className="text-red-500" role="alert">{errors.name.message}</p>}
        </label>
     </div>

     <div className="form-control w-full max-w-xs">
       {/* Email Field  */}
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input 
            type="name" 
            placeholder="Enter Your Email" 
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required :{
                value: true,
                message: "Email is Require"
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid name!'
              }
            })}
            />
        <label className="label">
        {errors.name?.type === 'required' && <p className="text-red-500" role="alert">{errors.name.message}</p>}
        {errors.name?.type === 'pattern' && <p className="text-red-500" role="alert">{errors.name.message}</p>}
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
        <input className="btn w-full max-w-xs text-white" type="submit" value="Sign Up" />
     </form>
     <p className="text-center"><small>Already have an account ? <Link className="text-primary" to="/login">Please login</Link></small></p>
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

export default SignUp;