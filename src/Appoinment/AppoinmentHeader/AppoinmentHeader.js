import React from 'react';
import Calender from '../../Shared/Calender/Calender';

const AppoinmentHeader = ({value, setValue}) => {
    
    return (
        <div>
            {/* {value} */}
            <Calender value={value} setValue={setValue} />
        </div>
    );
};

export default AppoinmentHeader;