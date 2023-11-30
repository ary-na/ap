// Import the setBasePath function from Shoelace utilities.
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'

// Set the base path to the folder with copied Shoelace's assets.
setBasePath('/shoelace')

// Import Shoelace Light theme CSS.
import '@shoelace-style/shoelace/dist/themes/light.css'

// Import Shoelace JS.
import '@shoelace-style/shoelace/dist/shoelace.js'

// Import Bootstrap JS.
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Bootstrap CSS.
import 'bootstrap/dist/css/bootstrap.min.css'

// Import styles.
import './scss/main.scss'