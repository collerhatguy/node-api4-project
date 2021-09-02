require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const endpoints = require("./endpoints");

app.use(cors())
app.use(express.json())
app.use("/api", endpoints)

module.exports = app