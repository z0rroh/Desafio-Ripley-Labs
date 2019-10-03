const productsSku = require('../../../productsSku')
const { 
   fetchAllProducts, 
   fetchProductById, 
   fetchProductBySku } = require('../../services/fetchProducts')

module.exports = class ProductController {

   async getAll(req, res, next){
      try{
         const products = await fetchAllProducts(productsSku);
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