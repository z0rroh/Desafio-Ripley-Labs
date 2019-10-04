const redis = require('redis')
const client = redis.createClient()

const getCache = (req, res, next) => {
   const redisKey = 'products'
   client.get(redisKey, (err, data) => {
      if (err) next({ error: e, status: e.status || 500, message: "Redis error" })
      if (data === null){
         next();
      }else{
         console.log("Redis Cache")
         res.status(200).json(JSON.parse(data))
      }
   })
}

//Modifica el cache, espera un identificador, tiempo de expiracion y los datos a almacenar
const setexCache = (key, time, data) => {
   client.setex(key, time, JSON.stringify(data) )
}
//Borra el cache de un identificador 
const deleteCache = (key) => {
   client.del(key)
}

module.exports = { getCache, setexCache, deleteCache }