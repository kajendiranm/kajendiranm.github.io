const dynamicText = document.querySelector('.dynamicText')
const texts = ['Developer', 'Designer', 'Programmer']

gsap.registerPlugin(ScrollTrigger) 

const socialIcons = document.querySelectorAll('.social-media-icons a')

const aboutBtn = document.querySelector('.about-btn')
const aboutarrow = document.querySelector('.about-btn i')

//For dynamic text Animations
let index = 0
function indexChanger(){
    if(index === texts.length-1)
        index = 0;
    else
        index++
}
setInterval(() => {
    indexChanger()
    dynamicText.style.setProperty('--char', `${texts[index].length + 2}ch`);// = `${texts[index].length+2}s`
    dynamicText.textContent = texts[index]
},4000)

gsap.from(dynamicText, {y: -50, duration: 1, opacity: .2})
// For navigators
const homeNav = document.querySelector('.navbar ul :nth-child(1)')
const skillsNav = document.querySelector('.navbar ul :nth-child(2)')
const projectsNav = document.querySelector('.navbar ul :nth-child(3)')
const contactNav = document.querySelector('.navbar ul :nth-child(4)')

homeNav.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo:{ y: "body" }, ease: 'power4'});
})

skillsNav.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo:{ y: ".skills", offsetY: 120 }, ease: 'power4'});
})

projectsNav.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo:{ y: ".projects", offsetY: 135 }, ease: 'power4'});
})

contactNav.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo:{ y: ".contact-me", offsetY: 90 }, ease: 'power4'});
})

// For Up Arrow
const upArrow = document.querySelector('.uparrow')
upArrow.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo:{ y: "body" }, ease: 'power4'});
})
gsap.from(upArrow, {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top 60%',
        end: 'top 54%',
        scrub: 1
    },
    y: '-100vh',
    duration: 1,
    ease: 'power4'
})


//For Buttons
aboutBtn.addEventListener('mouseenter', () => {
    gsap.to(aboutarrow, {x: 5})
})
aboutBtn.addEventListener('mouseleave', () => {
    gsap.to(aboutarrow, {x: 0})
})

//For Scrolling button
aboutBtn.addEventListener('click', () => {
    gsap.to(window, { duration: .7, scrollTo:{ y: ".skills", offsetY: 120 }, ease: 'power4'});
})

//For SocialMedia Animations
socialIcons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {y: 5})
    })
    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {y: 0})
    })
})

// For Down Arrows - More
const downArrow = document.querySelector('.main>i')
gsap.to(downArrow, {y: 30, duration: 1, repeat: -1, yoyo: true, ease: 'power1'})

downArrow.addEventListener('click', () => {
    gsap.to(window, {duration: .7, scrollTo:{ y: ".skill-title", offsetY: 100 }, ease: 'power4'})
})
 
// For Skills
const skills = document.querySelectorAll('.skill')
skills.forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            toggleActions: 'restart pause restart none',
            start: 'top 90%',
            end: 'top bottom',
            scrub: 2,
        },
        ease: 'power3',
        x: '-1000%',
        duration: 1,
        opacity: 0
    })
})

// For Projects
const projects = document.querySelectorAll('.project')
projects.forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top 60%',
        },
        y: -100,
        duration: 1,
        ease: 'bounce',
        opacity: 0
    })
})


const heart = document.querySelector('.credits i')


const tl = gsap.timeline({ repeat: -1 });

tl.from(heart, { scale: 1.25, duration: 0.25 , repeat: 1})
.to(heart, { scale: 1, duration: 0.3, delay: 0.2 });