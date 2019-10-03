import React from 'react';
import './Catalog.css'
import CatalogProduct from '../CatalogProduct/CatalogProduct'

const CatalogComponent = ({ products }) => {
   return (
      <section className="catalog-grid">
         <div className="row">
           {
              products.map((product, idx) => {
                 return (
                    <CatalogProduct
                        product={product} 
                        key={idx}/>
                 )
              })
           }
         </div>
      </section>
   );
};

export default CatalogComponent;