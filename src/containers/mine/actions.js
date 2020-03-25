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
        number: state.number
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

        add: (params) => {
            dispatch({
                type: Types.TEST,
                number: parseInt(Math.random() * 100)
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