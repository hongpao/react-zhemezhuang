import React, {Component, lazy} from 'react'
// import { Icon } from 'antd'
import store from '@/store/reducer'
import Utils from '@/utils'
import '../mine.less';
import {
    Button
} from 'antd'
import Part from './Part'

// const Part = lazy(() => import('./Part')) //懒加载

class MineMain extends Component {
    // 构造器
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            status: props.status,
            number: props.number
        }

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.hp = this.hp.bind(this)
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)

        //初始化数据，发起异步请求
        // this.props.startInitPageData()

        // 发起监听，初始化的时候不会执行
        store.subscribe(() => {
            let states = store.getState()
            this.setState({
                number: states.number
            })
        })
    }

    componentWillUnmount() {
        clearInterval(this.timerID)

        // 注意 subscribe() 返回一个函数用来注销监听器
        store.subscribe(() => console.log(store.getState()))()
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        let {
            date,
            number
        } = this.state
        return (
            <main>
                <div className="content">
                    <h2>It is {date.toLocaleTimeString()}</h2>
                    <h3>{number}</h3>
                    <Button type="primary" onClick={() => this.props.add()}>redux btn</Button>
                </div>
                <Part store={this.props}/>
            </main>
        )
    }
}

export default MineMain