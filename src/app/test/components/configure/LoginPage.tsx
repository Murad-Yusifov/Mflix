import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo/logo2.png'
import sideImage from "@/assets/loginPage/image.png"

const LoginPage = () => {
  return (
   <div className="w-full flex ">
   <div className="w-4/8 flex justify-center items-center">
     <div className="w-[420px] h-[400px] border bg-[#1F2937] text-white rounded-2xl " style={{padding:"18px"}}>
        <div className="flex items-center gap-2 ">
            <Image src={logo} alt='logo' width={30} height={30} />
            <span>(SIS)</span>
        </div>
            <span>Welcome back</span>
            <p className='text-sm'>Start your website in seconds. Don’t have an account? <span className='text-blue-400 cursor-pointer'>Sign up</span>.</p>
           <div className="flex justify-around  ">
            {/* email */}
            <div className="w-3/8 flex flex-col gap-0.5">
                <label htmlFor="email">email</label>
             <input id='email' type="email" placeholder='name@student.com' className='border-none bg-[#374151] rounded-md h-[30px] 'style={{paddingLeft:"10px"}}/>
            </div>
             {/* password */}
             <div className="w-3/8 flex flex-col gap-0.5 ">
                <label htmlFor="email">password</label>
             <input id='password ' type="password" placeholder='••••••••' className='border-none bg-[#374151] rounded-md pl-0.5 h-[30px]' style={{paddingLeft:"10px"}}/>
            </div>
           </div>
    </div>
    </div>
    <div className="w-4/8 flex justify-center items-center">
      <Image src={sideImage} alt='left' className='w-3/4 h-3/4' />
    </div>
   </div>
  )
}

export default LoginPage