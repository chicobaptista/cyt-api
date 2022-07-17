import { CThemeRepository } from './theme.repository'
import { DbDriver } from '@shared/drivers/db.driver.interface'
import { ThemeDTO } from '@theme/entities/theme.interface'
import driverFactory from '@shared/drivers'

function makeThemeRepository() {
    const dbDriver: DbDriver<ThemeDTO> = driverFactory.makeDbDriver<ThemeDTO>()
    return new CThemeRepository(dbDriver)
}

export default Object.freeze({ makeThemeRepository })
