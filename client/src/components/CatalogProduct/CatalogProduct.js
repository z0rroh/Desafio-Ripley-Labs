import React from 'react';
import { Link } from 'react-router-dom'
import './CatalogProduct.css'
import ProductImage from './ProductImage/ProductImage'
import ProductDiscount from './ProductDiscount/ProductDiscount'
import ProductPrices from './ProductPrices/ProductPrices'
import ProductName from './ProductName/ProductName';
import ProductLogo from './ProductLogo/ProductLogo';

const CatalogProduct = ({ product }) => {
   return (
      <div className="catalog-product-container col-xs-6 col-sm-4 col-lg-custom">
         <Link className="catalog-product-item catalog-product-item--event" to={`${product.url}`}>
            <ProductImage image={product.fullImage}/>
            <div className="catalog-product-details">
               <ProductLogo brand={product.attributes[0]}/>
               <ProductName name={product.name}/>
               <ProductPrices prices={product.prices}/>
               <ProductDiscount discount={product.prices.discountPercentage}/>
            </div>
         </Link>
      </div>
   );
};

export default CatalogProduct;