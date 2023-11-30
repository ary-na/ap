const slIconButton = document.querySelector('nav > div > sl-icon-button')
const slDrawer = document.querySelector('nav > sl-drawer')
const drawerItems = document.querySelectorAll('sl-drawer > ul > li a')

// Show drawer on hamburger menu icon click.
slIconButton.addEventListener('click', () => slDrawer.show())

// Hide drawer on menu item click.
drawerItems.forEach(item => item.addEventListener('click', async () => await slDrawer.hide()))