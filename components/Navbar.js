import React from 'react'
import Link from 'next/link'
import { MdOutlineEditCalendar, MdCall } from 'react-icons/md';



const Navbar = () => {
  return (
   <>
      <div className="bg-transparent text-white  sticky top-0 z-[100] flex justify-center font-bold " >
          <ul className="flex mt-3 w-min text-white px-6 glass">
              <Link href="/">
                <li className="p-4 hover:text-[#ff7010] font-extrabold">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="p-4 hover:text-[#ff7010]">
                About
                </li>
              </Link>
              <Link href="/services">
                <li className="p-4 hover:text-[#ff7010]">
                  Services
                </li>
              </Link>
              <Link href="/services">
                <li className="p-4 hover:text-[#ff7010]">
                  Blogs
                </li>
              </Link>
              <Link href="/services">
                <li className="p-4 hover:text-[#ff7010]">
                  Appointment
                </li>
              </Link>
              <Link href="/contact" className='flex items-center'>
                <li className="p-4 hover:text-[#ff7010] gradient-btn rounded-full px-6 py-2">    
                Contact
                </li>
              </Link>
            </ul>
        </div>
   </>
  )
}

export default Navbar