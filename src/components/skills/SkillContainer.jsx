import Skill from "./Skill";

import html from "../../assets/images/skills/html.png";
import css from "../../assets/images/skills/css.png";
import javascript from "../../assets/images/skills/javascript.png";
import react from "../../assets/images/skills/react.png";
import python from "../../assets/images/skills/python.png";
import django from "../../assets/images/skills/django.svg";
import drf from "../../assets/images/skills/django-rest-framework.png";
import aws from "../../assets/images/skills/aws.png";
import gsapLogo from "../../assets/images/skills/gsap.svg";
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    
    useEffect(() => {
        const skills = document.querySelectorAll('.skill');
        skills.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                toggleActions: 'restart pause restart none',
                start: 'top 80%',
                end: 'top bottom',
                scrub: 2
            },
            ease: 'power3',
            x: '-1000%',
            duration: 1,
            opacity: 0
        })
    })
    }, []);
    return (
        <>
            <h1 className="skill-title"><i className="bi bi-code-slash"></i>Skills</h1>
            <div className="skills">
                <Skill skill="HTML" image={html} />
                <Skill skill="CSS" image={css} />
                <Skill skill="Javascript" image={javascript} />
                <Skill skill="React" image={react} />
                <Skill skill="Python" image={python} />
                <Skill skill="Django" image={django} />
                <Skill skill="DRF" image={drf} />
                <Skill skill="GSAP" image={gsapLogo} />
                <Skill skill="AWS" image={aws} />
            </div>
        </>
    )
}