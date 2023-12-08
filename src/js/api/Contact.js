import dotenv from 'dotenv'

dotenv.config()

class Contact {
    async postContact(formData) {
        // send fetch request
        const response = await fetch(`${process.env.API_BASE}/contact`, {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        // if response not ok
        if (!response.ok) {
            let message = 'Problem posting contact form!'
            if (response.status === 400) {
                const err = await response.json()
                message = err.message
            }
            // throw error (exit this function)
            throw new Error(message)
        }

        // convert response payload into json - store as data
        // return data
        return await response.json()
    }
}

export default new Contact()