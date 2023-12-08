import emailValidator from 'email-validator'

document.querySelector('form').addEventListener('submit', async e => {
    e.preventDefault()
    let isFormValid = await validateForm()
    if (isFormValid)
        console.log("submitted")
})

let resetForm = (el, defaultMessage) => {
    return new Promise(resolve => {
        el.classList.remove('show')
        setTimeout(() => {
            el.textContent = defaultMessage
            resolve()
        }, 200)
    })
}

let validateForm = async () => {

    const nameErrorEl = document.querySelector("#nameError")
    const emailErrorEl = document.querySelector("#emailError")
    const messageErrorEl = document.querySelector("#messageError")

    const nameInputEl = document.querySelector('#name')
    const emailInputEl = document.querySelector('#email')
    const messageTextAreaEl = document.querySelector('#message')

    const excludedNames = ['Test', 'test', 'Admin', 'admin', 'User', 'user']
    const nameRegexPattern = `^(?!${excludedNames.join('|')}$)[A-Za-z\\s'-]+$`
    const nameRegex = new RegExp(nameRegexPattern)

    const messageRegexPattern = /^[a-zA-Z0-9,.!?()\s]+$/
    const messageRegex = new RegExp(messageRegexPattern)

    let isValid = true

    // Reset form
    await Promise.all([
        resetForm(nameErrorEl, 'Name error placeholder.'),
        resetForm(emailErrorEl, 'email error placeholder.'),
        resetForm(messageErrorEl, 'Message error placeholder.')
    ])

    if (nameInputEl.value === '') {
        nameErrorEl.textContent = 'You must enter your name.'
        nameErrorEl.classList.add('show')
        isValid = false
    } else if (!nameRegex.test(nameInputEl.value)) {
        nameErrorEl.textContent = 'You must enter a valid name.'
        nameErrorEl.classList.add('show')
        isValid = false
    }

    if (emailInputEl.value === '') {
        emailErrorEl.textContent = 'You must enter your email.'
        emailErrorEl.classList.add('show')
        isValid = false
    } else if (!emailValidator.validate(emailInputEl.value)) {
        emailErrorEl.textContent = 'You must enter a valid email address.'
        emailErrorEl.classList.add('show')
        isValid = false
    }

    if (messageTextAreaEl.value === '') {
        messageErrorEl.textContent = 'You must enter a message.'
        messageErrorEl.classList.add('show')
        isValid = false
    } else if (!messageRegex.test(messageTextAreaEl.value)) {
        messageErrorEl.textContent = 'You must enter a valid message.'
        messageErrorEl.classList.add('show')
        isValid = false
    }
    return isValid;
}