import React from 'react';
import ReactDOM from 'react-dom';

let interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 60
        }
    }

    runTimer = () => {
        interval = setInterval(() => {
            this.setState({
                time: Number(this.state.time) - 1
            });
        }, 1000);
    };

    stopTimer = () => {
        clearInterval(interval);
    };

    componentDidMount() {
        this.runTimer();
    }

    componentDidUpdate() {
        if (this.state.time == 0) {
            this.stopTimer();
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.time}</h1>
                <div className='button-box'>
                    <button onClick={this.runTimer}>Start</button>
                    <button onClick={this.stopTimer}>Stop</button>
                </div>
            </div>
        );
    }
}

export default Timer;