const express = require("express")
const routes = express.Router();

const productController = require('../controllers/product.controller')

routes.get('/test', productController.testz)

module.exports = routes;
