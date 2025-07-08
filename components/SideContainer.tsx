import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TiArrowLeftOutline } from "react-icons/ti";
import Link from 'next/link';


function SideContainer() {

    const logos = [
        {
            icon: <FaReact />
        },
        {
            icon: <RiNextjsFill />
        },
        {
            icon: <RiTailwindCssFill />
        },
        {
            icon: <SiTypescript />
        },
        {
            icon: <IoLogoJavascript />
        },
        {
            icon: <FaCss3 />
        },
        {
            icon: <SiDjango />
        },
        {
            icon: <FaNode />
        },
    ]

    return (
        <div className='bg-zinc-900 p-5 md:px-10 h-110 overflow-auto md:rounded-lg rounded-br-lg rounded-bl-lg'>
            <div className='relative border-b-1 border-neutral-800 pb-5'>
                <h1 className='font-bold text-white text-xl pr-4'>درباره من</h1>
                <span className='p-4.5 rounded-full circle-gra absolute top-0'></span>
            </div>

            <div className='py-4'>
                <p className='text-slate-300 font-thin text-sm text-justify leading-6.5'>
                    یک وب‌سایت، فقط مجموعه‌ای از کدها و تصاویر نیست.
                    وب‌سایت، برند شماست.<span className='font-bold text-slate-100'> ویترین شما در دنیای دیجیتال.</span>
                    اولین نگاه، اولین برداشت، و شاید تنها فرصتی که دارید تا دیده بشید و موندگار بمونید.

                    من اینجـا هستم تا به شما کمک کنم حضور آنلاینتون فقط زیبا نباشه؛
                    بلکه هدفمند، قابل اعتماد و تأثیرگذار باشه.
                    چه یک فروشگاه آنلاین راه‌اندازی می‌کنید، چه یک سایت شخصی برای معرفی خودتون،
                    من طراحی می‌کنم تا هویت شما در دل دیزاین سایت دیده بشه و احساس بشه.

                    سادگی، سرعت، و تجربه‌ی کاربری روان، پایه‌ی هر کاریه که انجام می‌دم.
                    سایتی که با شما حرف بزنه، نه فقط برای شما کار کنه.
                </p>
            </div>

            <div className='relative border-b-1 border-neutral-800 pb-5 mt-4'>
                <h1 className='font-bold text-white text-xl pr-4'>پروژه ی شما</h1>
                <span className='p-4.5 rounded-full circle-gra absolute top-0'></span>
            </div>

            <div className='py-4'>
                <p className='text-slate-300 font-thin text-sm text-justify leading-6.5'>
                    بروز ترین تکنولوژی هایی مانند Next JS که در سایت های بزرگی مثل دیجیکالا به کار رفته اند
                    در سایت شما استفاده میشود. با توجه به بزرگی پروژه شما تکنولوژی های مورد نیاز انتخاب میشود و در صورت لازم امکان جابجایی آنها هم وجود دارد تا بهترین عملکرد حاصل شود.
                </p>


                <div className='grid grid-cols-2 lg:grid-cols-4 mt-4'>
                    {
                        logos.map((item, index) => {
                            return (
                                <div className='border-1 group border-zinc-800 p-3 duration-500 flex items-center hover:border-yellow-500 active:border-yellow-500 justify-center' key={index}>
                                    <span className='text-zinc-600 duration-500 group-hover:text-yellow-500 group-active:text-yellow-500 text-5xl'>{item.icon}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div>
                <Link href={'/contact'}>
                    <button className='py-2 cursor-pointer text-yellow-500 flex items-center gap-1 line-anim2'>
                        ثبت سفارش
                        <TiArrowLeftOutline />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SideContainer