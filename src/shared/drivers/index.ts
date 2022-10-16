import { BaseDTO } from '@shared/entities/entity.interface'
import { CMongoDbDriver } from '@shared/drivers/mongo-db.driver'
import { mongoConfig } from '@shared/config'
import mongoose from 'mongoose'

const { user, password, database, host } = mongoConfig
mongoose.connect(`mongodb://${user}:${password}@${host}:27017/${database}`)
function makeDbDriver<T extends BaseDTO>(collectionName, schema) {
    return new CMongoDbDriver<T>(collectionName, schema)
}

export default Object.freeze({ makeDbDriver })
