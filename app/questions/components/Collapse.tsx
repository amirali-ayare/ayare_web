'use client'

import { useState } from 'react'

interface FAQItemProps {
    question: string
    answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-1 border-neutral-800 p-4 duration-300 w-full rounded-lg cursor-pointer">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center cursor-pointer w-full text-right text-sm md:text-base text-slate-200"
            >
                <span>{question}</span>
                <span className="text-xl">{isOpen ? '−' : '+'}</span>
            </button>

            <div
                className={`transition - all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <p className="text-neutral-500 text-sm md:text-base font-light">{answer}</p>
            </div>
        </div >
    )
}