import spotifyImage from "../../assets/images/projects/spotify_clone.png";
import todoImage from "../../assets/images/projects/todo.png";
import airbnbImage from "../../assets/images/projects/airbnb.png";
import currencyConverterImage from "../../assets/images/projects/currency_converter.png";
import Project from "./Project";
import { useEffect } from "react";

import { gsap } from "gsap";

export default function Projects() {
    useEffect(() => {
        const projects = document.querySelectorAll('.project')
        projects.forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 60%',
                    toggleActions: 'restart none none reset'
                },
                y: -80,
                duration: .4,
                ease: 'easeout',
                opacity: 0
            })
        })
    }, []);
    return (
        <>
            <h1 className="projects-title"><i className="bi bi-laptop"></i>Projects Done!</h1>
            <div className="projects">
                <Project 
                    image={spotifyImage} 
                    title="Spotify Clone"
                    description="Realistic Spotify clone, developed in django with better user interface. It  offers user authentication, artist profiles, and music playback controls."
                    link="https://kajendiranm.pythonanywhere.com/"
                />
                <Project 
                    image={todoImage} 
                    title="Django ToDo Application"
                    description="Interactive ToDo web application in Django. It includes with user authentication, registration, login and task management."
                    link="https://kajendiran.pythonanywhere.com/todo/"
                />
                <Project 
                    image={airbnbImage} 
                    title="Airbnb Clone"
                    description="Recreated the frontend of Airbnb website using basic HTML, CSS and Javascript."
                    link="https://kajendiranm.github.io/Airbnb-Clone/"
                />
                <Project 
                    image={currencyConverterImage} 
                    title="Currency Converter"
                    description="It is a live currency converter, which is implemented by external web API's to fetch live currency values."
                    link="https://kajendiranm.github.io/Currency_Converter/"
                />
            </div>
        </>
    )
}