import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import Title from './Title';
import TimeList from './TimeList';
import { timerContext } from './TimerContext';
import './style.css';


const App = () => {
    const [title, setTitle] = useState('Timer');
    const [isLight, setIsligth] = useState('false');
    const [timeArr, setTimeArr] = useState([]);

    const isLightHandle = () => {
        setIsligth(!isLight);
    };

    return (
        <timerContext.Provider value={{ timeArr: timeArr, setTimeArr: setTimeArr }}>
            <div className='timer-parent'>
                <Title title={title} />
                <Timer isLight={isLight} isLightHandle={isLightHandle} />
                <TimeList />
            </div>
        </timerContext.Provider>
    );
}

export default App;