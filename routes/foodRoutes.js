const express = require("express");
const router = express.router();
const foodController = require('../controllers/foodController')

router.get('/',foodController.getFoodPage)

module.exports = router;