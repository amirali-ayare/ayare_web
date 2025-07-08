import Image from 'next/image'
import React from 'react'
import galaxy from '@/public/image/galaxy.jpg'
import { FaRegEye } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

function page() {
    return (
        <div className='bg-zinc-900 p-5 md:px-10 md:rounded-lg rounded-br-lg rounded-bl-lg h-110 overflow-auto'>
            <div className='relative border-b-1 border-neutral-800 pb-5'>
                <h1 className='font-bold text-white text-xl pr-4'>دندانپزشکی گلکسی</h1>
                <span className='p-4.5 rounded-full circle-gra absolute top-0'></span>
            </div>

            <div>
                <Image src={galaxy} alt='tanor' className='rounded-lg' />
            </div>

            <div className='py-4'>
                <p className='text-slate-300 font-thin text-sm text-justify leading-6.5'>
                    رزرو نوبت دندانپزشکی
                    <br />
                    ویژگی های گلکسی :
                </p>
                <ul className='mt-3 list-disc mr-4 text-slate-300 font-thin text-sm'>
                    <li>رزرو نوبت دلخواه</li>
                    <li>پنل ادمین</li>
                    <li>فیلتر افراد رزرو شده</li>
                    <li>جستجو با نام یا کدملی افراد رزرو شده</li>
                    <li>رسپانسیو (اجرا در تمام دیوایس ها)</li>
                </ul>
                <span className='flex items-center gap-1 text-slate-300 text-sm mt-3 font-thin'>
                    برای وارد شدن به پنل ادمین، جلوی آدرس وبسایت /adminpage بنویسید.
                    <br />
                    ( http://galaxy-dentistry.vercel.app/adminpage )
                </span>
                <span className='flex items-center gap-1 text-red-500 text-sm mt-3 font-thin'>
                    <RiErrorWarningLine className='text-base' />
                    این پروژه شبیه سازی است و واقعی نیست. با خیال راحت نوبت رزرو کنید!
                </span>
            </div>

            <div>
                <a href='http://galaxy-dentistry.vercel.app' target="_blank" rel="noopener noreferrer">
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