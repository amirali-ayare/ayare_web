'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {

    const Links = [
        {
            txt: 'درباره من ',
            link: '/'
        },
        {
            txt: 'نمونه کارها ',
            link: '/portfolio'
        },
        {
            txt: 'سوالات متداول ',
            link: '/questions'
        },
        {
            txt: 'ارتباط ',
            link: '/contact'
        }
    ]

    const path = usePathname();

    return (
        <div className='w-full flex items-center justify-around pb-4'>
            {
                Links.map((item) => {
                    return (
                        <Link key={item.link} href={item.link}><span className={item.link === path ? 'font-bold text-yellow-500 text-sm md:text-base' : 'text-sm md:text-base text-slate-50 font-light line-anim'}>{item.txt}</span></Link>
                    )
                })
            }
        </div>
    )
}

export default Navbar