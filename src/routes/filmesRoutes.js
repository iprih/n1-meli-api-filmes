const express = require("express")
const router = express.Router()
const controller = require('../controller/filmesController')

router.get("/", controller.get)

router.get("/:director",controller.getByDiretor)

module.exports = router
