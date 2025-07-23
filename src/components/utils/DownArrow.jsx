import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DownArrow() {
    const downArrow = useRef()

    function handleDownArrowClick() {
        gsap.to(window, {duration: .7, scrollTo:{ y: ".about-me-container", offsetY: 100 }, ease: 'power4'})
    }

    useEffect(() => {
        gsap.to(downArrow.current, {y: 30, duration: 1, repeat: -1, yoyo: true, ease: 'power1'})
    }, []);
    
    return <i ref={downArrow} onClick={handleDownArrowClick} className="bi bi-chevron-compact-down"></i>
}