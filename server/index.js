global.__projectPath = __dirname;
const loadEnv = require('./util/loadEnv')()
const api = require('./src/api/api')

const config = {
  port: process.env.SERVER_PORT,
}


api.listen(config.port, () => {
   console.log('Desafio Ripley API - API Running on port: ' + config.port)
})
