import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const heroSVG = document.querySelector('#heroSVG')
const frontRectangleEl = document.querySelector('.front-rectangle')
const middleRectangleEl = document.querySelector('.middle-rectangle')
const backRectangleEl = document.querySelector('.back-rectangle')
const emptyEllipsesEl = document.querySelector('.empty-ellipses')
const letterAEl = document.querySelector('.letter-a')
const heroLogo = document.querySelector('.hero-logo')

// Event listeners for heroSVG

heroSVG.addEventListener('mouseover', applyFill)
heroSVG.addEventListener('mouseout', removeFill)

function applyFill() {
    setElementFill(emptyEllipsesEl, "#f2f4f3")
    setElementFill(letterAEl, "#f2f4f3")
    setElementFill(frontRectangleEl, "#E3E8E5")
    setElementFill(middleRectangleEl, "#FFFFFF")
    setElementFill(backRectangleEl, "#f2f4f3")
}

function removeFill() {
    setElementFill(emptyEllipsesEl, "#15616d")
    setElementFill(letterAEl, "#15616d")
    setElementFill(frontRectangleEl, "#15616d")
    setElementFill(middleRectangleEl, "#1D8596")
    setElementFill(backRectangleEl, "#197280")
}

// Helper function to set element fill color

function setElementFill(element, color) {
    if (element) {
        element.style.fill = color
    }
}

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ignoreMobileResize: true})

// Hero SVG Animation

gsap.to(heroSVG, {
    rotation: 360,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: 'body',
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
})

gsap.to(heroLogo, {
    rotation: -360,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: 'body',
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
})

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