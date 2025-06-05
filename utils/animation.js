import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const animation_heading = (target, animationprops, scrollprops ) => {
    gsap.to(target, {
        ...animationprops,
        scrollTrigger:{
            trigger:target, 
            start:'top 85%',
            ...scrollprops, 
        }
    })
}


export const animation_stagger = (target, animationprops, scrollprops) => {
    gsap.to(target, {
        ...animationprops,
        scrollTrigger:{
            trigger:target,
            start:'top 85%',
            stagger
        }
    })
}