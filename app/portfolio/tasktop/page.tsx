import Image from 'next/image'
import React from 'react'
import tasktop from '@/public/image/tasktop.jpg'
import { FaRegEye } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

function page() {
    return (
        <div className='bg-zinc-900 p-5 md:px-10 md:rounded-lg rounded-br-lg rounded-bl-lg h-110 overflow-auto'>
            <div className='relative border-b-1 border-neutral-800 pb-5'>
                <h1 className='font-bold text-white text-xl pr-4'>تسک تاپ</h1>
                <span className='p-4.5 rounded-full circle-gra absolute top-0'></span>
            </div>

            <div>
                <Image src={tasktop} alt='tanor' className='rounded-lg' />
            </div>

            <div className='py-4'>
                <p className='text-slate-300 font-thin text-sm text-justify leading-6.5'>
                    با تسک تاپ پیشرفته برنامه ریزی کن
                    <br />
                    ویژگی های تسک تاپ :
                </p>
                <ul className='mt-3 list-disc mr-4 text-slate-300 font-thin text-sm'>
                    <li>برنامه ریزی برای چهار روز</li>
                    <li>نمودار عملکرد چهار روزه</li>
                    <li>نمودار وضعیت تسک ها</li>
                    <li>دریافت جمله های انگیزشی</li>
                    <li>ذخیره و تایمر کردن تسک ها</li>
                    <li>تغییر اطلاعات کاربری</li>
                </ul>
                <span className='flex items-center gap-1 text-red-500 text-sm mt-3 font-thin'>
                    <RiErrorWarningLine className='text-base' />
                    با موبایل وارد نشوید!
                </span>
            </div>

            <div>
                <a href='https://tasktop.vercel.app/' target="_blank" rel="noopener noreferrer">
                    <button className='py-2 px-4 bg-yellow-500 text-white flex items-center gap-3 rounded-md cursor-pointer'>
                        نمایش
                        <FaRegEye />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default page