/* eslint-disable no-unused-vars */
import mongoose, { Schema } from 'mongoose'
import { BaseDTO } from '@shared/entities/entity.interface'
import { DbDriver } from './db.driver.interface'

export class CMongoDbDriver<T extends BaseDTO> implements DbDriver<T> {
    private _schema: Schema
    private _collectionName: string

    constructor(collectionName: string, schema: Schema) {
        this._collectionName = collectionName
        this._schema = schema
    }

    private collection() {
        return mongoose.connection.model(this._collectionName, this._schema)
    }

    findOne(id: string): Promise<T> {
        console.log('DbDriver > findOne: ', id)
        return this.collection().findById(id).exec()
    }

    save(data: T): Promise<T> {
        Object.assign(data, {
            _id: data.id,
        })
        console.log('DbDriver > saveData: ', data)
        return this.collection().create(data)
    }

    update(data: T): Promise<T> {
        console.log('DbDriver > updateData: ', data)

        Object.assign(data, { _id: data.id })
        return this.collection()
            .findByIdAndUpdate(data.id, data, {
                returnDocument: 'after',
                overwrite: true,
            })
            .exec()
    }
}
