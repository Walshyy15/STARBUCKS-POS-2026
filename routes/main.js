const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
router.get('/', mainController.menu) 
router.get('/pos', mainController.menu) 
router.post('/order', mainController.order) 
module.exports = router
