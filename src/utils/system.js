/**
 * Created by hongpao on 2020/02/20.
 * 获取系统信息
 */

class System {
    info() {
        let userAgent = navigator.userAgent || ''

        let s_os = ''
        if (userAgent.includes('iPhone')) {
            s_os = 'iOS'
        } else if (userAgent.includes('Android')) {
            s_os = 'Android'
        } else {
            s_os = 'other'
        }

        return {
            s_os
        }
    }
}

const system = new System()

export default system