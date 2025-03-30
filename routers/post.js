const express = require('express')
const router = express.Router()
const controller = require("../cotroller/postController")

router.get("/", controller.getList);

router.get("/:id", controller.getById);

router.get("/", controller.getList);

router.get("/", controller.getList);

router.get("/", controller.getList);

module.exports = router