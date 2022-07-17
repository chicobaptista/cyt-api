/* eslint-disable no-unused-vars */
export interface DbDriver<T> {
    collection(collection: string): DbCollectionMethods<T>
}

export interface DbCollectionMethods<T> {
    find(query: Record<string, any>): Promise<Array<T>>
    findOne(query: Record<string, any>): Promise<T>
    insertOne(data: T): Promise<T>
    updateOne(data: T): Promise<T>
}
