import React from 'react';
import { useState } from 'react';


const Time = () => {
    let getTime = new Date().toLocaleTimeString();
    let [time, currentTime] = useState(getTime);
    function updateTime() {
        getTime = new Date().toLocaleTimeString();
        currentTime(getTime);
    }
    // let t = setInterval(updateTime, 1000);
    function stopTime() {
        clearTimeout(updateTime, 50);
    }
    return (
        <div className='container'>
            <h1>{time} </h1>
            <button onClick={updateTime} >CurrentTime</button>
            <button onClick={stopTime} >STOP</button>
        </div>
    );

}
export default Time;