import React from 'react'

const Heading = ({className, title, text}) => {
  return (
    <div className={`${className} max-2-[50rem] ,mx-auto mb-12 lg:mb-20`}>
        {title && <h2 className=' text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight'>{title}</h2>}
        {text && <p className='font-light text-[0.875rem] leading-6 md:text-base mt-4 text-gray-500' >{text}</p>}
    </div>
  )
}

export default Heading