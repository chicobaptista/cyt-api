/* eslint-disable no-unused-vars */
import { DbDriver } from './db.driver.interface'
import { generateMockThemeDto } from '@theme/entities/theme.utils.spec'
import sinon from 'sinon'

function makeDbStub<T>() {
    return {
        collection: (_collectionName: string) => ({
            findOne: sinon
                .stub()
                .callsFake(({ id }) =>
                    Promise.resolve({ ...generateMockThemeDto(), id }),
                ),
            insertOne: sinon.stub().callsFake((data) => Promise.resolve(data)),
            updateOne: sinon.stub().callsFake((data) => Promise.resolve(data)),
        }),
    } as unknown as DbDriver<T>
}

export default Object.freeze({ makeDbStub })
