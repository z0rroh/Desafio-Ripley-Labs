global.__projectPath = __dirname;
const loadEnv = require('./util/loadEnv')()
const http = require('http')
const app = require('./src/app')

const config = {
  port: process.env.SERVER_PORT,
  https: process.env.HTTPS_PORT,
}

const normalizePort = (val) => {
  const portNumber = parseInt(val, 10);
  if (isNaN(portNumber)) return val;
  if (portNumber >= 0) return portNumber;
  return false;
}

const port = normalizePort(config.port);
app.set('port', port);

app.listen(port, () => {
   console.log('App Running in localhost:' + config.port)
})
