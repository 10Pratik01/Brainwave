import { smallSphere, stars } from "../assets"
import Section from "./Section"
import Heading from "./Heading"
import PricingList from "./PricingList"
import {LeftLine, RightLine} from "./design/Pricing"
import { ScrollParallax } from "react-just-parallax";
const Pricing = () => {
  return (
    <Section className="overflow-hidden"  id="pricing">
        <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2 ">

            
            <div className="hidden relative justify-center mb-[6.5rem] lg:flex min-h-[159px] md:min-h-[170px]  ">
                <ScrollParallax isAbsolutelyPositioned >   
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[10.5rem] md:-translate-y-[5rem] z-1 lg:-translate-y-[7rem]">
                        <img src={smallSphere} className="relative z-1" width={255} height={255} alt="sphere"/>
                    </div>
                </ScrollParallax>
                
                <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2" >
                    <img src={stars} className="w-full " width={950} height={400} alt="" />
                </div>
            </div>
            <Heading tag="Get started with Brainwave" title="Pay once, use Forever" />
            <div className="relative">
                <PricingList />
                <LeftLine/>
                <RightLine />
            </div>
            <div className="flex justify-center mt-10 ">
                <a href="/pricing" className="text-xs font-code font-bold tracking-wider uppercase border-b"> See the full details</a>
            </div>
        </div>
    </Section>
  )
}

export default Pricing