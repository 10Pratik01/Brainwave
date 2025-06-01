import React from "react";
import SectionSvg from '../assets/svg/SectionSvg'

const Section = ({
    className,
    id,
    crosses,
    corssesOffset,
    customPaddings,
    childeren 
}) => {

    return(
        <div id={id} className={`relative ${customPaddings || `py-11 lg:py-16 xl:py-40 ${crosses ? " lg:py-32 xl:py-40 " : "" } ${className || ''} `}`}>
            {childeren}

            <div className="hidden top-0 left-5 w-0.25 h-full bg-zinc-900 pointer-events-none md:block lg:left-7.5 xl:left-10 " />
            <div className="hidden top-0 left-5 w-0.25 h-full bg-zinc-900 pointer-events-none md:block lg:right-7.5 xl:right-10 " />

            {crosses && (
                <>
                    <div className={`
                            hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-gray-900 ${corssesOffset && corssesOffset} pointer-events-none lg:block xl:left-10 xl:right-10
                        `} />
                        <SectionSvg corssesOffset={corssesOffset}/>
                </>
            )}
        </div>
    )
}

export default Section; 