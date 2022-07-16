import { CreateThemeRepository } from './theme.repository.interface'
import { generateMockThemeDto } from '@theme/entities/theme.utils.spec'
import sinon from 'sinon'

export function makeMockCreateThemeRepository(): CreateThemeRepository {
    return {
        saveTheme: sinon.stub().returns(generateMockThemeDto()),
    }
}
