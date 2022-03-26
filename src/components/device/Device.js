import React from 'react';
import DeviceDetails from '../device-details/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h2>I have: {props.name}</h2>
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;