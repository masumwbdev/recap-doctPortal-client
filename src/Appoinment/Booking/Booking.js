import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ bookappoin, value }) => {
    const { name, time, space } = bookappoin;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{time}</p>
                        <p>{space}</p>
                        <button onClick={handleOpen} className='btn btn-sm btn-dark'>Book Appoinment</button>
                    </div>  
                    
                </div>
            </div>
            <BookingModal
                open={open}
                handleClose={handleClose}
                time={time}
                value={value}
            />
        </div>
    );
};

export default Booking;