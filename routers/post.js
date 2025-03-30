const express = require('express')
const router = express.Router()
const controller = require("../cotroller/postController")

router.get("/", controller.getList);

router.get("/:id", controller.getById);

router.post("/", controller.insert);

router.put("/:id", controller.update);

router.delete("/:id", controller.destroy);

module.exports = router