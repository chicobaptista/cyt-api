import { BaseDTO } from '@shared/entities/entity.interface'

/* eslint-disable no-unused-vars */
export interface DbDriver<T extends BaseDTO> {
    /**
     * Retrieves a {@link BaseDTO} object from a Db.
     * @param  {string} id
     * @returns Promise
     * @fulfill {@link BaseDTO}
     */
    findOne(id: string): Promise<T>

    /**
     * Saves a {@link BaseDTO} object to a Db.
     * @param  {T} data
     * @returns Promise
     * @fulfill {@link BaseDTO}
     */
    save(data: T): Promise<T>

    /**
     * Updates a {@link BaseDTO} object to a Db.
     * @param  {T} data
     * @returns Promise
     * @fulfill {@link BaseDTO}
     */
    update(data: T): Promise<T>
}
