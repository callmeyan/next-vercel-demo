import chalk from 'chalk'
import strings from "./strings"


export default {
    info(...args: any[]) {
        console.info.apply(null, [chalk.bgBlue.white.bold(strings.now()), chalk.bgYellow.black.bold('[INFO]'), ...args])
    },
    debug(...args: any[]) {
        console.debug.apply(null, [chalk.bgBlue.white.bold(strings.now()), chalk.bgWhite.black.bold('[DEBUG]'), ...args])
    },
    log(...args: any[]) {
        console.log.apply(null, [chalk.bgBlue.white.bold(strings.now()), '[LOG]', ...args])
    }
}
