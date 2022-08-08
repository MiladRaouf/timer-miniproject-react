const TimeItem = (props) => {
    return (
        <div className="time-item-box">
            <span className="time-item">
                {props.children}
            </span>
        </div>
    );
};


export default TimeItem;