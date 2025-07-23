import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";

const texts = ['Developer', 'Designer', 'Programmer'];

gsap.registerPlugin(TextPlugin);

export default function DynamixText() {
    const dynamicText = useRef();

    useEffect(() => {
        gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1});
        const masterTl = gsap.timeline({repeat: -1}).pause();
        const boxTl = gsap.timeline();

        // boxTl.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
        boxTl.from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
        .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
        .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
        texts.forEach(word => {
            let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
            tl.to('.text', {duration: 1, text: word})
            masterTl.add(tl)
        })
    }, []);

    return (
        <h2 className="dynamicText" ref={dynamicText}>
            <span className="box"></span>
            <span className="hi">I'm</span>
            <span className="text"></span>
            <span className="cursor">_</span>
        </h2>
    )
}