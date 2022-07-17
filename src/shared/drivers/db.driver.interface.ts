import { BaseDTO } from '@shared/entities/entity.interface'

/* eslint-disable no-unused-vars */
export interface DbDriver<T extends BaseDTO> {
    findOne(id: string): Promise<T>
    save(data: T): Promise<T>
    update(data: T): Promise<T>
}
