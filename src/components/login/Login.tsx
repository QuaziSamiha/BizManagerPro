import React from 'react'

import Image from "next/image";
import LoginForm from './LoginFrom';
import { ImagesSlider } from '../ui/images-slider';


const imgData=[
    "/images/login/2.jpeg",
    "/images/login/3.jpg",
    "/images/login/1.jpg",
    "/images/login/4.jpg",
]
function Login() {
  return (
    <div className="grid grid-cols-[65%,35%] h-screen">
      {/* Left Content */}
      <div
        className="hidden xl:flex flex-1 justify-center items-center">
            <ImagesSlider overlay={false} images={imgData} autoplay={true}/>
      </div>
      {/* Right Content */}
      <div className="flex justify-center items-center bg-[#202234] relative w-full">
        <div className="absolute right-0 bottom-0 z-0 w-full">
          <Image
            src="/images/login/footerImg.png"
            alt="exclude"
            priority
            width={500}
            height={356}
            className="w-full"
          />
        </div>
        <div className="z-10">
          <LoginForm />
        </div>
      </div>
      
    </div>
  )
}

export default Login