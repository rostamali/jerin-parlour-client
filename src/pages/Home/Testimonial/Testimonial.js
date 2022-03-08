import React from 'react';
import Rating from 'react-rating';
import author1 from '../../../images/Ellipse 90.png';
import author2 from '../../../images/Ellipse 91.png';
import author3 from '../../../images/Ellipse 92.png';
import './Testimonial.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';

const Testimonial = () => {


    return (
        <>
            <div id="testimonial">
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">Testimonials</h2>
                    </div>
                    <div className="testimonial__slider">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1100: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            }}
                            className="mySwiper"
                            modules={[Navigation, Pagination]}
                        >
                            <SwiperSlide>
                                <div className="testimonial__wrapper">
                                    <div className="author__details">
                                        <div className="author__thumbnail">
                                            <img src={author1} alt="Author thumbnail" />    
                                        </div> 
                                        <div className="author__info">
                                            <h4 className="author__name">Miriam Barron</h4>
                                            <p className="author__title">CEO, Manpol</p>
                                        </div>   
                                    </div>
                                    <p className="author__testimonial">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat     
                                    </p>
                                    <div className="testimonial__rating">
                                        <Rating
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                        initialRating={5}
                                        readonly
                                        className='rating__icon'
                                        />    
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial__wrapper">
                                    <div className="author__details">
                                        <div className="author__thumbnail">
                                            <img src={author2} alt="Author thumbnail" />    
                                        </div> 
                                        <div className="author__info">
                                            <h4 className="author__name">Miriam Barron</h4>
                                            <p className="author__title">CEO, Manpol</p>
                                        </div>   
                                    </div>
                                    <p className="author__testimonial">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat     
                                    </p>
                                    <div className="testimonial__rating">
                                        <Rating
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                        initialRating={5}
                                        readonly
                                        className='rating__icon'
                                        />    
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial__wrapper">
                                    <div className="author__details">
                                        <div className="author__thumbnail">
                                            <img src={author3} alt="Author thumbnail" />    
                                        </div> 
                                        <div className="author__info">
                                            <h4 className="author__name">Miriam Barron</h4>
                                            <p className="author__title">CEO, Manpol</p>
                                        </div>   
                                    </div>
                                    <p className="author__testimonial">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat     
                                    </p>
                                    <div className="testimonial__rating">
                                        <Rating
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                        initialRating={5}
                                        readonly
                                        className='rating__icon'
                                        />    
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial__wrapper">
                                    <div className="author__details">
                                        <div className="author__thumbnail">
                                            <img src={author1} alt="Author thumbnail" />    
                                        </div> 
                                        <div className="author__info">
                                            <h4 className="author__name">Miriam Barron</h4>
                                            <p className="author__title">CEO, Manpol</p>
                                        </div>   
                                    </div>
                                    <p className="author__testimonial">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat     
                                    </p>
                                    <div className="testimonial__rating">
                                        <Rating
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                        initialRating={5}
                                        readonly
                                        className='rating__icon'
                                        />    
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial__wrapper">
                                    <div className="author__details">
                                        <div className="author__thumbnail">
                                            <img src={author2} alt="Author thumbnail" />    
                                        </div> 
                                        <div className="author__info">
                                            <h4 className="author__name">Miriam Barron</h4>
                                            <p className="author__title">CEO, Manpol</p>
                                        </div>   
                                    </div>
                                    <p className="author__testimonial">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat     
                                    </p>
                                    <div className="testimonial__rating">
                                        <Rating
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                        initialRating={5}
                                        readonly
                                        className='rating__icon'
                                        />    
                                    </div>
                                </div>
                            </SwiperSlide>  
                        </Swiper>    
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;