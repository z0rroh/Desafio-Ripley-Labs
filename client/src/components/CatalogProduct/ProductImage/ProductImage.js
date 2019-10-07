import React, { useEffect, useState } from 'react';
import LoadingImage from '../../LoadingImage/LoadingImage'
import './ProductImage.css'

const ProductImage = ({ images }) => {
   const [onLoad, setOnload] = useState(true)
   const [currentImage, setCurrentImage] = useState(images[0])
   const [isHovering, setIsHovering] = useState(false)
   useEffect(()=> {
      setTimeout(()=> {
         setOnload(false)
      },500)
   }, [images])

   useEffect(()=>{
      let interval;
      if ( isHovering ){
         let index = 0
         interval = setInterval(() => {
            if( index + 1 < images.length ){
               index = index + 1;
               setCurrentImage(images[index])
            }else{
               index = 0
               setCurrentImage(images[index])
            }
         }, 1000);
      }else{
         clearInterval(interval);
         setCurrentImage(images[0]);
      }
      return () => clearInterval(interval);
   }, [isHovering])

   if ( onLoad ) return (<LoadingImage/>)
   return (
      <div 
         onMouseEnter={()=> images.length > 1 && setIsHovering(true)}
         onMouseLeave={()=> images.length > 1 && setIsHovering(false)}
         className="proportional-image-wrapper catalog-product__image-preview">
         <div className="images-preview">
            <div className="images-preview-item is-active">
               <img src={currentImage} alt="productImage"/>
            </div>
         </div>
      </div>
   );
};

export default ProductImage;