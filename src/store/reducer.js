/**
 * 
 * @param {*} state 
 * @param {*} action 
 */

import {
    createStore
} from 'redux'
import Types from '../utils/types'
import states from './states'

const reducer = (state = states, action) => {
    switch (action.type) {
        case Types.TEST:
            state.number = action.number
            state.numberArray = action.numberArray
            return state
        default:
            return state
    }
}

export default createStore(reducer)