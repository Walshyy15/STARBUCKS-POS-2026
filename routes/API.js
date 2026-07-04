const express = require('express')
const router = express.Router()
const drinkController = require('../controllers/drinkController')
const customerController = require('../controllers/customerController')
const customizeController = require('../controllers/customizeController')


router.get('/coreDrinks', drinkController.allDrinks) 
router.get('/customers', customerController.sendCustomer) 
router.get('/allcustomers', customerController.sendAllCustomers) 
router.get('/allnames', customerController.sendNames) 
router.get('/customizations', customizeController.sendCustomizations) 
module.exports = router
