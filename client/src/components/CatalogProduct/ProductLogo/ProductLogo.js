import React from 'react';
import './ProductLogo.css'

const ProductLogo = ({ brand }) => {
   const brandName = brand.value;

   return (
      <div className="catalog-product-details__logo-container">
         <div className="brand-logo">
            <span>{ brandName }</span>
         </div>
      </div>
   );
};

export default ProductLogo;