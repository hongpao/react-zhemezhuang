import React from 'react'
import {
    Router,
    Route,
    IndexRoute,
    // browserHistory
    hashHistory
} from 'react-router';

import Login from './containers/login/views/LoginMain';
import Mine from './containers/mine/actions';

/**
 * 页面路由配置表
 */
const routes = (props) => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={props.app}>
                {/* <IndexRoute component={Login} /> */}
                <IndexRoute component={Mine} />
                <Route path="/mine" component={Mine}/>
            </Route>
        </Router>
    )
}

export default routes