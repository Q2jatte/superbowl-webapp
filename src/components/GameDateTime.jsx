function GameDateTime(props) {

    const dateStr = props.dateString;
    const dateObj = new Date(dateStr);
    const dayOfMonth = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();    

    return (
        <div>
        {props.started ? 'En cours' : (
            <span>
                {dayOfMonth}-{month}<br/>
                {hours}:{minutes}
            </span>)}
        </div>

    );
}

export default GameDateTime;