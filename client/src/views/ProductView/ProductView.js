import React from 'react';
import ProductDetailContainer from '../../components/ProductDetail/ProductDetail.container'
import { useLocation, Redirect } from 'react-router'
import './ProductView.css'

const ProductView = props => {
   const { product } = useLocation();
   if ( !product ) return <Redirect to="/"/>
   return (
      <div className="product-view container">
         <ProductDetailContainer {...props} product={product}/>
      </div>
   );
};

export default ProductView;