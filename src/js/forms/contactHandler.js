import Contact from "../api/Contact";
import {validateForm} from "../validators/contactFormValidator";

document.querySelector('form').addEventListener('submit', async e => {
    e.preventDefault()
    let isFormValid = await validateForm()
    if (isFormValid) {
        const formData = new FormData(e.target);
        try {
            await Contact.postContact(formData)
        } catch (err) {
            console.log('Error posting contact:', err)
        }
    }
})