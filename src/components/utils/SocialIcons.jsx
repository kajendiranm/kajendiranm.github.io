import { useEffect } from "react";
import { gsap } from "gsap";

import SocialIcon from "./SocialIcon";

const socialIcons = [
    { name: "linkedin", link: "https://www.linkedin.com/in/kajendiranm/", color: "#0a66c2" },
    { name: "github", link: "https://github.com/kajendiranm", color: "white" },
    { name: "facebook", link: "https://www.facebook.com/mkajendiran/", color: "#1877f2" },
    { name: "twitter", link: "https://twitter.com/kajendiranm", color: "white" },
    { name: "instagram", link: "https://www.instagram.com/kajendiran_m", color: "#F14D49" },
    { name: "discord", link: "https://discord.com/users/kajendiranm#0001", color: "#7289da" },
];

export default function SocialIcons() {
    useEffect(() => {
        const icons = document.querySelectorAll(".social-media-icons a");
        icons.forEach((icon) => {
            icon.addEventListener("mouseenter", () => {
                gsap.to(icon, { y: 5 });
            });
            icon.addEventListener("mouseleave", () => {
                gsap.to(icon, { y: 0 });
            });
        });
    }, []);

    return (
        <div className="social-media-icons">
            {socialIcons.map((icon) => (
                <SocialIcon 
                    key={icon.name} 
                    name={icon.name} 
                    link={icon.link} 
                    color={icon.color}
                />
            ))}
        </div>
    )
}