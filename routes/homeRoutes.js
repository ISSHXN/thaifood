// routes/homeRoutes.js - ก ําหนดเส้นทํางส ําหรับหน้ําหลัก
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')
router.get('/',homeController.getHomePage)
module.exports = router;