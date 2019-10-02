import React from 'react';
import './CatalogProduct.css'
import ripleyCard from "../../assets/opex.png";

const CatalogProduct = () => {
   return (
      <div className="catalog-product-container col-xs-6 col-sm-4 col-lg-custom">
         <a className="catalog-product-item catalog-product-item--event" href={`/led-samsung-55-un55ru7300-uhd-4k-smart-curvo-2000374667814p`}>
            <div className="proportional-image-wrapper catalog-product__image-preview">
               <div className="images-preview">
                  <div className="images-preview-item is-active">
                     <img src="//home.ripley.cl/store/Attachment/WOP/D171/2000374667814/2000374667814_2.jpg"/>
                  </div>
               </div>
            </div>
            <div className="catalog-product-details">
               <div className="catalog-product-details__logo-container">
                  <div className="brand-logo has-logo" style={{ backgroundImage: "url('//home.ripley.cl/brand-logos/samsung.svg')",}}/>
               </div>
               <div className="catalog-product-details__name">
                  LED SAMSUNG 55” UN55RU7300 UHD 4K SMART CURVO
               </div>
               <div className="catalog-product-details__prices">
                  <div className="catalog-prices">
                     <ul className="catalog-prices__list">
                        <li className="catalog-prices__list-price catalog-prices__lowest" title="Precio Normal">
                           $539.990
                        </li>
                        <li className="catalog-prices__offer-price" title="Precio Internet">
                           $359.990
                        </li>
                        <li className="catalog-prices__card-price" title="Precio Ripley">
                           $319.990
                           <img className="catalog-prices__card-price-image" src={ripleyCard}/>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="catalog-product-details__discount-tag">
                  -41%
               </div>
            </div>
         </a>
      </div>
   );
};

export default CatalogProduct;