import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function UpArrow() {
    const upArrow = useRef(null);

    function handleUpArrowClick() {
        gsap.to(window, { duration: 1, scrollTo:{ y: "body" }, ease: 'power4'});
    }
    
    useEffect(() => {
        gsap.from(upArrow.current, {
            scrollTrigger: {
                trigger: ".about-me-container",
                start: "top 60%",
                end: "top 54%",
                scrub: 1,
            },
            y: "-100vh",
            duration: 1,
            ease: "power4",
        });
    }, []);

    return (
        <div className="uparrow" ref={upArrow} onClick={handleUpArrowClick}>
            <i className="bi bi-arrow-up-circle-fill"></i>
        </div>
    )
}