const slIconButton = document.querySelector('nav > div > sl-icon-button')
const slDrawer = document.querySelector('nav > sl-drawer')
const menuItems = document.querySelectorAll('sl-drawer > ul > li a')

// Show drawer on hamburger menu icon click.
slIconButton.addEventListener('click', () => slDrawer.show())

// Hide drawer on menu item click.
menuItems.forEach(menuItem => menuItem.addEventListener('click', async () => await slDrawer.hide()))