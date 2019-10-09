Este servicio fue creado bajo el framework [Express JS](https://expressjs.com/es/).

  
## RUN DEVELOPMENT ENV

Como un paso previo, necesitaras correr una instancia de Redis en tu computadora. (los siguientes pasos están orientados a un usuario de Homebrew)
##### `1. brew install redis`
##### `2. redis-server`
Para verificar que Redis se ejecuta de manera correcta.
##### `3. redis-cli ping`
Si obtienes como respuesta **PONG!**, todo se encuentra en orden!

De esta forma ya podemos correr el proyecto de manera local, con las siguientes instrucciones:
##### `1. git clone https://github.com/z0rroh/Desafio-Ripley-Labs.git`
##### `2. cd Desafio-Ripley-Labs/server`
##### `3. npm install`
##### `4. npm start || nodemon`
Esto configura el proyecto en modo desarrollador con sus respectivas variables de entorno, el cual puedes visualizar en la siguiente URL:  [http://localhost:3002](http://localhost:3000/)

### Deployment

Para correr el proyecto en un entorno de producción debes ejecutar el directamente archivo index.js:

### `node index.js` 
