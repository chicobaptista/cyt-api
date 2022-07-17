/* eslint-disable no-unused-vars */
export interface DbDriver<T> {
    collection(): DbCollectionMethods<T>
}

export interface DbCollectionMethods<T> {
    find(query: Record<string, any>): Promise<Array<T>>
    findOne(query: Record<string, any>): Promise<T>
    create(data: T): Promise<T>
    findOneAndUpdate(data: T): Promise<T>
}
