import React from 'react';
import ripleyCard from "../../../assets/opex.png";
import './ProductPrices.css'

const ProductPrices = ({ prices }) => {
   return (
      <div className="catalog-product-details__prices">
         <div className="catalog-prices">
            <ul className="catalog-prices__list">
               { prices.formattedListPrice &&
                  <li 
                     className="catalog-prices__list-price catalog-prices__lowest" title="Precio Normal">
                     { prices.formattedListPrice }
                  </li>
               }
               { prices.formattedOfferPrice &&
                  <li className="catalog-prices__offer-price" title="Precio Internet">
                     { prices.formattedOfferPrice }
                  </li>
               }
               {  prices.formattedCardPrice &&
                  <li className="catalog-prices__card-price" title="Precio Ripley">
                     { prices.formattedCardPrice }
                     <img className="catalog-prices__card-price-image" src={ripleyCard} alt="cardImage"/>
                  </li>
               }
            </ul>
         </div>
      </div>
   );
};

export default ProductPrices;