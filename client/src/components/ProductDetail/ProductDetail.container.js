import React, { useState } from 'react';
import ProductDetailComponent from './ProductDetail.component'

const ProductDetailContainer = props => {
   const [product, setProduct] = useState(props.product)
   
   return (
      <ProductDetailComponent 
         product={product}/>
   );
};

export default ProductDetailContainer