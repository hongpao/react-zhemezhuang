import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import reducer from './store/reducer'
import 'antd/dist/antd.css'

import './base.less'
import Header from './components/header/Header';
import Footer from './components/footer/Footer'

/**
 * 页面级父组件
 */
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            status: true
        }
    }

    // 异常情况捕获，降级UI
    static getDerivedStateFromError(error) {
        return {status: false}
    }
    
    //异常情况捕获，上传错误日志信息
    componentDidCatch(error, errorInfo) {
        // logErrorToMyService(error, errorInfo)
    }

    render() {
        if (!this.state.status) {
            return <div>something went wrong!</div>
        }

        return (
            <div id="J-website">
                {/* <Header/> */}
                {this.props.children}
                {/* <Footer/> */}
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={reducer}>
        <Routes app={App}/>
    </Provider>,
    document.getElementById('root')
)