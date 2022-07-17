/* eslint-disable no-unused-vars */
import { DbCollectionMethods, DbDriver } from './db.driver.interface'

export class CDbDriver<T> implements DbDriver<T> {
    collection(collection: string): DbCollectionMethods<T> {
        throw new Error('Method not implemented.')
    }
}
