import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Routes from './routes'
import reducer from './store/reducer'

ReactDOM.render(
    <Provider store={reducer}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
)