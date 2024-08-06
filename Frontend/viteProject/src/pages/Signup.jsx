import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

const Signup = () => {
  return (
    <div>
          <div class="form-container sign-in-container w-full h-[100vh] bg-white  flex items-center justify-center ">
		<form action="#" className='flex flex-col items-center justify-center w-[30%]  bg-white border-2 border-[#ff4b2b]  rounded-[10px] p-10 py-10 '>
			<h1 className='text-7xl text-[#ff4b2b] uppercase pb-8 font-bold' >Sign up</h1>
			
			<span className='font-light'>Enter your details</span>
            <div className=' p-3 w-full flex flex-col gap-2'> 
            <input className='bg-[#eeeeee] p-3 ' type="email" placeholder="Email" />
            <input className='bg-[#eeeeee] p-3 ' type="text" placeholder="name" />
            <input className='bg-[#eeeeee] p-3 ' type="text" placeholder="address" />
            <input className='bg-[#eeeeee] p-3 ' type="text" placeholder="moblie" />
			<input className='bg-[#eeeeee] p-3' type="password" placeholder="Password" />
			<input className='bg-[#eeeeee] p-3' type="password" placeholder="Confirm Password" />
            </div>
			
            <div class="social-container flex text-4xl gap-6 pb-5">
				<a href="#" class="social" className='text-[#0866ff]'><FaFacebook /></a>
				<a href="#" class="social"><FcGoogle /></a>
				{/* <a href="#" class="social" className='text-[#0a78b5]'><FaLinkedin /></a> */}
			</div>
			<button className='bg-[#ff4b2b] p-3 px-10 text-white uppercase font-semibold rounded-full border-2 border-[#ff4b2b] hover:bg-white hover:text-[#ff4b2b] hover:border-2'>Submit</button>
		</form>
	</div>
    </div>
  )
}

export default Signup