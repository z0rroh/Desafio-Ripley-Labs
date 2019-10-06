import React from 'react';
import './ProductImages.css'

const ProductImages = ({ images, fullImage, name }) => {
   return (
      <section className="product-images">
         <ul className="product-image-previews">
         {
            images && (
               images.map((image, idx) => {
                  return(
                     <li className="thumbnail-item is-active" key={`image-${idx}`}>
                        <img src={image} alt={`${name}-${idx}`}/>
                     </li>
                  )
               })
            )
         }
         </ul>
         <div className="product-carousel-container gallery-container">
            <div className="item">  
               <img src={fullImage} alt={name}/>
            </div>
         </div>
      </section>
   );
};

export default ProductImages;