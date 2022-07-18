import { CreateTheme } from './use-cases.interface'
import { generateMockThemeDto } from '@theme/entities/theme.utils.spec'
import sinon from 'sinon'

export function generateCreateUseCaseStub(): CreateTheme {
    return {
        create: sinon.stub().resolves(generateMockThemeDto()),
    }
}
