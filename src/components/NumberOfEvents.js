import React from "react";


const NumberOfEvents = ( { setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(value);

        let errorText;
        if  (isNaN(value)) {
            errorText ="Please enter a number"
        } else if (value <=0) {
            errorText ="Number must be at least 1"

        } else {
            errorText =""
        }
        setErrorAlert(errorText);

    }
    
    return (
        <div id="number-of-events">
            <b>Number of Events: </b>
            <input 
            type= "text"
            defaultValue="32"
            className="textbox"
            placeholder="Enter a number"
            onChange={handleInputChanged}
            />
        </div>
    )
}

export default NumberOfEvents;