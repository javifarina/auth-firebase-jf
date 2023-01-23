

import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import {UserAuth} from '../context/AuthContext'
export const Signup = () => {
  //State of form and error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {createUser} =UserAuth();
  const navigate = useNavigate()
  //function 
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError('')
    try{
        await createUser(email, password)
        navigate('/account')
    }catch(e){
      setError(e.message)
      console.log(e.message)
    }

  }
  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2x1 font-bold py-2">Sing up to your Account</h1>
        <p>
          Don't have an Account yet ?
          <Link to="/" className="underline">
            Sign Up
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input  onChange={(e)=>setEmail(e.target.value)} className="border p-3" type="email" />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} className="border p-3" type="password" />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
          Sing Up
        </button>
      </form>
    </div>
  );
};
export default Signup;
