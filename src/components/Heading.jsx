import React from 'react'
import Tagline from './Tagline'
const Heading = ({className, title, text, tag, id, heading_className, textid}) => {
  return (
    <div  className={`${className} max-2-[50rem] ,mx-auto mb-12 lg:mb-20 md:text-center` }>
        {tag && <Tagline className="mb-4 md:justify-center z-3" >{tag}</Tagline>}
        {title && <h2 id={id} className={` text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight ${heading_className || ""}`}>{title}</h2>}
        {text && <p id={textid} className={`${heading_className || ""} font-light text-[0.875rem] leading-6 md:text-base mt-4 text-gray-500`}>{text}</p>}
    </div>
  )
}

export default Heading