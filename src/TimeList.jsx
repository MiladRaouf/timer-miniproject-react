import TimeItem from "./TimeItem";

const TimeList = (props) => {
    return (
        <div className="time-list-box">
            {props.children.map((time) => (
                <TimeItem key={Math.random()}>
                    {time}
                </TimeItem>
            ))}
        </div>
    );
};


export default TimeList;