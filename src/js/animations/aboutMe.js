import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.to(".glass-container", {
    scrollTrigger: {
        trigger: '.glass-container',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    },
    y: 30,
    ease: "ease",
})