import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const RegisterPage = () =>{

   const [username,setusername] = useState("");
        const [email,setemail] = useState("");
          const [password,setpassword] = useState("");
          const [confirmpassword,setconfirmpassword] = useState("")

const HandleEvents  = async(e)=>{
    e.preventDefault(e)
          if(!username || !email || !password){
            console.log("please enter valid credentials");
            toast.error("enter valid details")
            return
          }



          const response = await fetch("http://localhost:5003/register",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({username,email,password})
          })

          const data = await response.json();
          if(response.ok){
            console.log("data fetched from backend");
            toast.success("registerd sucessfully")
          }else{
            console.log("error in regsitering");
            toast.error("failed to register")
            return
          }
} 
  

   return(
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Create your account
      </h2>

      <form className="space-y-4" onSubmit={HandleEvents}>
        <div>
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Your full name"
            className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
             value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={confirmpassword}
            onChange={(e)=>setconfirmpassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          Register
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <NavLink  to={"/loginpage"} className="text-indigo-600 font-medium hover:underline">
          Sign In
        </NavLink>
      </div>
    </div>
    <ToastContainer position="top-center"/>
  </div>
);

}


