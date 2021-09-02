// const express = require("express")
// const cors = require("cors")
//
// const server = express()
//
// server.use(express.json)
// server.use(cors())
//
// server.get("/", (req, res) => {
//     res.send(`<h1> HEROKU APP GEN</h1>`)
// })
//
// server.get("/api", (req, res) => {
//     res.json(`<h1> HEROKU APP GEN</h1>`)
// })
//
// server.listen(6000, () => {
//     console.log("Listening on port 6000.")
// })
require("dotenv").config()
const express = require('express')
const cors = require('cors')

// console.log("USER >>:", process.env.USER, "HOME>>>:", process.env.HOME)
// console.log("PORT >>:", process.env.PORT, "SECRET >>: ", process.env.API_SECRET)

console.log("USER >>:", process.env.USER)
console.log("HOME>>>:", process.env.HOME)
console.log("PORT >>:", process.env.PORT)
console.log("SECRET >>: ", process.env.API_SECRET)

const PORT = process.env.PORT || 5000
const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(`<h1>Web 45 ROCKS!</h1>`)
})

server.get('/api', (req, res) => {
    res.json({ message: 'Web 45 is awesome!' })
})

server.listen(process.env.PORT, () => {
    console.log(`listening on port ${PORT}`)
})