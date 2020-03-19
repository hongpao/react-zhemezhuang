/**
 * created by hongpao
 * 2020.3.19
 */

const packageConfig = require('../package.json')

// 版本信息
const version = packageConfig.version

function getEnv() {
    let options = process.argv;
    let env = 'dev';
    let MAP = ['daily', 'pre', 'publish']
    for (let i = options.length - 1; i >= 0; i--) {
        let key = options[i];
        if (MAP.indexOf(key) > -1) {
            env = key;
        }
    }
    return env
}

module.exports = {
    version: version,
    env: getEnv()
}