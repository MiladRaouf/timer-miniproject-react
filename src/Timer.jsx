import React, { Fragment, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { timerContext } from './TimerContext';

let interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            runTime: false,
        }
    }

    static contextType = timerContext;

    runTimer = () => {
        if (this.state.runTime === false) {
            this.setState({
                runTime: true
            });

            interval = setInterval(() => {
                this.setState({
                    second: this.state.second + 1
                });

                if (this.state.second === 60) {
                    this.setState({
                        minute: this.state.minute + 1,
                        second: 0
                    });
                }

                if (this.state.minute === 60) {
                    this.setState({
                        hour: this.state.hour + 1,
                        minute: 0
                    });
                }
            }, 1000);
        }
    };

    stopTimer = () => {
        this.setState({
            runTime: false
        });
        clearInterval(interval);
    };

    resetTimer = () => {
        this.stopTimer();

        this.setState({
            hour: 0,
            minute: 0,
            second: 0
        });
    };

    handleSaveTime = () => {
        let nowTime = document.querySelector('.timer').innerHTML;

        this.context.setTimeArr([...this.context.timeArr, nowTime]);
    };

    render() {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;

        return (
            <Fragment>
                <div className='timer-box'>
                    <h1 className='timer' onClick={this.handleSaveTime}>{`${h < 10 ? '0' + h : h} : ${m < 10 ? '0' + m : m} : ${s < 10 ? '0' + s : s}`}</h1>
                </div>
                <div className='button-box'>
                    <button className='start' onClick={this.runTimer}>Start</button>
                    <button className='stop' onClick={this.stopTimer}>Stop</button>
                    <button className='reset' onClick={this.resetTimer}>Reset</button>
                </div>
            </Fragment>
        );
    }
}


// const Timer = (props) => {
//     const [hour, setHour] = useState(0);
//     const [minute, setMinute] = useState(0);
//     const [second, setSecond] = useState(0);
//     const [runTime, setRunTime] = useState(false);
//     const [m, setM] = useState(0);

//     const context = useContext(timerContext);

//     let changeBackgroundClassName = props.isLight ? 'change-background dark' : 'change-background light';


//     const runTimer = () => {
//         if (runTime === false) {
//             setRunTime(true);

//             interval = setInterval(() => {
//                 setSecond(second + 1);

//                 if (second === 60) {
//                     setMinute(minute + 1);
//                     setSecond(0);
//                 }

//                 if (minute === 60) {
//                     setHour(hour + 1);
//                     setMinute(0);
//                 }
//             }, 1000);
//         }
//     };

//     const stopTimer = () => {
//         setRunTime(false);
//         clearInterval(interval);
//     };

//     const resetTimer = () => {
//         stopTimer();
//         setHour(0);
//         setMinute(0);
//         setSecond(0);
//     };

//     const handleSaveTime = () => {
//         let nowTime = document.querySelector('.timer').innerHTML;

//         context.setTimeArr([...context.timeArr, nowTime]);
//     };

//     return (
//         <div className='timer-box'>
//             <h1 className='timer' onClick={handleSaveTime}>{`${hour < 10 ? '0' + hour : hour} : ${minute < 10 ? '0' + minute : minute} : ${second < 10 ? '0' + second : second}`}</h1>
//             <div className='button-box'>
//                 <button className={changeBackgroundClassName} onClick={props.isLightHandle}>Background Change</button>
//                 <button className='start' onClick={runTimer}>Start</button>
//                 <button className='stop' onClick={stopTimer}>Stop</button>
//                 <button className='reset' onClick={resetTimer}>Reset</button>
//             </div>
//         </div>
//     );
// };


export default Timer;