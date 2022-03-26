import React, { useEffect, useState } from 'react';
import Display from '../display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    useEffect( () => {
        console.log(steps)
    }, [steps])
    return (
        <div style={{border: '2px solid purple', margin: '35px'}}>
            <h2>This is my smart Watch</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>De Dour.......</button>
            <Display name="Garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;