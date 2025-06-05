import React from 'react'
import { pricing } from '../constants'
import { check, disc02 } from '../assets'
import Button from './Button'

const PricingList = () => {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
        {pricing.map((item, index) => (
            <div key={item.id} className='hover:scale-101 duration-100 transition-all ease-in-out  w-[19rem] max-lg:w-full h-full px-6 bg-zinc-900 border border-zinc-700 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-5
             
             '>
                <h4 
                   className={`text-[2rem] leading-normal mb-4 ${index === 0 ? 'text-amber-300': index === 1? 'text-purple-400' : 'text-rose-300'}`}>
                    {item.title}
                </h4>

                <p className='font-light text-[0.875rem] leading-6 md:text-base min-h-[4rem] mb-3 text-whtie/50'>{item.description}</p>

                <div className='flex items-center h-[5.5rem] mb-6'>
                  {item.price && (
                    <>
                      <div className='text-[2rem] leading-normal md:text-[2.5rem]'> 
                        $
                      </div>
                      <div className='text-[5.5rem] leadign-none font-bold'> 
                        {item.price}
                      </div>
                    </>
                  )}
                </div>
                <Button className="w-full mb-6 " href={item.price ? "/pricing" : "mailto:info@pratik.patil"} white={!!item.price}>
                  {item.price ? "Get started" :"Contact us"}
                </Button>
                <ul>
                  {item.features.map((feature, index) => (
                    <li key={index} className='flex items-start py-5 border-t border-y-zinc-800'>
                      <img src={check} alt="" />
                      <p className='ml-4 font-light text-[0.875rem] leading-6 md:text-base'>{feature}</p>
                    </li>
                  ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default PricingList