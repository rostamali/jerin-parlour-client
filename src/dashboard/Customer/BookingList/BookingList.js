import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../App';
import './BookingList.css';

const BookingList = () => {

    const { newUser } = useContext(MyContext);
    const [bookingList, setBookingList] = useState([]);

    useEffect(()=>{
        const URL = `http://localhost:5000/booking/${newUser.email}`;
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            setBookingList(data)
        });
    }, [newUser.email]);


    return (
        <>
            <div id="booking__list">
                <div className="row gy-4">
                    {
                        bookingList.map(booking => <div className="col-lg-4 col-md-6 col-12">
                            <div className="booking__item">
                                <div className="booking__item--header">
                                    <img src={booking.bookingService.image} alt="booking__item--thumbnail" className="booking__item--thumbnail" /> 
                                    <div className="booking__list--action">
                                        <span className={`booking__item--status ${booking.bookingStatus}`}>{booking.bookingStatus}</span>  
                                        {/* <button className='pay__btn'>Pay</button>   */}
                                    </div>   
                                </div>
                                <h3 className="service__title">{booking.bookingService.title}</h3>
                                <p className="service__subtitle">{booking.bookingService.subtitle}</p>
                            </div>    
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default BookingList;