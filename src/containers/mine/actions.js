/**
 * 页面逻辑处理
 * created by hongpao 2020.1.11
 */
import { connect } from 'react-redux'
import Types from '../../utils/types'
import MineMain from './views/MineMain'

//需要渲染什么数据
const mapStateToProps = state => {
    return {
        main: state.main
    }
}

//需要触发什么行为
const mapDispatchToProps = dispatch => {
    return {
        haha: () => haha(dispatch),
        PayIncrease: () => dispatch({
            type: '涨工资'
        }),
        PayDecrease: () => dispatch({
            type: '扣工资'
        })
    }
}

/**
 * 
 * @param {*} dispatch 
 */
const haha = (dispatch) => {
    dispatch({
        type: Types.TEST,
        df: 333
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MineMain)