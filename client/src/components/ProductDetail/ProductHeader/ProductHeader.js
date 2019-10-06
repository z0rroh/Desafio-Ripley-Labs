import React from 'react';
import './ProductHeader.css'

const ProductHeader = ({ brand, sku, shortDescription, name, hidden }) => {
   return (
      <section className={"product-header " + ( hidden ? "hidden-xs" : "visible-xs") }>
         <div className="row">
            <div className="brand-logo col-xs-12">
               <span>{ brand }</span>
            </div>
            <div className="product-name col-xs-12">
               <h1>{ name }</h1>
            </div>
            <div className="product-sku col-xs-12">
               <small>
                  SKU:
                  <span>{ sku }</span> 
               </small>
            </div>
            <div className="product-rating product-rating-small col-xs-12">
               <div className="stars-ranking stars-ranking-sprite--small stars-ranking-0 "/>
               <span className="product-rating-text">
                  (Calificaciones)
               </span>
            </div>
            <div className="product-short-description col-xs-12">
               { shortDescription }
            </div>
         </div>
      </section>
   );
};

export default ProductHeader;