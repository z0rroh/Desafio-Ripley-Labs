import React, { useState, useEffect } from 'react';
import CatalogComponent from './Catalog.component'
import { products as productsList } from '../../productList'

const CatalogContainer = () => {
   const [products, setProducts] = useState([])

   useEffect(() => {
      setProducts(productsList)
   },[])

   return (
      <CatalogComponent 
         products={products}/>
   );
};

export default CatalogContainer;