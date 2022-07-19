import { CreateTheme, ReadTheme } from './use-cases.interface'
import { ThemeDTO } from '@theme/entities/theme.interface'
import { generateMockThemeDto } from '@theme/entities/theme.utils.spec'
import sinon from 'sinon'

export function generateCreateUseCaseStub(): CreateTheme {
    return {
        create: sinon.stub().resolves(generateMockThemeDto()),
    }
}

export function generateReadUseCaseStub(): ReadTheme {
    return {
        read: sinon
            .stub()
            .callsFake(
                (id: string): ThemeDTO => ({ ...generateMockThemeDto(), id }),
            ),
    }
}
