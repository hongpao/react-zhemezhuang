/**
 * 
 * @param {*} state 
 * @param {*} action 
 */

 import { createStore } from 'redux'
import Types from '../utils/types'

const states = {
    main: 100
}

// function updateObject(oldObject, newValues) {
//     // 用空对象作为第一个参数传递给 Object.assign，以确保是复制数据，而不是去改变原来的数据
//     return Object.assign({}, oldObject, newValues)
// }

const reducer = (state = states, action) => {
    switch (action.type) {
        case Types.TEST:
            state.main += action.df || 0
            return state;
        case '扣工资':
            return state -= 100;
        default:
            return state;
    }
}

//创建store
const store = createStore(reducer)

export default store