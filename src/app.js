const express = require("express")
const app = express()

const filmes = require('./routes/filmesRoutes')

app.use(express.json())

app.use("/filmes", filmes)

module.exports = app


