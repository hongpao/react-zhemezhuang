/**
 * 网关参数 设置
 * created by hongpao 2020.02.20
 */

 import System from './system'

var params = {
    // 系统名称
    s_os: System.info().s_os,
    // 系统版本
    s_osv: '1.0.0',
    // 浏览器名称
    s_ep: 'react-zhemezhuang',
    // 浏览器版本
    s_epv: '1.0.0',
    // 窗口尺寸
    s_sc: document.documentElement.clientWidth + "*" + document.documentElement.clientHeight,
    // 时间戳
    timestamp: new Date().getTime(),
    // 是否开启web端访问 1:开启
    s_web: '1',
    // api版本，允许值1.0
    v: '1.0',
    // 返回数据格式，允许'json'，'xml'
    format: 'json',
    //设备ID（获取设备uuid再进行md5）
    s_did: 'h5',
    //应用版本
    s_apv: '1.0.0'
}

export default "s_os=" + params.s_os +
    "&s_osv=" + params.s_osv +
    "&s_ep=" + params.s_ep +
    "&s_epv=" + params.s_epv +
    "&s_sc=" + params.s_sc +
    "&s_did=" + params.s_did +
    "&s_apv=" + params.s_apv +
    "&timestamp=" + params.timestamp +
    "&s_web=1&v=1.0&format=json";