import React from 'react'
import PortfolioCart from './PortfolioCart'
import img1 from '../public/image/tanoor.jpg'
import img2 from '../public/image/ishop.jpg'
import img3 from '../public/image/tasktop.jpg'
import img4 from '../public/image/galaxy.jpg'
import img5 from '../public/image/personal.jpg'

function PortfolioContainer() {

    const portfolioCarts = [
        {
            img: img1,
            title: 'تنور',
            p: 'حالا میتونید آنلاین غذا سفارش بدید! با قابلیت کد تخفیف، ثبت نام و ...',
            link: '/portfolio/tanoor'
        },
        {
            img: img2,
            title: 'آیشاپ',
            p: 'وبسایت فروشگاهی لپتاپ و موبایل آیشاپ',
            link: '/portfolio/ishop'
        },
        {
            img: img3,
            title: 'تسک تاپ',
            p: 'سیستم مدیریت تسک بصورت پیشرفته. برنامه ریزی برای چهار روز، نمودار ...',
            link: '/portfolio/tasktop'
        },
        {
            img: img4,
            title:'دندانپزشکی گلکسی' ,
            p: 'رزرو آنلاین نوبت دندانپزشکی با مشخص کردن ساعت، روز و دکتر. دارای پنل ...',
            link: '/portfolio/galaxy-dentistry'
        },
        {
            img: img5,
            title: 'وبسایت شخصی',
            p: 'دمو وبسایت شخصی',
            link: '/portfolio/personal-1'
        },
    ]

    return (
        <div className='bg-zinc-900 p-5 md:px-10 md:rounded-lg rounded-br-lg rounded-bl-lg h-110 overflow-auto'>
            <div className='relative border-b-1 border-neutral-800 pb-5'>
                <h1 className='font-bold text-white text-xl pr-4'>نمونه کارها</h1>
                <span className='p-4.5 rounded-full circle-gra absolute top-0'></span>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4'>
                {
                    portfolioCarts.map((item , index)=>{
                        return <PortfolioCart key={index} {...item} />
                    })
                }
            </div>

        </div>
    )
}

export default PortfolioContainer