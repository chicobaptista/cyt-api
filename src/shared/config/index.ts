import dotenv from 'dotenv'
import env from 'env-var'

dotenv.config()

const MONGO_USER = env.get('MONGO_USER').required().asString()
const MONGO_PWD = env.get('MONGO_PWD').required().asString()
const MONGO_DB = env.get('MONGO_DB').required().asString()
const MONGO_HOST = env.get('MONGO_HOST').required().asString()

export const mongoConfig = {
    user: MONGO_USER,
    password: MONGO_PWD,
    database: MONGO_DB,
    host: MONGO_HOST,
}

const APP_PORT = env.get('APP_PORT').default(3000).asIntPositive()

export const appConfig = {
    port: APP_PORT,
    root: '/',
}

export default Object.freeze({ mongoConfig })
