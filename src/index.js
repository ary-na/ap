// Import Bootstrap CSS.
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap JS.
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import the setBasePath function from Shoelace utilities.
import {setBasePath} from '@shoelace-style/shoelace/dist/utilities/base-path'

// Set the base path to the folder with copied Shoelace's assets.
setBasePath('/shoelace')

// Import Shoelace Light theme CSS.
import '@shoelace-style/shoelace/dist/themes/light.css'

// Import Shoelace JS.
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js'
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js'

// Import project's JS files.
import './js/animations/gsap.js'
import './js/animations/home.js'
import './js/forms/contactHandler.js'
import './js/utilities/getCurrentYear.js'
import './js/utilities/loadBaseUrl.js'
import './js/validators/contactValidator.js'

// Import styles.
import './scss/main.scss'