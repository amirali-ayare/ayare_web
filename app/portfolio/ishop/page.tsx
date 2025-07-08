import Image from 'next/image'
import React from 'react'
import ishop from '@/public/image/ishop.jpg'
import { FaRegEye } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

function page() {
    return (
        <div className='bg-zinc-900 p-5 md:px-10 md:rounded-lg rounded-br-lg rounded-bl-lg h-110 overflow-auto'>
            <div className='relative border-b-1 border-neutral-800 pb-5'>
                <h1 className='font-bold text-white text-xl pr-4'>آیشاپ</h1>
                <span className='p-4.5 rounded-full circle-gra absolute top-0'></span>
            </div>

            <div>
                <Image src={ishop} alt='tanor' className='rounded-lg' />
            </div>

            <div className='py-4'>
                <p className='text-slate-300 font-thin text-sm text-justify leading-6.5'>
                    آیشاپ، فروشگاه لپتاپ و موبایل
                    <br />
                    ویژگی های آیشاپ :
                </p>
                <ul className='mt-3 list-disc mr-4 text-slate-300 font-thin text-sm'>
                    <li>نمایش استوری فروشگاه ها</li>
                    <li>رسپانسیو (اجرا در تمام دیوایس ها)</li>
                    <li>ثبت نام</li>
                    <li>تغییر اطلاعات کاربری</li>
                    <li>ثبت و سفارش خرید</li>
                </ul>
                <span className='flex items-center gap-1 text-red-500 text-sm mt-3 font-thin'>
                    <RiErrorWarningLine className='text-base' />
                    این پروژه شبیه سازی است و واقعی نیست. با خیال راحت ثبت نام و سفارش بدید!
                </span>
            </div>

            <div>
                <a href='https://ishop-taupe.vercel.app' target="_blank" rel="noopener noreferrer">
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