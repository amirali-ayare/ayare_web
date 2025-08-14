import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

function PortfolioContainer() {

    // const portfolioCarts = [
    //     {
    //         img: img1,
    //         title: 'تنور',
    //         p: 'حالا میتونید آنلاین غذا سفارش بدید! با قابلیت کد تخفیف، ثبت نام و ...',
    //         link: '/portfolio/tanoor'
    //     },
    //     {
    //         img: img2,
    //         title: 'آیشاپ',
    //         p: 'وبسایت فروشگاهی لپتاپ و موبایل آیشاپ',
    //         link: '/portfolio/ishop'
    //     },
    //     {
    //         img: img3,
    //         title: 'تسک تاپ',
    //         p: 'سیستم مدیریت تسک بصورت پیشرفته. برنامه ریزی برای چهار روز، نمودار ...',
    //         link: '/portfolio/tasktop'
    //     },
    //     {
    //         img: img4,
    //         title:'دندانپزشکی گلکسی' ,
    //         p: 'رزرو آنلاین نوبت دندانپزشکی با مشخص کردن ساعت، روز و دکتر. دارای پنل ...',
    //         link: '/portfolio/galaxy-dentistry'
    //     },
    //     {
    //         img: img5,
    //         title: 'وبسایت شخصی',
    //         p: 'دمو وبسایت شخصی',
    //         link: '/portfolio/personal-1'
    //     },
    // ]

    return (
        <div className='bg-zinc-900 p-5 md:px-10 md:rounded-lg rounded-br-lg rounded-bl-lg h-110 overflow-auto'>
            <div className='relative border-b-1 border-neutral-800 pb-5'>
                <h1 className='font-bold text-white text-xl pr-4'>نمونه کارها</h1>
                <span className='p-4.5 rounded-full circle-gra absolute top-0'></span>
            </div>

            <div className='flex flex-col gap-5 w-full h-full items-center justify-center'>
                <div className='flex'>
                    <IoSettingsSharp className='text-xl text-yellow-600 mt-7 spinSmall' />
                    <IoSettingsOutline className='text-5xl text-yellow-600 spinBig' />
                </div>
                <div>
                    <h3 className='text-yellow-600 text-sm text-center'>نمونه کارها درحال بروزرسانی هستند و این صفحه تا چند روز در دسترس نیست.</h3>
                </div>
            </div>

            {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4'>
                {
                    portfolioCarts.map((item , index)=>{
                        return <PortfolioCart key={index} {...item} />
                    })
                }
            </div> */}

        </div>
    )
}

export default PortfolioContainer