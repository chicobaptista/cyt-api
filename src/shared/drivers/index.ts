import { CDbDriver } from './db.driver'

function makeDbDriver<T>() {
    return new CDbDriver<T>()
}

export default Object.freeze({ makeDbDriver })
