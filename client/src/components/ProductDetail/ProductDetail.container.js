import React, { useState, useEffect } from 'react';
import ProductDetailComponent from './ProductDetail.component'

const ProductDetailContainer = props => {
   const [product, setProduct] = useState({})

   useEffect(()=> {
      setProduct(props.product)
   },[props.product])
   
   return (
      <ProductDetailComponent product={product}/>
   );
};

export default ProductDetailContainer