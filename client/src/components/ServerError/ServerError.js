import React from 'react';
import { useHistory } from 'react-router-dom'
import './ServerError.css'

const ServerError = () => {
   const history = useHistory()
   return (
      <div className="error-container">
         <div className="error-content row">
            <div className="error-message col-xs-12">
               <h3>Lo sentimos, ocurrio un error en nuestros servicios</h3>
            </div>
            <div className="button-wrapper col-xs-12">
               <button 
                  onClick={() => history.push("/")}
                  className="back-button">
                  Volver a intentarlo
               </button>
            </div>
         </div>
      </div>
   );
};

export default ServerError;