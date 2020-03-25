/**
 * 页面逻辑处理
 * created by hongpao 2020.1.11
 */
import {
    connect
} from 'react-redux'
import Types from '../../utils/types'
import MineMain from './views/MineMain'
import Requester from '@/http/requester'
import APIs from '@/http/apis'
import {
    Modal
} from 'antd'

//需要渲染什么数据
const mapStateToProps = state => {
    return {
        status: state.status,
        number: state.number,
        numberArray: state.numberArray
    }
}

//需要触发什么行为
const mapDispatchToProps = dispatch => {
    return {
        // 初始化加载页面数据
        startInitPageData: () => {
            let options = {
                url: APIs.GET_ADDRESS_LIST,
                data: {
                    sub_area_type: 'province',
                    id: '001',
                    need_sub_area: true
                }
            }

            ajaxAction(options).then(res => {
                console.log(res)
            })
        },

        /**
         * Math.random()
         * 函数返回一个浮点, 伪随机数在范围从0到小于1， 
         * 也就是说， 从0（ 包括0） 往上， 但是不包括1（ 排除1）
         */
        add: (params) => {
            let numberArray = []
            for (let i = 0; i < 1000; i++) {
                numberArray.push(parseInt(Math.random() * 100) + 1)
            }
            dispatch({
                type: Types.TEST,
                number: parseInt(Math.random() * 100),
                numberArray
            })
        }
    }
}

/**
 * 发送异步请求
 * @param {*} options 
 */
const ajaxAction = (options) => {
    return new Promise((resolve, reject) => {
        Requester.get(options).then(res => {
            resolve(res)
        }).catch(error => {
            Modal.error({
                title: 'This is an error message',
                content: error.message,
                okText: '重新加载',
                onOk: () => {
                    ajaxAction(options)
                }
            })
        })
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MineMain)