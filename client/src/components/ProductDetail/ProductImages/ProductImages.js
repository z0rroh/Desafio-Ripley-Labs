import React, { useState } from 'react';
import './ProductImages.css'

const ProductImages = ({ images, name }) => {
   const [selectedImage, setSelectedImage] = useState(images[0])

   return (
      <section className="product-images">
         <ul className="product-image-previews">
         {
            images && (
               images.map((image, idx) => {
                  return(
                     <li
                        onMouseEnter={()=> setSelectedImage(image)}
                        className={"thumbnail-item " + (selectedImage === image && "is-active") }
                        key={`image-${idx}`}>
                        <img src={image} alt={`${name}-${idx}`}/>
                     </li>
                  )
               })
            )
         }
         </ul>
         <div className="product-carousel-container gallery-container">
            <div className="item">  
               <img src={selectedImage} alt={name}/>
            </div>
         </div>
      </section>
   );
};

export default ProductImages;