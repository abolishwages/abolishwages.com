// express server
import express from 'express'
const app = express()

// config and environment variables
import config from './config'
const env = process.env.NODE_ENV

// req.body
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// req.cookies
import cookieParser from 'cookie-parser'
app.use(cookieParser())

// use custom routes
import router from './router'
app.use('/', router)

const addr = config[env].addr, port = config[env].port
app.listen(port, addr, () => {
    console.log(`Running ${env} server:`)
    console.log(`Listening on ${addr}:${port} ...`)
})
