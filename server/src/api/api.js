const express = require('express')
const redis = require('redis')
const bodyParser = require('body-parser')
const logger = require('morgan')
const api = express()
const addRouter = require('./routes/index')
const errorRate = require('./middleware/errorRate')
const redis_host = process.env.REDIS_HOST;
const redis_port = process.env.REDIS_PORT;
const client = redis.createClient(redis_port, redis_host)
//Redis errors
client.on('error', (err) => {
  console.log("Redis error: " + err)
});

// Middlewares
api.use(logger('dev')) //debugger
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))
api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS")
  next();
});
api.use(errorRate) //Aplica tasa de error de 10%
// Routes
api.get('/api', (req, res ) => {
  res.send("Desafio Ripley Labs")
});
addRouter(api) // Importa y ejecuta las rutas

// Ruta no encontrada
api.use((req, res, next) => {
  if ( !res.headersSent) return res.status(404).json({ error: 'Esta ruta no existe!' })
})

// Maneja los errores
api.use(( err, req, res, next ) => {
  if( err ) return res.status(err.status).json(err)
});

module.exports = api
