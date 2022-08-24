// express
import express from 'express'

// root router
const router = express.Router()

// fs and path
import fs from 'fs'
import path from 'path'

// serve static resources
router.use('/static', express.static(path.resolve(__dirname, 'static')))

// index file and home component
const indexFile = path.resolve(__dirname, 'static', 'markup', 'index.html')
import Home from '../../src/js/pages/Home'

// transform index helper function
import transformIndex from '../aux/transformIndex'

// use custom routes
router.get('/', (req, res) => {

    // page info and resources
    const title = 'Abolish Wages'
    const styles = '/static/styles/home.css'
    const script = '/static/dist/home.js'
    const metaProperties = {
        url: 'https://abolishwages.com',
        title: title
    }

    // read the index file, transform it, and send it
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err || !data) {
            res.status(500).send('An internal error has occurred.')
        } else {
            const markup = transformIndex(data, title, metaProperties, styles, Home, script)
            res.status(200).send(markup)
        }
    })
})

// redirect to main site
router.get('*', (req, res) => {
    res.redirect('/')
})

// export the root router
export default router
