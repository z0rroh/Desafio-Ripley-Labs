import React from 'react';
import './ProductDetail.css'
import ProductImages from './ProductImages/ProductImages'
import ProductHeader from './ProductHeader/ProductHeader';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductDetailComponent = ({ product }) => {
 
   return (
      <div className="product-detail-container">
         <section className="product-detail-section">
            <ProductHeader
               hidden={false}
               name={product.name}
               shortDescription={product.shortDescription}
               sku={product.partNumber} 
               brand={product.attributes[0].value}/>
            <div className="row">
               <div className="content-wrapper col-xs-12 col-sm-7">
                  <ProductImages 
                     name={product.name}
                     images={product.images} 
                     fullImage={product.fullImage}/>
               </div>
               <div className="content-wrapper col-xs-12 col-sm-5">
                  <ProductHeader
                     hidden={true}
                     name={product.name}
                     shortDescription={product.shortDescription}
                     sku={product.partNumber} 
                     brand={product.attributes[0].value}/>
                  <ProductInfo
                     prices={product.prices}/>
               </div>
            </div>
         </section>
      </div>
   );
};

export default ProductDetailComponent;