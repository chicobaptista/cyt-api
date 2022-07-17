/* eslint-disable no-unused-vars */
import { BaseDTO } from '@shared/entities/entity.interface'
import { DbDriver } from './db.driver.interface'
import { generateMockThemeDto } from '@theme/entities/theme.utils.spec'
import sinon from 'sinon'

function makeDbStub<T extends BaseDTO>() {
    return {
        findOne: sinon
            .stub()
            .callsFake((id) =>
                Promise.resolve({ ...generateMockThemeDto(), id }),
            ),
        save: sinon.stub().callsFake((data) => Promise.resolve(data)),
        update: sinon.stub().callsFake((data) => Promise.resolve(data)),
    } as unknown as DbDriver<T>
}

export default Object.freeze({ makeDbStub })
