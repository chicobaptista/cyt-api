import { BaseDTO } from '@shared/entities/entity.interface'
import { CMongoDbDriver } from '@shared/drivers/mongo-db.driver'
import mongoose from 'mongoose'

const dbName = 'cyt'
const dbCredentials = {
    user: 'cyt-user',
    password: 'cytPwd',
}
const { user, password } = dbCredentials
mongoose.connect(`mongodb://${user}:${password}@localhost:27017/${dbName}`)
function makeDbDriver<T extends BaseDTO>(collectionName, schema) {
    return new CMongoDbDriver<T>(collectionName, schema)
}

export default Object.freeze({ makeDbDriver })
