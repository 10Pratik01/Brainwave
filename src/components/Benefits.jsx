import Heading from './Heading';
import Section from './Section';

import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

import { benefits } from "../constants";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
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
