global.__projectPath = __dirname;
const loadEnv = require('./util/loadEnv')()
const api = require('./src/api/api')

const config = {
  port: process.env.SERVER_PORT,
}

const normalizePort = (val) => {
  const portNumber = parseInt(val, 10);
  if (isNaN(portNumber)) return val;
  if (portNumber >= 0) return portNumber;
  return false;
}

const port = normalizePort(config.port);
api.set('port', port);

api.listen(port, () => {
   console.log('Desafio Ripley API - API Running in port: ' + config.port)
})
