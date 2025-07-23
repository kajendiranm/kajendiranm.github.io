import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const homeNav = useRef();
    const skillsNav = useRef();
    const projectsNav = useRef();
    const contactNav = useRef();

    function onHomeClick() {
        gsap.to(window, { duration: 1, scrollTo:{ y: "body" }, ease: 'power4'});
    }

    function onSkillsClick() {
        gsap.to(window, { duration: 1, scrollTo:{ y: ".skills", offsetY: 120 }, ease: 'power4'});
    }

    function onProjectsClick() {
        gsap.to(window, { duration: 1, scrollTo:{ y: ".projects", offsetY: 135 }, ease: 'power4'});
    }

    function onContactClick() {
        gsap.to(window, { duration: 1, scrollTo:{ y: ".contact-me", offsetY: 90 }, ease: 'power4'});
    }

    return (
        <header>
          <h1 className="logo">Kaja</h1>
          <div className="navbar">
              <ul>
                  <a ref={homeNav} onClick={onHomeClick}>Home</a>
                  <a ref={skillsNav} onClick={onSkillsClick}>Skills</a>
                  <a ref={projectsNav} onClick={onProjectsClick}>Projects</a>
                  <a ref={contactNav} onClick={onContactClick}>Contact</a>
              </ul>
          </div>
      </header>
    )
}