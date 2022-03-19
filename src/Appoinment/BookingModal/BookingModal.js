import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

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

const BookingModal = ({ open, handleClose, time, value }) => {
    const handleBookingSubmit = e => {
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
                            label="Your name"
                            variant="standard"
                            type="text"
                            name="name"
                            required
                        />
                        <TextField id="standard-basic"
                            label="Your email"
                            variant="standard"
                            type="email"
                            name="email"
                            required
                        />
                        <TextField id="standard-basic"
                            label="Your contact number"
                            variant="standard"
                            type="number"
                            name="number"
                            required
                        />
                        <TextField sx={{marginTop: '12px'}} id="standard-basic"
                            label="Time"
                            variant="standard"
                            defaultValue={time}
                            disabled
                        />
                        <br />
                        <Button sx={{marginTop: '12px'}} variant="contained" type="submit">Submit</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingModal;