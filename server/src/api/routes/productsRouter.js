const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')
const { getCache } = require('../middleware/redis')

const product = new ProductController()

router.get('/', 
            (req, res, next) => getCache(req, res, next), 
            (req, res, next) => product.getAll( req, res, next ))
router.get('/id/:id', (req, res, next) => product.getById(req, res, next))
router.get('/sku/:sku', (req, res, next) => product.getBySku(req, res, next))

module.exports = router

