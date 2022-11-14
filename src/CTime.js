import React from 'react';

let getTime = new Date().toLocaleTimeString();

const Time = () => {
    const [getTime, currentTime] = useState(getTime);
    function updateTime() {
        currentTime(getTime);
    }
    return (
        <div className='container'>
            <h1>getTime</h1>
            <button onClick={updateTime}>CurrentTime</button>
        </div>
    );

}

export default Time;