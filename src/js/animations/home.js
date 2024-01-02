const heroSVGEl = document.querySelector('#heroSVG')
const frontRectangleEl = document.querySelector('.front-rectangle')
const middleRectangleEl = document.querySelector('.middle-rectangle')
const backRectangleEl = document.querySelector('.back-rectangle')
const emptyEllipsesEl = document.querySelector('.empty-ellipses')
const letterAEl = document.querySelector('.letter-a')

// Event listeners for heroSVG

heroSVGEl.addEventListener('mouseover', applyFill)
heroSVGEl.addEventListener('mouseout', removeFill)

export function applyFill() {
    setElementFill(emptyEllipsesEl, "#f2f4f3")
    setElementFill(letterAEl, "#f2f4f3")
    setElementFill(frontRectangleEl, "#E3E8E5")
    setElementFill(middleRectangleEl, "#FFFFFF")
    setElementFill(backRectangleEl, "#f2f4f3")
}

export function removeFill() {
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