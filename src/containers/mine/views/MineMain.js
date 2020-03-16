import React, {Suspense, Component, lazy} from 'react'
// import { Icon } from 'antd'
import store from '../../../store/reducer'
import '../mine.css';
// import Part from './Part'
const Part = lazy(() => import('./Part')) //懒加载

class MineMain extends Component {
    // 构造器
    constructor(props) {
        super(props)
        store.subscribe(() =>
            this.store = store.getState()
        )
        this.state = {
            date: new Date(),
            number: 0,
            name: ''
        }

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.hp = this.hp.bind(this)
    }

    componentDidMount() {
        // store.subscribe(() =>
        //     console.log(store.getState())
        // )
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    // 箭头函数，不需要绑定this
    hp = (n) => {
        this.setState(() => ({
            number: n
        }))
    }

    handleInputChange = (event) => {
        console.log(event)
    }

    render() {
        // console.log(this.store, 'hongpao')
        return (
            <main>
                <div className="content">
                    <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                    <input type="text" name="hong" value={this.state.name} onChange={this.handleInputChange}/>
                    <div onClick={()=>this.hp(100)}>{this.state.number}</div>
                    {/* <Icon type="smile" theme="outlined"/> */}
                    hongpao test ！
                    <Suspense fallback={<div>Loading...</div>}>
                        <Part store={this.props}/>
                    </Suspense>
                </div>
            </main>
        )
    }
}

export default MineMain