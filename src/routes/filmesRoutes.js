const express = require("express")
const router = express.Router()
const controller = require('../controller/filmesController')

router.get("/", controller.get)
router.get("/:genre", controller.getByGenero)
router.get("/:director",controller.getByDiretor)


router.post("/", controller.postNewMovie)

module.exports = router
