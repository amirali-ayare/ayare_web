import Image from 'next/image'
import React from 'react'
import personal from '@/public/image/personal.jpg'
import { FaRegEye } from "react-icons/fa";

function page() {
    return (
        <div className='bg-zinc-900 p-5 md:px-10 md:rounded-lg rounded-br-lg rounded-bl-lg h-110 overflow-auto'>
            <div className='relative border-b-1 border-neutral-800 pb-5'>
                <h1 className='font-bold text-white text-xl pr-4'>سایت شخصی</h1>
                <span className='p-4.5 rounded-full circle-gra absolute top-0'></span>
            </div>

            <div>
                <Image src={personal} alt='tanor' className='rounded-lg' />
            </div>

            <div className='py-4'>
                <p className='text-slate-300 font-thin text-sm text-justify leading-6.5'>
                    سایت شخصی
                    <br />
                    ویژگی های این سایت :
                </p>
                <ul className='mt-3 list-disc mr-4 text-slate-300 font-thin text-sm'>
                    <li>افکت بوردر هاور انیمیشن</li>
                    <li>رسپانسیو (اجرا در تمام دیوایس ها)</li>
                    <li>قابلیت متصل کردن به پیامرسان ها</li>
                </ul>
            </div>

            <div>
                <a href='https://perswebayare.vercel.app' target="_blank" rel="noopener noreferrer">
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