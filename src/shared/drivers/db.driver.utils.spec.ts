/* eslint-disable no-unused-vars */
import { DbDriver } from './db.driver.interface'
import { generateMockThemeDto } from '@theme/entities/theme.utils.spec'
import sinon from 'sinon'

function makeDbStub<T>() {
    return {
        collection: () => ({
            find: sinon
                .stub()
                .callsFake(({ id }) =>
                    Promise.resolve([{ ...generateMockThemeDto(), id }]),
                ),
            findOne: sinon
                .stub()
                .callsFake(({ id }) =>
                    Promise.resolve({ ...generateMockThemeDto(), id }),
                ),
            create: sinon.stub().callsFake((data) => Promise.resolve(data)),
            findOneAndUpdate: sinon
                .stub()
                .callsFake((data) => Promise.resolve(data)),
        }),
    } as unknown as DbDriver<T>
}

export default Object.freeze({ makeDbStub })
