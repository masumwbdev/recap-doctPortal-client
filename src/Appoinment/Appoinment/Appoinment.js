import React from 'react';
import Nav from '../../Shared/Nav/Nav';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appoinment = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <div>
            <Nav />
            <h1>Appoinment</h1>
            <AppoinmentHeader value={value} setValue={setValue} />
            <AvailableAppoinment value={value} />
        </div>
    );
};

export default Appoinment;