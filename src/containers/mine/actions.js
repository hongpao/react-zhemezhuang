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

//需要渲染什么数据
const mapStateToProps = state => {
    return {
        main: state.main
    }
}

//需要触发什么行为
const mapDispatchToProps = dispatch => {
    return {
        // 初始化加载页面数据
        startInitPageData: () => {
            let params = {
                url: '',
                data: {}
            }
            ajax(params).then(res => {

            })
        },
        add: (params) => {
            let m = parseInt(Math.random() * 10) + params
            dispatch({
                type: Types.TEST,
                m
            })
        }
    }
}

/**
 * 发起异步请求
 * @param {*} params 
 */
const ajax = (params) => {
    return new Promise((resolve, reject) => {
        Requester.get(params).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MineMain)