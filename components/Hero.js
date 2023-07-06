import React from 'react'
import Navbar from './Navbar'
import TopRect from './TopRect'
import Link from 'next/link'
import Image from 'next/image'
import bg from '../public/BgSpace.png'
import richa from '../public/hero_img.png'
import star from '../public/Stars.png'
import clouds from '../public/Clouds.png'
import { motion } from "framer-motion";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div>
      <TopRect />
      <Navbar />
      <div className="h-[100vh]">
        <div className="absolute inset-0">
          <Image
            src={bg}
            className="w-full h-full object-cover"
          />
        </div>

        <div className='bg-transparent text-white relative z-1 mt-24 w-max mx-28 flex flex-col gap-1'>
          <div className='flex text-lg'>
              <Image
                src={star}
                alt='star'
                height='100%'
                width='100%'
              />
            Trusted by
            <span className='text-[#8A4EE0] font-bold px-1'> 1000+ </span>
            people
          </div>
          <div className='text-[56px] font-extrabold'>
            Discover About 
            <Typed
              className="gradient_text pl-4"
              strings={[
                "Life decisions",
                "Relationships",
                "Destiny",
                "Self-Growth",
              ]}
              typeSpeed={40}
              backSpeed={30}
              loop
            />
          </div>
          <div className='text-[#C2C2C2] text-2xl'>
            Get in touch with central india's most eminent <br/> vedic astrologer.
          </div>
          <div className='glass-btn text-2xl font-bold mt-4 w-max px-10 py-4 mt-8'>
            Book Appointment
          </div>
        </div>
        <div className='h-screen w-6/12'>
        <Image
        src={richa}
        alt = "Acharya Richa Gour"
        className='absolute bottom-0 right-14 h-auto'
        />
        </div>
        <Image
        src={clouds}
        alt = "Clouds image"
        className='absolute bottom-[-18rem] w-full cover'
        />
      </div>
    </div>
  )
}

export default Hero