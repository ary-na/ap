const slIconButton = document.querySelector('header > div > sl-icon-button')
const slDrawer = document.querySelector('nav > sl-drawer')
const drawerItems = document.querySelectorAll('sl-drawer > ul > li a')

// Show drawer on drawer icon click.
slIconButton.addEventListener('click', async () => {
    await slDrawer.show()
})

// Hide drawer on drawer item click.
drawerItems.forEach(item => item.addEventListener('click', async e => {
    e.preventDefault()
    await slDrawer.hide()

    const itemAttr = item.getAttribute('href')

    if (itemAttr === '#about' || itemAttr === '#work' || itemAttr === '#contact') {
        document.querySelector(itemAttr).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    } else {
        window.location.reload()
    }
}))