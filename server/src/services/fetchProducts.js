const axios = require('axios');

const api_ripley = process.env.API_RIPLEY

const fetchAllProducts = async (productsSku) => {
   try{
      const queryParams = productsSku.reduce((acc, productSku) => {
         return acc + `${productSku},`
      }, '')
      const res = await axios.get(`${api_ripley}products/`,{
         params: {
            partNumbers: queryParams,
            format: 'json'
         }
      })
      return res.data
   }catch(e){
      console.log("fetchAllProducts")
      throw e
   }
}

const fetchProductById = async (id) => {
   try{
      const res = await axios.get(`${api_ripley}products/by-id/${id}`)
      return res.data;
   }catch(e){
      console.log("fetchProductById")
      throw e
   }
}

const fetchProductBySku = async (sku) => {
   try{
      const res = await axios.get(`${api_ripley}products/${sku}`)
      return res.data;
   }catch(e){
      console.log("fetchProductBySku")
      throw e
   }
}

module.exports = { fetchAllProducts, fetchProductById, fetchProductBySku }
 