import React from 'react';
import { useState } from 'react';


const Time = () => {
    let getTime = new Date().toLocaleTimeString();
    let [time, currentTime] = useState(getTime);
    function updateTime() {
        getTime = new Date().toLocaleTimeString();
        currentTime(getTime);
    }
    return (
        <div className='container'>
            <h1>{time} </h1>
            <button onClick={updateTime}>CurrentTime</button>
        </div>
    );

}
export default Time;