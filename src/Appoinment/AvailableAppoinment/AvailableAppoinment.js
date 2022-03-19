import React from 'react';
import Booking from '../Booking/Booking';
const bookingAppoin = [
    {
        id: 1,
        name: 'Lorem Ipsum',
        time: '07.00 PM - 08.00 PM',
        space: 12
    },
    {
        id: 2,
        name: 'Lorem Ipsum',
        time: '05.00 PM - 08.00 PM',
        space: 10
    },
    {
        id: 3,
        name: 'Lorem Ipsum',
        time: '03.00 PM - 06.00 PM',
        space: 15
    },
    {
        id: 4,
        name: 'Lorem Ipsum',
        time: '11.00 PM - 12.00 AM',
        space: 22
    },
    {
        id: 5,
        name: 'Lorem Ipsum',
        time: '06.00 PM - 08.00 PM',
        space: 20
    },
    {
        id: 6,
        name: 'Lorem Ipsum',
        time: '07.00 PM - 08.00 PM',
        space: 16
    }
]

const AvailableAppoinment = ({ value }) => {

    return (
        <div>
            <h1 className="text-center mb-4">{value.toDateString()}</h1>
            <div class="container-fluid mx-auto row row-cols-1 row-cols-md-3 g-4">
                {
                    bookingAppoin.map(bookappoin => <Booking
                        bookappoin={bookappoin}
                        value={value}
                    ></Booking>)
                }
            </div>
        </div>
    );
};

export default AvailableAppoinment;