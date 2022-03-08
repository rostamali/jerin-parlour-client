import React from 'react';
import img1 from '../../../images/icon/Group 1373.png';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiMessageRoundedEdit } from 'react-icons/bi';
import './Manage.css';

const Manage = () => {

    return (
        <>
            <div id="manage__services">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="booking__item">
                            <div className="booking__item--header">
                                <img src={img1} alt="booking__item--thumbnail" className="booking__item--thumbnail" /> 
                                <div className="service__action--btn">
                                    <button className='btn__edit'><BiMessageRoundedEdit/></button>     
                                    <button className='btn__delete'><AiOutlineDelete/></button>
                                </div>  
                            </div>
                            <h3 className="service__title">Anti Age Face Treatment</h3>
                            <p className="service__subtitle">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>
                        </div>    
                    </div>     
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="booking__item">
                            <div className="booking__item--header">
                                <img src={img1} alt="booking__item--thumbnail" className="booking__item--thumbnail" /> 
                                <div className="service__action--btn">
                                    <button className='btn__edit'><BiMessageRoundedEdit/></button>     
                                    <button className='btn__delete'><AiOutlineDelete/></button>
                                </div>  
                            </div>
                            <h3 className="service__title">Anti Age Face Treatment</h3>
                            <p className="service__subtitle">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>
                        </div>    
                    </div>     
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="booking__item">
                            <div className="booking__item--header">
                                <img src={img1} alt="booking__item--thumbnail" className="booking__item--thumbnail" /> 
                                <div className="service__action--btn">
                                    <button className='btn__edit'><BiMessageRoundedEdit/></button>     
                                    <button className='btn__delete'><AiOutlineDelete/></button>
                                </div>  
                            </div>
                            <h3 className="service__title">Anti Age Face Treatment</h3>
                            <p className="service__subtitle">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>
                        </div>    
                    </div>     
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="booking__item">
                            <div className="booking__item--header">
                                <img src={img1} alt="booking__item--thumbnail" className="booking__item--thumbnail" /> 
                                <div className="service__action--btn">
                                    <button className='btn__edit'><BiMessageRoundedEdit/></button>     
                                    <button className='btn__delete'><AiOutlineDelete/></button>
                                </div>  
                            </div>
                            <h3 className="service__title">Anti Age Face Treatment</h3>
                            <p className="service__subtitle">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>
                        </div>    
                    </div>     
                </div>
            </div>
        </>
    );
};

export default Manage;