import { useEffect, useRef } from "react";
import SocialIcons from "../utils/SocialIcons";

import { gsap } from "gsap";

export default function Footer() {
    const heart = useRef();
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.from(heart.current, { scale: 1.25, duration: 0.25 , repeat: 1})
        .to(heart.current, { scale: 1, duration: 0.3, delay: 0.2 });
    }, []);
    return (
        <>
            <div className="footer">
                <div className="thanking">
                    <p>Thank you for visiting my portfolio. 
                        <br />
                        Kindly share your feedback on the above form. 
                        <br />
                        Connect me over with other social platforms.
                    </p>
                </div>
                <SocialIcons />
                <div className="contact-info">
                    <ul>
                        <li><a href="tel:+917094615012"><i className="bi bi-telephone"></i> +91-7094615012 </a></li>
                        <li><a href="mailto:kajendiranm7@gmail.com"><i className="bi bi-envelope"></i> kajendiranm7@gmail.com</a></li>
                        <li><i className="bi bi-geo-alt"></i> TamilNadu - 621714</li>
                    </ul>
                </div>
            </div>
            <div className="credits">
                <p>Designed With <i ref={heart} className="bi bi-heart-fill"></i> By <span className="credits-name">Kajendiran M</span></p>
            </div>
        </>
    )
}