import { ThemeDTO, ThemeProps } from './theme.interface'
import { Theme } from './theme'
import sinon from 'sinon'
import { v4 } from 'uuid'

export function generateMockThemeProps(): ThemeProps {
    return {
        name: 'Test Theme',
        description: 'Test description',
        outcomes: ['Test Outcome 1', 'Test Outcome 2'],
    }
}

export function generateMockTheme(): Theme {
    return {
        id: v4(),
        name: 'Test Theme',
        description: 'Test description',
        outcomes: ['Test Outcome 1', 'Test Outcome 2'],
        createdAt: new Date(),
        updatedAt: new Date(),
        update: sinon.stub(),
    } as unknown as Theme
}

export function generateMockThemeDto(): ThemeDTO {
    return {
        id: v4(),
        name: 'Test Theme',
        description: 'Test description',
        outcomes: ['Test Outcome 1', 'Test Outcome 2'],
        createdAt: new Date(),
        updatedAt: new Date(),
    }
}
