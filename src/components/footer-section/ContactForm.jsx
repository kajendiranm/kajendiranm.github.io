import { useRef, useState } from "react";

import { gsap } from "gsap";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

let shake = gsap.timeline();
let shakeDuration = .06;

function shakeTheElement(element) {
    shake.to(element, {x: -7, duration: shakeDuration})
    .to(element, {x: 7, duration: shakeDuration})
    .to(element, {x: 0, duration: shakeDuration})
    .to(element, {x: -7, duration: shakeDuration})
    .to(element, {x: 7, duration: shakeDuration})
    .to(element, {x: 0, duration: shakeDuration})
}

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState({
        status: '',
        message: ''
    });

    let spinnerClass = "spinner";
    let submitBtnClass = "button-text";

    spinnerClass += loading ? "" : " hide";
    submitBtnClass += loading ? " hide" : "";

    const name = useRef();
    const email = useRef();
    const message = useRef();

    function handleSubmit() {
        if(name.current.value == '') {
            shakeTheElement(name.current)
            name.current.focus()
            return
        }
        else if(email.current.value === ''){
            shakeTheElement(email.current)
            email.current.focus()
            return
        }
        else if(message.current.value === '') {
            shakeTheElement(message.current)
            message.current.focus()
            return
        }
        if(!(emailRegex.test(email.current.value))){
            shakeTheElement(email.current)
            email.current.focus()
            return
        }

        setLoading(true);

        async function postData() {
            let response;
            try {
                    response = await fetch('https://kajendiran.pythonanywhere.com/portfolio/post_feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'name': name.current.value,
                        'email': email.current.value,
                        'message': message.current.value
                    })
                });
            } catch (error) {
                setResult({
                    status: 'error',
                    message: "Something went wrong. Please try again."
                })
                return;
            }

            setLoading(false);
            if (!response.ok) {
                setResult({
                    status: 'error',
                    message: "Something went wrong. Please try again."
                })
                return;
            }

            const data = await response.json();

            setResult({
                status: 'success',
                message: `Hey ${data.name}, I got your message!`
            })
            setTimeout(() => {
                setResult({
                    status: '',
                    message: ''
                })
            }, 10 * 1000);
        }
        postData();
    }

    return (
        <>
            <div className="contact-me">
                <form action="">
                    <h1 className="head">
                        <span><i style={{marginRight: "10px", color: "white"}} className="bi bi-person-lines-fill"></i>Contact Me</span></h1>
                    <div className="uname formbox">
                        <label htmlFor="name">Name</label>
                        <input required type="text" id="name" ref={name} />
                    </div>
                    <div className="email formbox">
                        <label htmlFor="email">Email</label>
                        <input required type="email" id="email" ref={email} />
                    </div>
                    <div className="message formbox">
                        <label htmlFor="message">Message</label>
                        <textarea required name="" id="message" cols="30" rows="10" ref={message}></textarea>
                    </div>
                    <button type="button" onClick={handleSubmit}><span className={submitBtnClass}>Submit</span>
                        <div className={spinnerClass}></div>
                    </button>
                </form>
                {result.status && 
                    <div className={`form-response ${result.status === "success" ? "success" : "error"}`}>
                        {result.message}
                    </div>
                }
            </div>
        </>
    )
}