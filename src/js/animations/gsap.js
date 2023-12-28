import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ignoreMobileResize: true})

// Hero SVG

gsap.to('#heroSVG', {
    rotation: 360,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: 'body',
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
})

gsap.to('.hero-logo', {
    rotation: -360,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: 'body',
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
})

// About me

gsap.to(".glass-container", {
    scrollTrigger: {
        trigger: '.glass-container',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
    },
    y: 30,
    ease: "ease",
})