const dynamicText = document.querySelector('.dynamicText')
const texts = ['Developer', 'Designer', 'Programmer']

// gsap.registerPlugin(SplitText) 
gsap.registerPlugin(ScrollTrigger) 

const socialIcons = document.querySelectorAll('.social-media-icons a')

const aboutBtn = document.querySelector('.about-btn')
const aboutarrow = document.querySelector('.about-btn i')

//For dynamic text Animations
let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: -1}).pause()
let boxTl = gsap.timeline()

// boxTl.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
boxTl.from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
texts.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 1, text: word})
  masterTl.add(tl)
})


// gsap.from(dynamicText, {y: -50, duration: 1, opacity: .2})

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
        trigger: '.about-me-container',
        start: 'top 60%',
        end: 'top 54%',
        scrub: 1
    },
    y: '-100vh',
    duration: 1,
    ease: 'power4'
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
    gsap.to(window, {duration: .7, scrollTo:{ y: ".about-me-container", offsetY: 100 }, ease: 'power4'})
})

// For Profile Image
let proImage = document.querySelector('.about-me-main img')
gsap.from(proImage, {
    scrollTrigger: {
        trigger: proImage,
        start: 'top 55%',
    },
    x: -50,
    opacity: 0,
    duration: .6
})


// For Skills
let horiElement = document.querySelector('.horizontal-scroll-container')
function getHoriWidth() {
    return horiElement.scrollWidth
}
const skills = document.querySelectorAll('.skill')
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



// For Projects
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


const heart = document.querySelector('.credits i')


const tl = gsap.timeline({ repeat: -1 });

tl.from(heart, { scale: 1.25, duration: 0.25 , repeat: 1})
.to(heart, { scale: 1, duration: 0.3, delay: 0.2 });