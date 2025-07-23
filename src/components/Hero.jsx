import DownArrow from "./utils/DownArrow";
import DynamixText from "./utils/DynamicText";
import SocialIcons from "./utils/SocialIcons";

export default function Hero() {
    return (
        <>
            <div className="main">
                <span className="hithere">Hi There!</span>
                <strong className="name">I'm Kajendiran M</strong>
                <span className="context">Passionate Tech Learner | Exploring Full Stack with Django Framework !</span>
                <DynamixText />
                {/* <button className="about-btn">My Skills <i className="bi bi-arrow-down-circle-fill"></i></button> */}
                <SocialIcons />
                <DownArrow />
            </div>
        </>
    )
}