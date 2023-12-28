import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color')
const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color')
const accentColorPrimary = getComputedStyle(document.documentElement).getPropertyValue('--accent-color-green-primary')
const accentColorSecondary = getComputedStyle(document.documentElement).getPropertyValue('--accent-color-green-secondary')

const heroSVG = document.querySelector('#heroSVG')
const frontRectangleEl = document.querySelector('.front-rectangle')
const middleRectangleEl = document.querySelector('.middle-rectangle')
const backRectangleEl = document.querySelector('.back-rectangle')
const emptyEllipsesEl = document.querySelector('.empty-ellipses')
const letterAEl = document.querySelector('.letter-a')
const heroLogo = document.querySelector('.hero-logo')

// Hero SVG Animation

// gsap.to(heroSVG, {
//     rotation: 360,
//     transformOrigin: "center center",
//     scrollTrigger: {
//         trigger: 'body',
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true
//     }
// })

// gsap.to(heroLogo, {
//     rotation: -360,
//     transformOrigin: "center center",
//     scrollTrigger: {
//         trigger: '#heroSVG',
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true
//     }
// })

// Event listeners for heroSVG

heroSVG.addEventListener('mouseover', applyFill)
heroSVG.addEventListener('mouseout', removeFill)

function applyFill() {
    setElementFill(emptyEllipsesEl, secondaryColor)
    setElementFill(letterAEl, secondaryColor)
    setElementFill(frontRectangleEl, "#E3E8E5")
    setElementFill(middleRectangleEl, "#FFFFFF")
    setElementFill(backRectangleEl, secondaryColor)
}

function removeFill() {
    setElementFill(emptyEllipsesEl, primaryColor)
    setElementFill(letterAEl, primaryColor)
    setElementFill(frontRectangleEl, primaryColor)
    setElementFill(middleRectangleEl, accentColorSecondary)
    setElementFill(backRectangleEl, accentColorPrimary)
}

// Helper function to set element fill color

function setElementFill(element, color) {
    if (element) {
        element.style.fill = color
    }
}

// About me Animation

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
