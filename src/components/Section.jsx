import React from "react";
import SectionSvg from '../assets/svg/SectionSvg';

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children  
}) => {
  return (
    <div
      id={id}
      className={`relative ${
        customPaddings || `py-11 lg:py-16 xl:py-40 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } ${className || ""}`}
    >
      {children}

     
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-zinc-800 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-zinc-800 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-gray-700 ${
              crossesOffset || ""
            } pointer-events-none lg:block xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
