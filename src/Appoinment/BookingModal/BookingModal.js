import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ open, handleClose, time, name, value }) => {
    const { user } = useAuth();
    
    const initialInfo = {patientName: user.displayName, email: user.email, phone: ''};
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo);
        console.log(newInfo)
    }

    const handleBookingSubmit = e => {
        const appoinment = {
            ...bookingInfo,
            serviceName: name,
            time,
            value: value
        }
        fetch('http://localhost:5000/appoinment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('successfully added')
                handleClose();
            }
        })
        e.preventDefault()
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleBookingSubmit}>

                        <TextField id="standard-basic"
                            defaultValue={value}
                            variant="standard"
                            disabled
                        />
                        <TextField id="standard-basic"
                            defaultValue={user.displayName}
                            variant="standard"
                            type="text"
                            name="patientName"
                            onBlur={handleOnBlur}
                        />
                        <TextField id="standard-basic"
                            defaultValue={user.email}
                            variant="standard"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                        />
                        <TextField id="standard-basic"
                            label="Your contact number"
                            variant="standard"
                            type="number"
                            name="phone"
                            onBlur={handleOnBlur}
                            required
                        />
                        <TextField sx={{ marginTop: '12px' }} id="standard-basic"
                            label="Time"
                            variant="standard"
                            defaultValue={time}
                            disabled
                        />
                        <br />
                        <Button sx={{ marginTop: '12px' }} variant="contained" type="submit">Submit</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingModal;