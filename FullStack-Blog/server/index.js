require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')

const express = require('express')
const app = express()
const Router = require('./routes/route.js')
const connection = require('./database/db.js')

const PORT = process.env.PORT || 5500
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use('/', Router)

// Connect to the database first
connection(username, password).then(() => {
    // Only start the Express server once the database connection is established
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
}).catch(err => {
    console.error("Failed to connect to the database:", err)
})


