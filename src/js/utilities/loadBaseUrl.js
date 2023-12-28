document.addEventListener("DOMContentLoaded", () => {
    const urlString = window.location.href

    // Creating a URL object
    const url = new URL(urlString)

    // Removing the path and keeping only the base URL
    const baseUrl = `${url.protocol}//${url.hostname}${url.port ? `:${url.port}` : ''}`

    // Replace the current URL with the one without the hash
    window.history.replaceState({}, document.title, baseUrl)
})