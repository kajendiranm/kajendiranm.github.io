import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    useEffect(() => {
        const races = document.querySelector('.races')
        const horContainer = document.querySelector('.horizontal-scroll-container')

        function getScrollAmount() {
            let racesWidth = races.scrollWidth
            return -(racesWidth - window.innerWidth + parseFloat(window.getComputedStyle(document.querySelector('.container')).paddingRight))
        }
        gsap.to(races, {
            scrollTrigger: {
                trigger: horContainer,
                start: 'top top',
                end: () => `+=${getScrollAmount() * -1}`,
                pin: horContainer,
                scrub: 2,
                invalidateOnRefresh: true
            },
            x: getScrollAmount,
            duration: 3,
            ease: 'none',
        })
        let heads = races.querySelectorAll('.races h2')


        gsap.to('.hori1', {
            scrollTrigger: {
                trigger: '.hori1',
                start: 'center 60%' ,
                scrub: 1
            },
            duration: 1,
            scale: 1.2,
            delay: 2,
            color: '#00ADB5'
        })

        gsap.to('.hori2', {
            scrollTrigger: {
                trigger: '.hori2',
                start: 'center 60%' ,
                scrub: 1.5
            },
            duration: 1,
            scale: .7,
            delay: 2,
            rotate: 360
        })

        let tween3 = gsap.timeline()

        tween3.from('.hori3', {
            scrollTrigger: {
                trigger: '.hori3',
                start: '+=' + (heads[2].scrollWidth - (window.innerWidth / 2)),
                scrub: 1
            },
            opacity: 0,
            duration: 2,
            scale: 1.5,
            delay: 2
        })
        .to('.hori3', {
            scrollTrigger: {
                scrub: 1
            },
            color: '#00ADB5',
            duration: 2,
            delay: 2,
        })

        gsap.from('.hori4', {
            scrollTrigger: {
                trigger: '.hori4',
                start: '+=' + (heads[3].offsetWidth - (window.innerWidth /2) )  ,
            },
            duration: 1.5,
            opacity: 0,
            delay: 1,
            rotationY: 180,
        })

        gsap.from('.o', {
            scrollTrigger: {
                trigger: '.hori4',
                start: '+=' + (heads[3].offsetWidth - (window.innerWidth /2) )  ,
            },
            y: -40,
            duration: 1,
            delay: 2,
            ease: "bounce",
        })

        gsap.to('.exclamatory', {
            rotationX: 180,
            duration: 1,
            repeat: -1,
            yoyo: true,
            color: '#00ADB5',
            ease: "power1.inOut",
            repeatDelay: .6
        })
    }, []);
    return (
        <div className="horizontal-scroll-container">
            <div className="races">
                <h2 className="hori1">Make</h2>
                <h2 className="hori2">it</h2>
                <h2 className="hori3">Happen</h2>
                <h2 className="hori4">N<span className="o">o</span>w<span className="exclamatory">!</span></h2>
            </div>
        </div> 
    )
}