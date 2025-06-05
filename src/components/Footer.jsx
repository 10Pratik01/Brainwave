import React from 'react'
import Section from './Section'
import { socials } from '../constants'
const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 ">
        <div className='max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] flex sm:justify-between items-center justify-center gap-10 max-sm:flex-col'>
            <p className='text-sm text-gray-500 lg:block '>© {new Date().getFullYear()}. All rights reserved. </p>
            <ul className='flex gap-5 flex-wrap'>
                {socials.map((item)=>(
                    <a href={item.url} key={item.id} className='flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-full transition-colors hover:bg-zinc-800 hover:border-2 hover:border-gray-400 ease-in-out '>
                        <img src={item.iconUrl} width={16} height={16} alt={item.url} />
                    </a>
                ))}
            </ul>
        </div>
        
    </Section>
  
)
}

export default Footer