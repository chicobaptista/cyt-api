/* eslint-disable no-unused-vars */
import { Connection, Schema } from 'mongoose'
import { DbCollectionMethods, DbDriver } from './db.driver.interface'

export class CMongoDbDriver<T> implements DbDriver<T> {
    private _connection: Connection
    private _schema: Schema
    private _collectionName: string

    constructor(
        connection: Connection,
        collectionName: string,
        schema: Schema,
    ) {
        this._connection = connection
        this._collectionName = collectionName
        this._schema = schema
    }

    collection(): DbCollectionMethods<T> {
        return this._connection.model(this._collectionName, this._schema)
    }
}
