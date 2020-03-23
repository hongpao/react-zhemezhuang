import React, {Component} from 'react'
import { Button } from 'antd'
import '../login.less';

class LoginMain extends Component {
    // 构造器
    constructor(props) {
        super(props)
        this.state = {
            image: 'https://assets.2dfire.com/frontend/957d5ecea4fa5025fbd322a293dcc773.jpg'
        }
    }

    // render 之前调用 == constructor()
    // componentWillMount() {
    //     console.log(1, 'componentWillMount')
    // }

    // render 之后调用
    componentDidMount() {
         console.log(2, 'componentDidMount')
    }

    componentWillUnmount() {
        console.log(3, 'componentWillUnmount')
    }

    shouldComponentUpdate() {
        return false
    }

    // 路由跳转
    routeTo(path){
        this.props.router.push(path)
    }

    render() {
        return (
            <main>
                <div className="head-box">
                    <div className="logo"></div>
                </div>
                <div className="wrap">
                    <div className="slogan"></div>
                    <div className="main-entry">
                        <Button className="developer-login" type="primary" onClick={this.routeTo.bind(this,'mine')}>商户登录</Button>
                        <Button className="developer-login" type="primary">个人登录</Button>
                    </div>
                </div>
                <div className="backImage">
                    <div className="items">
                        <div className="item" style={{backgroundImage:"url("+this.state.image+")"}}></div>
                    </div>
                </div>
            </main>
        )
    }
}

export default LoginMain