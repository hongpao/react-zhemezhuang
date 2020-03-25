/**
 * Created by hongpao on 2020/3/24.
 */

import Axios from 'axios'
import BASE_URL from 'BASE_URL'
import GATEWAY from '@/utils/gateway'
import Storage from '@/utils/storage'

class Requester {

    //获取token
    getToken() {
        // 获取用户缓存信息
        let tokenInfo = Storage.get('token') || {}
        return tokenInfo.token || 'FL6ksrB5/QnZHw/TLZwWf8+32iRvtmN4FRCblHnqiNIuD5/0ck4aeNA0mYXO0VXrTnx8J0xky7NcBxjJRVhU/kIUtPzXWdyY6LU+oQQ6NFM='
    }

    //格式化兼容数据
    formatParams(options) {
        let objs = {}

        //@param {string} baseURL - 基础域名（请求地址为绝对路径的时候失效）
        objs.baseURL = BASE_URL.GATEWAY_BASE_URL

        //请求地址的处理
        let url = options.url || ''
        let httpRule = /^https?:\/\/(.*)$/
        if (!httpRule.test(url)) {
            url = `${GATEWAY.params(url)}&xtoken=${this.getToken()}&t=${Date.now()}`
        }
        objs.url = url

        //请求头信息设置
        let headers = options.headers || {
            // 'content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json',
        }
        headers.token = this.getToken()
        headers.env = BASE_URL.ENV
        objs.headers = headers

        //HTTP 请求方法
        objs.method = options.method || 'GET'

        //请求的参数
        switch (objs.method) {
        case 'GET':
        case 'DELETE':
        case 'HEAD':
            objs.params = options.data
            break
        case 'PUT':
        case 'POST':
            objs.data = options.data || {}
            break
        case 'PATCH':
            objs.data = options.data || {}
            break
        }

        //@param {string} timeout - 超时时间
        objs.timeout = options.timeout || 10000

        //返回的数据格式
        objs.dataType = options.dataType || 'json'

        //响应的数据类型
        objs.responseType = options.responseType || 'json'

        //@param {string} withCredentials - 是否跨域请求
        objs.withCredentials = options.withCredentials || false

        //接口调用成功的回调函数
        objs.success = options.success || (result => {})

        //接口调用失败的回调函数
        objs.fail = options.fail || (error => {})

        //接口调用结束的回调函数（调用成功、失败都会执行）
        objs.complete = options.complete || (result => {})

        return objs
    }

    /**
     * 发起异步请求
     * @param {*} params 
     */
    request(params) {
        return new Promise((resolve, reject) => {
            Axios(params).then(res => {
                let result = res.data || {}
                let {code = 0} = result

                switch(+code){
                    case 1: //成功
                        resolve(result.data)
                        break
                    case 0: // 失败
                        reject(result)
                        break
                }
            }).catch(error => {
                reject({
                    message: '异步请求处理失败'
                })
            })
        })
    }

    //get请求数据处理
    get(options) {
        options.method = 'GET'
        let params = this.formatParams(options)
        return this.request(params)
    }

    //post请求数据处理
    post(options) {
        options.method = 'POST'
        let params = this.formatParams(options)
        return this.request(params)
    }
}

const requester = new Requester()

export default requester
