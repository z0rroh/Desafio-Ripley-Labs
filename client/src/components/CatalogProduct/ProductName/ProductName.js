import React from 'react';
import './ProductName.css'

const ProductName = ({ name }) => {
   return (
      <div className="catalog-product-details__name">
         { name }
      </div>
   );
};

export default ProductName;