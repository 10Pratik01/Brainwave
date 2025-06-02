import Section from "./Section";
import curve from "../assets/hero/curve.png";

const Hero = () => {
  return (
    <div>
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
                Brainwave <img src={curve} alt="" />
              </span>
            </h1>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
