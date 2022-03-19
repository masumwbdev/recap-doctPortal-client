import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Booking = ({ bookappoin }) => {
    const { name, time, space } = bookappoin;
    console.log(bookappoin)
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{time}</p>
                            <p>{space}</p>
                            <button className='btn btn-sm btn-dark'>Book Appoinment</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;