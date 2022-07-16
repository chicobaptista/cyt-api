import {
    CreateThemeRepository,
    ReadThemeRepository,
} from './theme.repository.interface'
import { generateMockThemeDto } from '@theme/entities/theme.utils.spec'
import sinon from 'sinon'

export function makeMockCreateThemeRepository(): CreateThemeRepository {
    return {
        saveTheme: sinon.stub().resolves(generateMockThemeDto()),
    }
}

export function makeMockReadThemeRepository(): ReadThemeRepository {
    return {
        readTheme: sinon
            .stub()
            .callsFake((id) => ({ ...generateMockThemeDto(), id })),
    }
}
