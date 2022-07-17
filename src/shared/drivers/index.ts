import { BaseDTO } from '@shared/entities/entity.interface'
import { CMongoDbDriver } from '@shared/drivers/mongo-db.driver'
import mongoose from 'mongoose'

const dbName = 'cyt'
const dbCredentials = {
    user: 'cyt-user',
    password: 'cytPwd',
}
let connection
async function makeDbDriver<T extends BaseDTO>(collectionName, schema) {
    const { user, password } = dbCredentials
    if (!connection)
        await mongoose.connect(
            `mongodb://${user}:${password}@localhost:27017/${dbName}`,
        )
    return new CMongoDbDriver<T>(collectionName, schema)
}

export default Object.freeze({ makeDbDriver })
