import { useContext } from "react";
import { timerContext } from "./TimerContext";

const TimeItem = (props) => {
    const context = useContext(timerContext);

    const removeTimeItem = (e) => {
        let newTimeArr = context.timeArr.filter(time => time !== e.target.innerHTML);
        context.setTimeArr(newTimeArr);
    };

    return (
        <div className="time-item-box">
            <span onClick={removeTimeItem} className="time-item">
                {props.children}
            </span>
        </div>
    );
};


export default TimeItem;