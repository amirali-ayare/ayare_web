import Image from 'next/image'
import React from 'react'
// import back from '@/public/image/ezgif.gif'
import back from '@/public/image/lights.jpg'
import profile from '../public/image/profile_blackwhite.jpg'
import { RiTelegram2Line } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

function ProfilePicture() {

    const socialLinks = [
        {
            icon: <RiTelegram2Line />,
            link: 'https://t.me/itsayare'
        },
        {
            icon: <FaWhatsapp />,
            link: 'https://wa.me/989053775869'
        },
        {
            icon: <LuPhoneCall />,
            link: 'tel:09053775869'
        },
        {
            icon: <HiOutlineMail />,
            link: 'mailto:ayareamirali@gmail.com'
        }
    ]

    return (
        <div className='w-full flex flex-col items-center'>
            <div>
                <Image src={back} alt='background' className='h-45 object-cover'/>
            </div>
            <div className='w-full flex items-center justify-center'>
                <Image src={profile} alt='prfile' className='rounded-full object-cover object-[0_25%] relative -top-15 w-30 h-30 border-2 border-black shadow-[-6px_6px_0px_0px_rgba(184,_128,_63,_0.60)]'/>
            </div>

            <div className='flex flex-col items-center gap-3 justify-center relative -top-8'>
                <h2 className='text-slate-200 font-bold text-3xl'>امیرعلی ایاره</h2>
                <h5 className='text-sm text-zinc-400 font-light'>Web Programmer</h5>
            </div>

            <div className='flex items-center justify-between w-70'>
                {
                    socialLinks.map((item, index)=>{
                        return(
                            <a key={index} href={item.link}>
                                <span className='hover:text-yellow-500 active:text-yellow-500 duration-300 text-zinc-300 text-xl'>{item.icon}</span>
                            </a>
                        )
                    })
                }
            </div>  
        </div>
    )
}

export default ProfilePicture