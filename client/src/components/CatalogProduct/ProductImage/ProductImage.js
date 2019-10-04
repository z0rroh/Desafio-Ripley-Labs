import React, { useEffect, useState } from 'react';
import LoadingImage from '../../LoadingImage/LoadingImage'
import './ProductImage.css'

const ProductImage = ({ image }) => {
   const [onLoad, setOnload] = useState(true)

   useEffect(()=> {
      setTimeout(()=> {
         setOnload(false)
      },500)
   }, [image])

   if ( onLoad ) return (<LoadingImage/>)
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