import { CMongoDbDriver } from './db.driver'
import mongoose from 'mongoose'

const dbName = 'cyt'
const dbCredentials = {
    user: 'cyt-mongo',
    password: 'MySecretPassword',
}
let connection
async function makeDbDriver<T>(collectionName, schema) {
    const { user, password } = dbCredentials
    if (!connection)
        connection = await mongoose.connect(
            `mongodb://${user}:${password}@localhost:27017/${dbName}`,
        )
    return new CMongoDbDriver<T>(connection, collectionName, schema)
}

export default Object.freeze({ makeDbDriver })
