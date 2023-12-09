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
            await createDialog('success', 'done')
        } catch (err) {
            console.log('Error posting contact:', err)
            await createDialog('success', 'done')
        }
    }
    submitBtn.removeAttribute('loading')
})

let createDialog = async (label, content) => {
    const dialogEl = document.createElement('sl-dialog');
    dialogEl.setAttribute('label', label);

    // Create dialog content
    const contentEl = document.createElement('p')
    contentEl.innerHTML = content
    dialogEl.appendChild(contentEl)

    // Append dialog to the body
    await document.body.appendChild(dialogEl);

    // Show the dialog
    dialogEl.show();

    // Delete dialog after hide.
    dialogEl.addEventListener('sl-after-hide', () => {
        dialogEl.remove()
    })
}