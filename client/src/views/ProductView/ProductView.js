import React from 'react';
import ProductDetailContainer from '../../components/ProductDetail/ProductDetail.container'
import { useLocation, Redirect } from 'react-router'
import './ProductView.css'

const product = {
   "uniqueID": "13486166",
   "partNumber": "2000375421729P",
   "name": "CONSOLA SONY PS4 FAMILY BUNDLE",
   "locals": {
   "outOfStockList": {
   "blacklist": false
   },
   "unavailableList": {
   "blacklist": false
   },
   "promotion": {
   "stock": false,
   "badge": "//home.ripley.cl/promo-badges/etiqueta-despacho-24hrs.png"
   }
   },
   "fullImage": "//home.ripley.cl/store/Attachment/WOP/D172/2000375421729/2000375421729_2.jpg",
   "images": [
   "//home.ripley.cl/store/Attachment/WOP/D172/2000375421729/2000375421729_2.jpg",
   "//home.ripley.cl/store/Attachment/WOP/D172/2000375421729/2000375421729-1.jpg",
   "//home.ripley.cl/store/Attachment/WOP/D172/2000375421729/2000375421729-2.jpg"
   ],
   "prices": {
   "offerPrice": 329990,
   "listPrice": 349990,
   "cardPrice": 299990,
   "discount": 50000,
   "discountPercentage": 14,
   "ripleyPuntos": 3000,
   "$$cache": {
   "cached": true,
   "created": 1570218352518
   },
   "formattedOfferPrice": "$329.990",
   "formattedListPrice": "$349.990",
   "formattedCardPrice": "$299.990",
   "formattedDiscount": "$50.000"
   },
   "shortDescription": "Consola PS4 Bundle",
   "longDescription": "<h2>CONSOLA SONY PS4 FAMILY BUNDLE</h2><p>El regalo perfecto para este D&#xED;a del Ni&#xF1;o. El Children&#x2019;s Day Bundle de PS4 es el m&#xE1;ximo paquete de entretenimiento con 2 fascinantes juegos: Ratchet &amp; Clank y Gran Turismo, adem&#xE1;s de un cup&#xF3;n con contenido adicional para Fortnite y un cup&#xF3;n de 3 meses para PS Plus.<br><br>La consola PlayStation 4, ahora m&#xE1;s liviana y delgada, tiene un disco duro de 1 TB para que disfrutes los mejores juegos, tu m&#xFA;sica favorita y mucho m&#xE1;s. El paquete Children&#x2019;s Day ofrece juegos incre&#xED;bles, conectados y din&#xE1;micos para un entretenimiento sin fin, con poderosos gr&#xE1;ficos y alta velocidad, personalizaci&#xF3;n inteligente, capacidades sociales sumamente integradas e innovadoras funciones de pantalla secundaria. Combina contenidos sin precedentes, experiencias de juego atrapantes, todas tus aplicaciones de entretenimiento digital favoritas y caracter&#xED;sticas exclusivas de PlayStation. PS4 se centra en los jugadores y les permite jugar cuando, donde y como lo deseen.<br><br>PS4 permite a los mejores desarrolladores de juegos del mundo liberar su creatividad y llevar los l&#xED;mites de la experiencia de juego a nuevos niveles con un sistema que se adapta espec&#xED;ficamente a sus necesidades.<br><br>Principales recursos<br><br>En la caja encontrar&#xE1;s una consola PlayStation 4 Slim de 1TB, un control inal&#xE1;mbrico DUALSHOCK 4, Blu-ray Disc de Ratchet &amp; Clank, Blu-ray Disc de Gran Turismo Sport y un cup&#xF3;n para descargar contenido adicional de Fortnite* (500 pavos + Atuendo Bombardero Campal).<br><br>Juega online con amigos, obt&#xE9;n juegos gratis, guarda los juegos online y mucho m&#xE1;s con una suscripci&#xF3;n a PlayStation Plus (Incluye un cup&#xF3;n de 3 meses; la suscripci&#xF3;n adicional se vende por separado).<br><br>Con&#xE9;ctate con tus amigos para transmitir y celebrar momentos &#xE9;picos con tan solo pulsar el bot&#xF3;n Share en Twitch, YouTube, Facebook y Twitter.</p><br><br><b>INCLUYE:</b><br><p>Control DualShock 4 para PS4.<br>Cable HDMI.<br>Auricular monoaural con cable.<br>Cable USB de carga.<br>BD de Ratchet &amp; Clank.<br>BD de Gran Turismo Sport.<br>Cup&#xF3;n con contenido extra para Fortnite.</p><br><br><b>INFORMACI&#xD3;N ADICIONAL:</b><br><p>Dimensiones: 10.21 x 42.72 x 35.30 cm (Ancho x Alto x Profundidad).<br>Perif&#xE9;ricos compatibles: Este sistema es compatible con todos los accesorios oficiales de PS4.</p>",
   "definingAttributes": [],
   "attributes": [
   {
   "displayable": true,
   "name": "Marca",
   "usage": "descriptive",
   "value": "SONY"
   },
   {
   "displayable": true,
   "id": "7000000000000254551",
   "identifier": "portatil",
   "name": "Portátil",
   "usage": "descriptive",
   "value": "Sí"
   },
   {
   "displayable": true,
   "id": "7000000000000017167",
   "identifier": "incluye_controles",
   "name": "Incluye Controles",
   "usage": "descriptive",
   "value": "Sí (1)"
   },
   {
   "displayable": true,
   "id": "7000000000000299551",
   "identifier": "color_80",
   "name": "Color",
   "usage": "descriptive",
   "value": "Negro"
   },
   {
   "displayable": true,
   "id": "7000000000000017091",
   "identifier": "capacidad_disco_duro",
   "name": "Capacidad Disco Duro",
   "usage": "descriptive",
   "value": "1 TB"
   }
   ],
   "shipping": {
   "rTienda": true,
   "dDomicilio": true,
   "rCercano": false,
   "cashOnDelivery": false
   },
   "productString": "consola-sony-ps4-family-bundle-2000375421729p",
   "SKUs": [
   {
   "Price": [
   {
   "SKUPriceDescription": "I",
   "SKUPriceValue": "329990.0",
   "SKUPriceUsage": "Offer"
   }
   ],
   "SKUUniqueID": "13486167",
   "partNumber": "2000375421729",
   "xCatEntryQuantity": 1,
   "ineligible": false,
   "Attributes": [],
   "isMainProduct": true
   }
   ],
   "isMarketplaceProduct": false,
   "marketplace": {},
   "warranties": [
   {
   "shortDescription": "Garantías de Reparaciones 1 Año",
   "Price": [
   {
   "priceValue": 24990,
   "priceUsage": "Offer",
   "formattedPriceValue": "$24.990"
   }
   ],
   "type": "EXTRAGARANTIA",
   "name": "EG Extiende tu Garantía 1 Año                                                                                                 ",
   "quantity": "1.0",
   "partNumber": "2000302715310",
   "thumbnail": "/wcsstore/ripleycl_CAT_AS/Attachment/WOP/D172/2000302715310/2000302715310.jpg",
   "uniqueID": "408022"
   },
   {
   "shortDescription": "Garantías de Reparaciones 2 Años",
   "Price": [
   {
   "priceValue": 34990,
   "priceUsage": "Offer",
   "formattedPriceValue": "$34.990"
   }
   ],
   "type": "EXTRAGARANTIA",
   "name": "EG Extiende tu Garantía 2 Años                                                                                                ",
   "quantity": "1.0",
   "partNumber": "2000302717895",
   "thumbnail": "/wcsstore/ripleycl_CAT_AS/Attachment/WOP/D172/2000302717895/2000302717895.jpg",
   "uniqueID": "408032"
   },
   {
   "shortDescription": "Garantías de Reparaciones 3 Años",
   "Price": [
   {
   "priceValue": 49990,
   "priceUsage": "Offer",
   "formattedPriceValue": "$49.990"
   }
   ],
   "type": "EXTRAGARANTIA",
   "name": "EG Extiende tu Garantía 3 Años                                                                                                ",
   "quantity": "1.0",
   "partNumber": "2000302718625",
   "thumbnail": "/wcsstore/ripleycl_CAT_AS/Attachment/WOP/D172/2000302718625/2000302718625.jpg",
   "uniqueID": "408042"
   },
   {
   "shortDescription": "Garantías de Reparaciones 4 Años",
   "Price": [
   {
   "priceValue": 79990,
   "priceUsage": "Offer",
   "formattedPriceValue": "$79.990"
   }
   ],
   "type": "EXTRAGARANTIA",
   "name": "EG Extiende tu Garantía 4 Años                                                                                                ",
   "quantity": "1.0",
   "partNumber": "2000302718977",
   "thumbnail": "/wcsstore/ripleycl_CAT_AS/Attachment/WOP/D172/2000302718977/2000302718977.jpg",
   "uniqueID": "408050"
   },
   {
   "shortDescription": "Garantías de Reparaciones 2 Años",
   "Price": [
   {
   "priceValue": 94990,
   "priceUsage": "Offer",
   "formattedPriceValue": "$94.990"
   }
   ],
   "type": "EXTRAGARANTIA",
   "name": "EG Extiende tu Garantía 2 Años                                                                                                ",
   "quantity": "1.0",
   "partNumber": "2000342691629",
   "thumbnail": "/wcsstore/ripleycl_CAT_AS/Attachment/WOP/D171/2000342691629/2000342691629.jpg",
   "uniqueID": "571670"
   }
   ],
   "url": "/consola-sony-ps4-family-bundle-2000375421729p",
   "thumbnailImage": "//home.ripley.cl/store/Attachment/WOP/D172/2000375421729/2000375421729_2.jpg",
   "simple": {
   "lists": {
   "outOfStockList": {
   "blacklist": false
   },
   "unavailableList": {
   "blacklist": false
   },
   "promotion": {
   "stock": false,
   "badge": "//home.ripley.cl/promo-badges/etiqueta-despacho-24hrs.png"
   }
   },
   "isUnavailable": false,
   "isOutOfStock": false,
   "isMarketplaceProduct": false
   },
   "single": true
   }

const ProductView = props => {
  
   
   if ( !product ) return <Redirect to="/"/>
   return (
      <div className="product-view container">
         <ProductDetailContainer {...props} product={product}/>
      </div>
   );
};

export default ProductView;