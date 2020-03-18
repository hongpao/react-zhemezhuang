import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Routes from './routes'
import reducer from './store/reducer'

class App extends React.Component {
    render() {
        return <div>
            <h1 className="hello">Hello React & Webpack!</h1>
        </div>
    }
}

ReactDOM.render(
    <Provider store={reducer}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
)