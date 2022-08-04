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

    componentDidMount() {
        interval = setInterval(() => {
            this.setState({
                time: Number(this.state.time)-1
            });
        },1000)
    }

    componentDidUpdate() {
        if (this.state.time == 0) {
            clearInterval(interval);
        }
    }

    render() {
        return (
            <h1>{this.state.time}</h1>
        );
    }
}


export default Timer;