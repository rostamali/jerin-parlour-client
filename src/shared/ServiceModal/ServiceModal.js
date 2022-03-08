import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ServiceModal.css';
import { FaTimes } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import Swal from 'sweetalert2';
import {MyContext} from '../../App';

const ServiceModal = (props) => {

    const {title, image, price} = props.service;
    const { newUser } = useContext(MyContext);
    const { register, handleSubmit, reset } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState({});

    const options = [
        { value: '12:00', label: '12:00 PM', disabled: false },
        { value: '01:00', label: '01:00 PM', disabled: false },
        { value: '02:00', label: '02:00 PM', disabled: true },
        { value: '04:00', label: '04:00 PM', disabled: false },
        { value: '05:00', label: '05:00 PM', disabled: false },
        { value: '06:00', label: '06:00 PM', disabled: false }
    ]

    const onSubmit = data =>{
        
        data.bookingDate = startDate;
        data.bookingTime = startTime.label;
        data.bookingTimeValue = startTime.value;
        data.bookingStatus = 'pending';
        data.paymentStatus = 'unpaid';
        data.bookingService = props.service
        
        fetch('https://stormy-crag-31383.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                reset();
                props.onHide();
                Swal.fire({

                    icon: 'success',
                    title: 'Your Booking Has Been Sent For Approval',
                    showConfirmButton: false,
                    timer: 2500
                })
            }
        }); 
    };


    return (
        <>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Body className='service__modal'>
                    {
                        newUser.email ?
                        <div className="booking__form">
                            <div className="row">
                                <div className="col-md-6 col-6">
                                    <img src={image} alt={title} className="service__icon" />
                                </div>
                                <div className="col-md-6 col-6 text-end">
                                    <button className='close__btn' onClick={props.onHide}><FaTimes/></button>    
                                </div>    
                            </div>
                            <div className="row my-3">
                                <div className="col-md-6 col-8">
                                    <h3 className="service__title">{title}</h3>
                                </div>
                                <div className="col-md-6 col-4 text-end">
                                    <h4 className="service__price">${price}</h4>    
                                </div>    
                            </div>
                            <div className="booking__form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form__gird">
                                        <div className="input__group">
                                            <input required type="text" readOnly value={newUser.displayName} {...register("fullName")} placeholder="Full Name" />    
                                        </div>    
                                        <div className="input__group">
                                            <input required type="email" readOnly value={newUser.email} {...register("email")} placeholder="Email Address" /> 
                                        </div>    
                                    </div>
                                    <div className="form__gird">
                                        <div className="input__group">
                                            <DatePicker 
                                                selected={startDate}
                                                required
                                                dateFormat="dd-MM-yyyy"
                                                placeholderText="Select Date" 
                                                onChange={(date) => setStartDate(date)} 
                                            />  
                                        </div>    
                                        <div className="select__group">
                                            <Select placeholder="Select Time" 
                                                options={options} 
                                                isOptionDisabled={(option) => option.disabled}
                                                onChange={(data)=>setStartTime(data)}
                                            /> 
                                        </div>       
                                    </div>
                                    <div className="form__btn text-center">
                                    <input type="submit" className='brand__btn' value="Book Now" />    
                                    </div>
                                </form>       
                            </div>
                        </div>
                        :
                        <div className="booking__form--login">
                            <div className="row">
                                <div className="col-12 text-end">
                                    <button className='close__btn' onClick={props.onHide}><FaTimes/></button>     
                                </div>
                                <div className="text-center">
                                    <h5 className='py-3'>Please Login First</h5>
                                    <a href="/login" class="modal__login--btn">Login</a>
                                </div>
                            </div>    
                        </div>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ServiceModal;