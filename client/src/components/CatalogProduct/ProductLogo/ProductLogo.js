import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './ProductLogo.css'

const home_ripley = process.env.REACT_APP_HOME_RIPLEY
const proxyurl = process.env.REACT_APP_PROXY_URL //habilita las cors para poder realizar la peticion http

const ProductLogo = ({ brand }) => {
   const brandName = brand.value;
   const [hasLogo, setHasLogo] = useState(false)

   useEffect(() => {
      const checkLogo = async() => {
         try{
            await axios.get(`${proxyurl}${home_ripley}${brandName.toLowerCase()}.svg`)
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