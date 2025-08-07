import React from 'react'
import FAQItem from './components/Collapse'

function page() {

    const faq = [
        {
            question: 'سفارشم چقدر طول میکشه و هزینه اش چقدره؟',
            answer: 'برای تعیین قیمت و زمان مورد نیاز پروژه، باید مشخص شه که پروژه چیه و چقدر زحمت برای تکمیل اون لازمه.'
        },
        {
            question: 'از کجا بفهمم پروژه ام تو چه مرحله ایه؟',
            answer: 'میتونید از طریق پیوی تلگرام یا واتساپ از وضعیت پروژه تون مطلع شید'
        },
        {
            question: 'چجوری پرداخت کنم؟',
            answer: '40% تا 60% قیمت قبل از شروع پروژه و مابقی بعد تحویل پروژه.'
        },
        {
            question: 'آیا برای تغییرات بعدی پس از تحویل پروژه، هزینه اضافی می پردازم؟',
            answer: 'بستگی به تغییرات داره، اگر قابلیت جدیدی برای اضافه شدن میخواید شامل هزینه میشه ولی تغییرات ظاهری رایگانه.'
        },
        {
            question: 'چگونه مطمئن شویم که طرحی که شما به ما ارائه می‌دهید، با سلیقه و نیازهای ما همخوانی دارد؟',
            answer: 'قبل از شروع تمام جزئیات از شما پرسیده میشود تا دقیقا طبق سلیقه ی شما طراحی شود.'
        },
        {
            question: 'بعد از اتمام پروژه پشتیبانی هم دارید؟',
            answer: 'بله، پشتیبانی تا 3 ماه رایگان است.'
        },
        {
            question: 'آیا خودم میتونم محتوای سایتم رو عوض کنم؟',
            answer: 'بله، حتما قبل شروع پروژه این موضوع را مطرح کنید تا براتون اضافه شه.'
        },
    ]

    return (
        <div className='bg-zinc-900 p-5 md:px-10 md:rounded-lg rounded-br-lg rounded-bl-lg h-110 overflow-auto'>
            <div className='relative border-b-1 border-neutral-800 pb-5'>
                <h1 className='font-bold text-white text-xl pr-4'>سوالات متداول</h1>
                <span className='p-4.5 rounded-full circle-gra absolute top-0'></span>
            </div>

            <div className='flex flex-col items-center gap-4 mt-4'>
                {
                    faq.map((item, index)=>{
                        return <FAQItem key={index} {...item} />
                    })
                }
            </div>
        </div>
    )
}

export default page