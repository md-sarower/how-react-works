import React from 'react';
import Dial from '../dial/Dial';

const Display = (props) => {
    return (
        <div style={{border: '2px solid green', margin: '12px', borderRadius: '15px'}}>
            <h2>Name: {props.name}</h2>
            <p>So far steps today: {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;