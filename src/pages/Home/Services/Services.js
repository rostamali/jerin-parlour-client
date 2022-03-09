import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ServiceModal from '../../../shared/ServiceModal/ServiceModal';
import { Spinner } from 'react-bootstrap';

const Services = () => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const [services, setServices] = useState([]);
    const [serviceLoading, setServiceLoading] = useState(true);
    useEffect(()=>{
        // fetch('./services.json')
        fetch('https://stormy-crag-31383.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setServiceLoading(false)
        });
    }, [])

    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <>
            {
                serviceLoading ? 
                <div className="spinner__loading">
                    <div className="container">
                        <Spinner animation="border" className='brand__spinner' />
                    </div>    
                </div>
                :
                <div id="services">
                    <div className="container">
                        <div className="section__header">
                            <h2 className="section__title">Our Awesome <span className="text__highlight">Services</span></h2>
                        </div>
                        <div className="service__slider">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1100: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                }}
                                className="mySwiper"
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current,
                                }}
                            >
                                {
                                    services.map(service => <SwiperSlide key={service.id}>
                                        <div className="service__wrapper">
                                            <img src={service.image} alt={service.title} className="service__icon" />
                                            <h3 className="service__title">{service.title}</h3>
                                            <h4 className="service__price">${service.price}</h4>
                                            <p className="service__subtitle">{service.subtitle}</p>
                                            <button onClick={() => [setModalShow(true), setModalData(service)]} className='book__now--btn'>Book Now</button>
                                        </div>  
                                    </SwiperSlide> )
                                }
                            </Swiper>        
                        </div>
                        <div className="section__footer">
                            <button ref={navigationPrevRef} className="swiper__arrow--prev"><FaArrowLeft/></button>
                            <button ref={navigationNextRef} className="swiper__arrow--next"><FaArrowRight/></button>   
                        </div>
                    </div>
                </div>
            }
            <ServiceModal 
                service={modalData}
                show={modalShow}
                onHide={() => setModalShow(false)}
                ></ServiceModal>
        </>
    );
};

export default Services;