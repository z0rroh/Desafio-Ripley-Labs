import React, { useState, useEffect } from 'react';
import CatalogComponent from './Catalog.component'
import axios from 'axios'

const api = process.env.REACT_APP_REST_API

const CatalogContainer = () => {
   const [products, setProducts] = useState([])

   useEffect(() => {
      const fetchProducts = async () => {
         const res = await axios.get(`${api}/product`)
         setProducts(res.data)
      }
      fetchProducts()
   },[])

   return (
      <CatalogComponent 
         products={products}/>
   );
};

export default CatalogContainer;