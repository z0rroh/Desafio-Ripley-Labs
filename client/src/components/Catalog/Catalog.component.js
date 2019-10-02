import React from 'react';
import './Catalog.css'
import CatalogProduct from '../CatalogProduct/CatalogProduct'

const CatalogComponent = () => {
   return (
      <section className="catalog-grid">
         <div className="row">
            <CatalogProduct/>
            <CatalogProduct/>
            <CatalogProduct/>
            <CatalogProduct/>
            <CatalogProduct/>
            <CatalogProduct/>
            <CatalogProduct/>
            <CatalogProduct/>
            <CatalogProduct/>
            <CatalogProduct/>
         </div>
      </section>
   );
};

export default CatalogComponent;