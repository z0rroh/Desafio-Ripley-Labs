import React from 'react';
import tarjetaRipley from '../../../assets/opex.png' 
import './ProductInfo.css'

const ProductInfo = ({ prices }) => {
   return (
      <section className="product-info">
         <ul>
            {  prices.formattedListPrice && prices.listPrice > prices.offerPrice &&
               <li className="product-normal-price">
                  <span className="product-price-type">Normal</span>
                  <span className="product-price">{ prices.formattedListPrice }</span>
               </li>
            }
            { prices.formattedOfferPrice &&
               <li className={(prices.formattedCardPrice ? "product-internet-price-not-best" : "product-internet-price")}>
                  <span className="product-price-type">Internet</span>
                  <span className="product-price">{ prices.formattedOfferPrice }</span>
               </li>
            }
            { prices.formattedOfferPrice &&
               <li className="product-ripley-price">
                  <span className="product-price-type">Tarjeta Ripley</span>
                  <span className="product-price">
                     <img src={tarjetaRipley} alt="tarjetaRipley"/>
                     { prices.formattedCardPrice }
                  </span>
               </li>
            }
            { prices.discountPercentage && prices.discountPercentage > 0 &&
               <li className="product-price-discount">
                  <span className="product-price-type">Descuento</span>
                  <span className="product-discount-tag">
                     <span className="discount-percentage">
                        -{ prices.discountPercentage }%
                     </span>
                  </span>
               </li>
            }
            { prices.ripleyPuntos && prices.ripleyPuntos > 0 &&
               <li className="product-ripley-puntos">
                  <span className="product-price-type">Acumulas</span>
                  <span className="product-price">
                  { prices.ripleyPuntos } RipleyPuntos GO
                  </span>
               </li>
            }
         </ul>
      </section>
   );
};

export default ProductInfo;