import Contact from "../api/Contact";
import {validateForm} from "../validators/contactValidator";

document.querySelector('form').addEventListener('submit', async e => {
    e.preventDefault()
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')
    let isFormValid = await validateForm()
    if (isFormValid) {
        const formData = new FormData(e.target);
        try {
            await Contact.postContact(formData)
            await resetForm()
            await createDialog(`I have received your message!`, `Thank you for contacting me ${formData.get('name')}. I have sent you an email with the message details. Please feel free to reply to the email with any additional information or send me another message.`)
        } catch (err) {
            await createDialog('Sorry, your message could not be sent!', 'There was an error sending your message. Please reload the page and try again.')
        }
    }
    submitBtn.removeAttribute('loading')
})

let createDialog = async (label, content) => {
    const dialogEl = document.createElement('sl-dialog')
    dialogEl.setAttribute('label', label)

    // Create dialog content
    const contentEl = document.createElement('p')
    contentEl.classList.add('lh-lg')
    contentEl.innerHTML = content
    dialogEl.appendChild(contentEl)

    // Append dialog to the body
    await document.body.appendChild(dialogEl)

    // Show the dialog
    dialogEl.show();

    // Delete dialog after hide.
    dialogEl.addEventListener('sl-after-hide', () => {
        dialogEl.remove()
    })
}

let resetForm = async () => {
    document.querySelector('#name').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#message').value = ''
}