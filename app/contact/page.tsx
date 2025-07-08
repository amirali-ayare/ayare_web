import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { LuPhoneCall } from 'react-icons/lu'
import { RiTelegram2Line } from 'react-icons/ri'

function page() {

    const socialLinks = [
        {
            icon: <RiTelegram2Line />,
            link: 'https://t.me/itsayare',
            text: 'itsAyare@'
        },
        {
            icon: <FaInstagram />,
            link: 'http://instagram.com/_u/ayarecode/',
            text: 'ayareCode'
        },
        {
            icon: <FaWhatsapp />,
            link: 'https://wa.me/989053775869',
            text: '09053775869'
        },
        {
            icon: <LuPhoneCall />,
            link: 'tel:09053775869',
            text: '09053775869'
        },
        {
            icon: <HiOutlineMail />,
            link: 'mailto:ayareamirali@gmail.com',
            text: 'ayareamirali@gmail.com'
        }
    ]


    return (
        <div className='bg-zinc-900 p-5 md:px-10 md:rounded-lg rounded-br-lg rounded-bl-lg h-110 overflow-auto'>
            <div className='relative border-b-1 border-neutral-800 pb-5 mb-5'>
                <h1 className='font-bold text-white text-xl pr-4'>ارتباط</h1>
                <span className='p-4.5 rounded-full circle-gra absolute top-0'></span>
            </div>

            <div>
                <p className='text-slate-300 font-thin text-sm text-justify leading-6.5'>
                    برای مشاوره و سفارش میتونیم از طریق لینک های زیر با هم در ارتباط باشیم!
                </p>
            </div>
            <div className='mt-5'>
                {
                    socialLinks.map((item, index) => {
                        return (
                            <div className='w-full flex items-center justify-between my-5' key={index}>
                                <Link href={item.link}><span className='text-2xl text-zinc-500 hover:text-yellow-500 active:text-yellow-500 duration-300'>{item.icon}</span></Link>
                                <span className='font-thin text-zinc-500'>{item.text}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default page