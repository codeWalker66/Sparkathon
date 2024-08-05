import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

const Signin = () => {
  return (
    <div>
          <div class="form-container sign-in-container w-full h-[100vh] bg-white  flex items-center justify-center ">
		<form action="#" className='flex flex-col items-center justify-center w-[30%]  bg-white border-2 border-[#ff4b2b]  rounded-[10px] p-10 py-20 '>
			<h1 className='text-7xl text-[#ff4b2b] uppercase pb-8 font-bold' >Sign in</h1>
			<div class="social-container flex text-4xl gap-6 pb-5">
				<a href="#" class="social" className='text-[#0866ff]'><FaFacebook /></a>
				<a href="#" class="social"><FcGoogle /></a>
				<a href="#" class="social" className='text-[#0a78b5]'><FaLinkedin /></a>
			</div>
			<span className='font-light'>or use your account</span>
            <div className=' p-3 w-full flex flex-col gap-2'> 
            <input className='bg-[#eeeeee] p-3 ' type="email" placeholder="Email" />
			<input className='bg-[#eeeeee] p-3' type="password" placeholder="Password" />
            </div>
			
			<a href="#" className='font-light pb-3 '>Forgot your password?</a>
			<button className='bg-[#ff4b2b] p-3 px-10 text-white uppercase font-semibold rounded-full border-2 border-[#ff4b2b] hover:bg-white hover:text-[#ff4b2b] hover:border-2'>Sign In</button>
		</form>
	</div>
    </div>
  )
}

export default Signin