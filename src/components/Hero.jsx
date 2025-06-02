import Section from "./Section";
import curve from "../assets/hero/curve.png";
import Button from "./Button";
import robot from "../assets/hero/robot.jpg"
const Hero = () => {
  return (
   
      <Section
        className="pt-[12rem] -mt-[5.25]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
            <h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6">
              Explore the Possibilites of AI chatiing with{" "}
              <span className="inline-block relative">
                Brainwave <img src={curve} alt="" className="absolute top-full left-0 w-full xl:-mt-2 " width={624}
                height={28} />
              </span>
            </h1>
            <p className="text-zinc-500 max-w-3xl mx-auto mb-6 lg:mb-8  ">
                Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app. 
            </p>
            <Button href="/pricing" white>   
                Get started 
            </Button>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            {/* getting bg-conic-gradient from index.css */}
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient"> 
                <div className="relative bg-zinc-900 rounded-[1rem] ">
                    <div  className="h-[1.4rem] bg-zinc-700 rounded-t-[0.9rem] "/>
                    <img src={robot} alt="hero" width={1440}
                    height={1800} />
                </div>

            </div>
          </div>
        </div>
      </Section>
  );
};

export default Hero;
