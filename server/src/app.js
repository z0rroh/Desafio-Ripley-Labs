const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS")
  next();
});

// Routes
app.get('/api', (req, res) => {
  res.send('Desafio Ripley API');
})

// Ruta no encontrada
app.use((req, res, next) => {
  if ( !res.headersSent) return res.status(404).json({ error: 'Esta ruta no existe!' })
})

// An error handling
app.use(( err, req, res, next ) => {
  if( err ) return res.status(err.status).json(err)
});

module.exports = app
