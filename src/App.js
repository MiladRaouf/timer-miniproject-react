import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import Title from './Title';

import './style.css';



let App = () => {
    const [title, setTitle] = useState('Timer');
    const [isLight, setIsligth] = useState('false');

    // useEffect(()=>{
    //     return ()=>{};
    // },[]);

    const isLightHandle = ()=>{
        setIsligth(!isLight);
    };

    return (
        <div className = 'timer-parent'>
            <Title title = {title} />
            <Timer isLight = {isLight} isLightHandle = {isLightHandle} />
        </div>
    );
}

export default App;