import React from 'react';
import './ProductDiscount.css'

const ProductDiscount = ({ discount }) => {
   if ( !discount || discount === 0 ) return null
   return (
      <div className="catalog-product-details__discount-tag">
         { `-${discount}%` }
      </div> 
   )
};

export default ProductDiscount;