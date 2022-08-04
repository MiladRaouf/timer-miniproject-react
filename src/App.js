import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import Title from './Title';

import './style.css';


class App extends React.Component {
    render() {
        return (
            <div className='timer-parent'>
                <Title />
                <Timer />
            </div>
        );
    }
}


export default App;