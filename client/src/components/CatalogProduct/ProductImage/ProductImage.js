import React from 'react';
import './ProductImage.css'

const ProductImage = ({ image }) => {
   return (
      <div className="proportional-image-wrapper catalog-product__image-preview">
         <div className="images-preview">
            <div className="images-preview-item is-active">
               <img src={image} alt="productImage"/>
            </div>
         </div>
      </div>
   );
};

export default ProductImage;