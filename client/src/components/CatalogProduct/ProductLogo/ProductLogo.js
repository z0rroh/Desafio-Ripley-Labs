import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './ProductLogo.css'

const ProductLogo = ({ brand }) => {
   const brandName = brand.value;
   const [hasLogo, setHasLogo] = useState(false)
   
   useEffect(() => {
      const checkLogo = async() => {
         try{
            const proxyurl = "https://cors-anywhere.herokuapp.com/";//habilita las cors para poder realizar la peticion http
            await axios.get(`${proxyurl}https://home.ripley.cl/brand-logos/${brandName.toLowerCase()}.svg`)
            setHasLogo(true)
         }catch(e){
            setHasLogo(false)
         }
      }
      checkLogo()
   }, [brandName])
   
   return (
      <div className="catalog-product-details__logo-container">
         { hasLogo ? 
           (<div className="brand-logo has-logo" style={{ backgroundImage: `url(//home.ripley.cl/brand-logos/${brandName.toLowerCase()}.svg)`}}/>) : 
           (<div className="brand-logo"><span>{ brandName}</span></div>)
         }
      </div>
   );
};

export default ProductLogo;