import Heading from './Heading';
import Section from './Section';

import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

import { benefits } from "../constants";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"
import { animation_heading } from '../../utils/animation';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger); 
gsap.registerPlugin(useGSAP);

const Benefits = () => {
  const containerRef = useRef(null); 

  useGSAP(() => {
    animation_heading('#benifit_heading', { y:0, opacity:1,});
  }, [])

   useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".benefit-item");

      items.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
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
    <Section id="features" crosses>
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
          id="benifit_heading"
          heading_className= " opacity-0 translate-y-20"
        />
        <div ref={containerRef} className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="benefit-item block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="mb-5 text-2xl leading-normal font-bold">
                  {item.title}
                </h5>
                <p className="mb-6 text-slate-300">
                  {item.text}
                </p>
                <div className="flex items-center mt-auto">
                  <img src={item.iconUrl} alt={item.title} width={48} height={48} />
                  <p className="ml-auto text-xs font-bold text-white uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {/* GradientLight fix: only show if item.light is true */}
              {item.light && (
                <div className="absolute inset-0 z-0">
                  <GradientLight />
                </div>
              )}

              <div
                className="absolute inset-0.5 bg-zinc-950"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
