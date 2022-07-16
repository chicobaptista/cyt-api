import {
    CreateThemeRepository,
    ReadThemeRepository,
    UpdateThemeRepository,
} from './theme.repository.interface'
import { ThemeDTO } from '@theme/entities/theme.interface'
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

export function makeMockUpdateThemeRepository(): UpdateThemeRepository {
    return {
        updateTheme: sinon.stub().callsFake((themeDto: ThemeDTO) => themeDto),
        readTheme: sinon
            .stub()
            .callsFake((id) => ({ ...generateMockThemeDto(), id })),
    }
}
export function makeMockUpdateThemeRepositoryWithNoRead(): UpdateThemeRepository {
    return {
        updateTheme: sinon.stub().callsFake((themeDto: ThemeDTO) => themeDto),
        readTheme: sinon.stub().returns(undefined),
    }
}
