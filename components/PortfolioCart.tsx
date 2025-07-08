import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IPortfolioProps {
    img: StaticImageData,
    title: string,
    p: string,
    link: string
}

function PortfolioCart({ img, title, p, link }: IPortfolioProps) {
    return (
        <Link href={link}>
            <div className='p-3 flex flex-col justify-center border-1 border-zinc-700 rounded-lg cursor-pointer'>
                <div className='overflow-hidden rounded-md'>
                    <Image src={img} alt='image' className='rounded-md hover:scale-110 duration-500' />
                </div>
                <div className='mt-2 mb-1'>
                    <h3 className='text-white text-xl font-bold line-anim'>{title}</h3>
                </div>
                <div>
                    <p className='text-zinc-400 text-xs'>
                        {p}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default PortfolioCart