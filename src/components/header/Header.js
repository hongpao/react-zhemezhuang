import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
    render(){
        return (
            <div className="head-part">
                <div className="head-box">
                    <div className="website-logo"></div>
                    <div className="head-menu">目录1</div>
                    <div className="head-menu">目录2</div>
                    <div className="head-username">【用户名】</div>
                </div>
            </div>
        )
    }
}

export default Header;