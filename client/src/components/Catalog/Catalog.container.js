import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import CatalogComponent from './Catalog.component'
import axios from 'axios'

const api = process.env.REACT_APP_REST_API

const CatalogContainer = () => {
   const [products, setProducts] = useState([])
   const history = useHistory();

   useEffect(() => {
      const fetchProducts = async () => {
         try{
            const res = await axios.get(`${api}/product`)
            setProducts(res.data)
         }catch(e){
            history.push('/server-error')
         }
      }
      fetchProducts();
   },[])

   return (
      <CatalogComponent 
         products={products}/>
   );
};

export default CatalogContainer;