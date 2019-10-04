const productsSku = require('../../../productsSku')
const { 
   fetchAllProducts, 
   fetchProductById, 
   fetchProductBySku } = require('../../services/fetchProducts')
const {setexCache} = require('../middleware/redis')

module.exports = class ProductController {

   async getAll(req, res, next){
      try{
         const products = await fetchAllProducts(productsSku);
         setexCache('products', 60, products) //almacena los productos en el cache por 60s
         console.log("Fetch Data")
         res.status(200).json(products)
      }catch(e){
         next({ error: e, status: e.status || 500, message: e.message })
      }
   }

   async getById(req, res, next){
      try{
         const id = req.params.id;
         const product = await fetchProductById(id);
         res.status(200).json(product)
      }catch(e){
         next({ error: e, status: e.status || 500, message: e.message })
      }
   }

   async getBySku(req, res, next){
      try{
         const sku = req.params.sku;
         const product = await fetchProductBySku(sku);
         res.status(200).json(product)
      }catch(e){
         next({ error: e, status: e.status || 500, message: e.message })
      }
   }

}