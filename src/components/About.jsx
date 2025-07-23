import kaja_img from "../assets/images/kaja/kaja.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const proImage = useRef();
    
    useEffect(() => {
        gsap.from(proImage.current, {
            scrollTrigger: {
                trigger: proImage.current,
                start: 'top 55%',
            },
            x: -50,
            opacity: 0,
            duration: .6
        });
    }, []);
    
    return (
        <div className="about-me-container">
            <h1 className="title"><i className="bi bi-person-fill"></i>About Me</h1>
            <div className="about-me-main">
                <img ref={proImage} src={kaja_img} alt="Kajendiran M - Full Stack Developer" />
                <p>Hello! I'm Kajendiran M, a passionate tech learner pursuing a bachelor's degree in Computer Science Engineering at University College of Engineering Villupuram. I am deeply interested in full-stack web development, starting my programming journey with HTML, CSS, and JavaScript. I have advanced into backend development using Python's Django framework, expanding my skills in web application development.</p>
            </div>
        </div>
    )
}