import React from 'react';
import ReactDOM from 'react-dom';

// import Routes from './routes'

class App extends React.Component {
    render() {
        return <div>
            <h1 className="hello">Hello React & Webpack!</h1>
        </div>
    }
}

ReactDOM.render(
    <App/> ,
    document.getElementById('root')
);

// const s = [1, 2, 3]

// s.map(item => {
//     console.log(item)
// })