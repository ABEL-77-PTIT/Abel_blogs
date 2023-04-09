import express from 'express'
import Controller from '../controllers/product.js'

const router = express.Router()

/* GET home page. */
router.get('/products', Controller.get)

export default router
