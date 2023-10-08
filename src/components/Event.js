import { useState } from 'react';

const Event = ({ Event }) => {
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <li>
            <div className="Event">
                <h2>{Event.summary}</h2>
                {/* <div className="summary">{event.summary}</div> */}
                <div className="location">{Event.location}</div>
                <div className="dateTime">{Event.start.dateTime}</div>
                {showDetails && <div className="description">{Event.description}</div>}
                <button className="details-btn" onClick={toggleDetails}>
                    {showDetails ? "Hide Details" : "Show Details"}
                </button>
            </div>
        </li>
    );
};

export default Event;
