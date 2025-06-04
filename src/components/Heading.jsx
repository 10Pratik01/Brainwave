import React from 'react'

const Heading = ({className, title}) => {
  return (
    <div className={`${className} max-2-[50rem] ,mx-auto mb-12 lg:mb-20`}>
        {title && <h2 className=' text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight'>{title}</h2>}
    </div>
  )
}

export default Heading