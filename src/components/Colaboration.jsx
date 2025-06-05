import Section from "./Section"
import Button from "./Button"
import {collabApps, collabContent, collabText} from "../constants"
import { brainwaveSymbol, check } from "../assets"
import {LeftCurve, RightCurve} from "./design/Collaboration"
import { animation_heading } from "../../utils/animation"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap";
import { useEffect, useRef } from "react"

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);


const Colaboration = () => {
    useGSAP(()=>{
        animation_heading("#colaboration_heading", {
            y:0, 
            opacity:1,
        })
    },[])
    const containerRef = useRef(null); 
   useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".benefit-item");

      items.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          x: 50,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      ScrollTrigger.refresh(); // ensure layout is correct
    }, containerRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);
  return (

    <Section crosses>
        <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] lg:flex">
            <div className="max-w-[25rem]" >
                <h2 id="colaboration_heading" className="opacity:0 translate-y-20 text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight mb-4 md:mb-8">AI Chat App for seamless
                </h2>

                <ul ref={containerRef}  className="max-w-[22rem] mb-10 md:mb-14">
                    {collabContent.map((item)=>(
                        <li key={item.id} className="mb-3 py-3 benefit-item">
                            
                            <div className="flex items-center ">
                                <img src={check} width={24} height={24} alt="check" className="" />
                                <h6 className="ml-5 font-light text-[0.875rem] leading-6 md:text-base"> {item.title}</h6>
                            </div>
                                {item.title && <p className="font-light text-[0.875rem] leading-6 md:text-base mt-3 text-gray-400">{item.text}</p>}
                        </li>
                    ))}
                </ul>
                    <Button>
                        Try it Now
                    </Button>
            </div>
            
            <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p className="font-light text-[0.875rem] leading-6 md:text-base mb-8 text-gray-400 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto"> {collabText}</p>
                    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-zinc-900 rounded-full -translate-x-1/2 scale-75 md:scale-100 ">
                        <div className="flex w-60 aspect-square m-auto border border-zinc-900 rounded-full ">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full ">
                                <div className="flex items-center justify-center w-full h-full bg-zinc-950 rounded-full">
                                    <img src={brainwaveSymbol}
                                    width={48} height={48} alt="brainwave" />
                                </div>
                            </div>
                        </div>
                        <ul>
                            {collabApps.map((app, index) => (
                                <li
                                key={app.id}
                                className="absolute top-1/2 left-1/2 w-[3.2rem] h-[3.2rem] -translate-y-7 -translate-x-7"
                                style={{
                                    transform: `rotate(${index * (360 / collabApps.length)}deg) translateY(-11rem) rotate(-${index * (360 / collabApps.length)}deg)`,
                                    transformOrigin: "center",
                                }}
                                >
                                <div className="flex items-center justify-center w-full h-full bg-zinc-900 border border-white/15 rounded-xl">
                                    <img
                                    src={app.icon}
                                    alt={app.title}
                                    className="m-auto"
                                    width={app.width}
                                    height={app.height}
                                    />
                                </div>
                                </li>
                            ))}
                        </ul>
                        <LeftCurve />
                        <RightCurve />
                    </div>
            </div>
        </div>
    </Section>
  )
}

export default Colaboration