const projectPath = __projectPath
const dotenv = require('dotenv')

const loadEnv = () => {
  let env_file = '.env'

  if ( process.env.NODE_ENV === 'development' ) {
    env_file = '.env.development'
  }

  const env_path = `${projectPath}/${env_file}`
  dotenv.config({ path: env_path })
}

module.exports = loadEnv
