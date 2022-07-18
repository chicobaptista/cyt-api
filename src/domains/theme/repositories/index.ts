import { CThemeRepository } from './theme.repository'
import { DbDriver } from '@shared/drivers/db.driver.interface'
import { ThemeDTO } from '@theme/entities/theme.interface'
import driverFactory from '@shared/drivers'
import { themeSchema } from '@theme/repositories/theme.schema'

function makeThemeRepository() {
    const collectionName = 'themes'

    const dbDriver: DbDriver<ThemeDTO> = driverFactory.makeDbDriver<ThemeDTO>(
        collectionName,
        themeSchema,
    )
    return new CThemeRepository(dbDriver)
}

export default Object.freeze({ makeThemeRepository })
