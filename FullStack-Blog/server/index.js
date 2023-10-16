require('dotenv').config()
const connection = require('./database/db.js')
const express = require('express')
const app = express()
// console.log("FullStack Blog");

const PORT = process.env.PORT || 5500
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
app.listen(PORT,()=>console.log(`server is listening on port ${PORT}`))
connection(username,password)