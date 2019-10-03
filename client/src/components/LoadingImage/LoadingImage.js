import React from 'react';
import loading from '../../assets/loading.gif'
import './LoadingImage.css'

const LoadingImage = () => {
   return (
      <React.Fragment>
         <div className="proportional-image-wrapper-boundary"/>
         <div className="catalog-product__loading-image">
            <img src={loading} alt="LoadingImage"/>
         </div>
      </React.Fragment>
   );
};

export default LoadingImage;