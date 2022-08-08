import React from 'react';
import ReactDOM from 'react-dom';
import TimeList from "./TimeList";

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

    handleSaveTime = ()=>{
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
        let nowTime = `${h < 10 ? '0' + h : h} : ${m < 10 ? '0' + m : m} : ${s < 10 ? '0' + s : s}`;

        this.props.setTimeArr([...this.props.timeArr, nowTime]);
    };

    render() {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
        let changeBackgroundClassName = this.props.isLight ? 'change-background dark' : 'change-background light';

        return (
            <div className='timer-box'>
                <h1 className='timer' onClick={this.handleSaveTime}>{`${h < 10 ? '0' + h : h} : ${m < 10 ? '0' + m : m} : ${s < 10 ? '0' + s : s}`}</h1>
                <div className='button-box'>
                    <button className={changeBackgroundClassName} onClick={this.props.isLightHandle}>Background Change</button>
                    <button className='start' onClick={this.runTimer}>Start</button>
                    <button className='stop' onClick={this.stopTimer}>Stop</button>
                    <button className='reset' onClick={this.resetTimer}>Reset</button>
                </div>

                <TimeList>
                    {this.props.timeArr}
                </TimeList>
            </div>
        );
    }
}

export default Timer;