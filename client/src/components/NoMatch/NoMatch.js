import React from 'react';
import { useHistory } from 'react-router-dom'
import './NoMatch.css'

const NoMatch = () => {
   const history = useHistory()
   return (
      <div className="no-match-container">
         <div className="no-match-content row">
            <div className="no-match-message col-xs-12">
               <h3>La pagina que buscas no se encuentra disponible</h3>
            </div>
            <div className="button-wrapper col-xs-12">
               <button 
                  onClick={() => history.push("/")}
                  className="back-button">
                  Volver al Inicio
               </button>
            </div>
         </div>
      </div>
   );
};

export default NoMatch;