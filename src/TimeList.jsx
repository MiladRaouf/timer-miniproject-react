import { useContext } from "react";
import { timerContext } from "./TimerContext";
import TimeItem from "./TimeItem";

const TimeList = (props) => {
    const context = useContext(timerContext);

    return (
        <div className="time-list-box">
            {context.timeArr.map((time) => (
                <TimeItem key={Math.random()}>
                    {time}
                </TimeItem>
            ))}
        </div>
    );
};


export default TimeList;