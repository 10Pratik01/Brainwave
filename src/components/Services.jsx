import Section from "./Section"
import Heading from "./Heading"
import { brainwave, check, service1, service2, service3 } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants"
import Generating from "./Generating"
import {PhotoChatMessage, Gradient, VideoBar, VideoChatMessage} from "./design/Services"
import { animation_heading } from "../../utils/animation"
import { useGSAP } from "@gsap/react"


const Services = () => {
  
    useGSAP(()=>{
        animation_heading('#heading_title', {y:0, opacity:1, ease:"power3.out",})
        animation_heading("#heading_text", {y:0, opacity:1, delay:0.5, ease:"power3.out",})
        animation_heading("#smart_ai", {y:0, opacity:1, delay:0.5, ease:"power3.out",})
    },[])
  
    return (
    <Section>
        <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]">
            <Heading id="heading_title" heading_className="opacity-0 translate-y-20" textid="heading_text" title="Generative AI made for creators" text="Brainwave unlocks the potental of AI-powerd applications"/>
            <div className="relative">
                <div className=" relative z-1 flex items-center g-[39rem] mb-5 p-8 border border-white/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] ">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto ">
                        <img className="w-full h-full object-cover md:object-right" 
                        width={800}
                        height={730}
                        src={service1} 
                        alt="Smartest AI " />
                    </div>
                    <div className="relative z-1 max-w-[17rem] ml-auto mb-10 md:mb-5 lg:mb-0">
                        <h4 className=" text-[2rem] leading-normal mb-4 opacity-0 translate-y-10" id="smart_ai" >Smartest AI </h4>
                        <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-gray-300">Brainwave unlocks the potential of AI-powered application</p>
                        <ul className="font-light text-[0.875rem] leading-6 md:text-base">
                            {brainwaveServices.map((item, index)=> (
                                <li key={index} className="flex items-center py-4 border-t border-gray-800 ">
                                    <img width={24} height={24} src={check} alt="" />
                                    <p className="ml-4">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Generating className=" absolute right-4 left-4 bottom-4 border-white/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 lg:w-120" />
                </div>
                
                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[39rem] border border-white/10 rounded-3xl overflow-hidden ">
                        <div className="absolute inset-0 ">
                            <img src={service2} className="h-full w-full object-cover " width={630} height={750} alt="Robot" />
                            
                        </div>
                        
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-zinc-950/0 to-zinc-950/90 lg:p-15 ">
                                <h4 className=" text-[2rem] leading-normal mb-4  " >
                                    Photo editing 
                                </h4>
                                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-gray-300">
                                    Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now
                                </p>
                        
                            </div>
                           <PhotoChatMessage />
                    </div>

                    <div className="p-4 bg-zinc-900/80 rounded-3xl overflow-hidden lg:min-h-[46rem] ">
                        <div className="py-12 px-4 xl:px-8 ">
                            <h4 className="text-[2rem] leading-normal mb-4">Video generation</h4>
                            <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[2rem] text-gray-300">The world&apos;s most powerful AI photo and video art generation engin. What will you create?</p>
                            <ul className="flex items-center justify-between">
                                {brainwaveServicesIcons.map((item, index)=>(
                                    <li key={index} className={`hover:scale-110 ease-in-out duration-75 transition-all rounded-2xl flex items-center justify-center ${index ===2 ? "w-[3.5rem] h-[3.5rem] p-0.25 bg-conic-gradient md:w-[4.5rem]  " : "flex w-10 h-10 bg-zinc-800 md:w-15 md:h-15"}`}>
                                        <div className={`${index === 2 ? "flex items-center justify-center w-full h-full bg-zinc-900 rounded-[1rem]" : ""}`}>
                                            <img src={item} alt={item} width={24} height={24} className=""/>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative h-[20rem] rounded-xl overflow-hidden bg-zinc-950 md:h-[25rem] ">
                            <img src={service3} className="w-full h-full object-cover" width={520} height={400} alt="Robot2" />
                            <VideoChatMessage />
                            <VideoBar />
                        </div>
                    </div>
                </div>
                <Gradient/>
            </div>
        </div>
    </Section>

  )
}

export default Services