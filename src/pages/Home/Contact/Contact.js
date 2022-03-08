import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";

const Contact = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div id="contact">
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">Let us handle your <br />project, professionally.</h2>
                    </div>

                    <div className="contact__form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form__gird">
                                <div className="input__group">
                                    <input required type="text" {...register("firstName")} placeholder="First Name" />    
                                </div>    
                                <div className="input__group">
                                    <input required type="text" {...register("lastName")} placeholder="Last Name" />
                                </div>    
                            </div>
                            <div className="form__gird">
                                <div className="input__group">
                                    <input required type="email" {...register("email")} placeholder="Email Address" />   
                                </div>    
                                <div className="input__group">
                                    <input required type="tel" {...register("phoneNumber")} placeholder="Phone Number" />
                                </div>    
                            </div>
                            <div className="form__full">
                                <textarea cols="30" rows="10" {...register("message")} placeholder="Your Message"></textarea>    
                            </div>
                            <div className="form__btn text-center">
                            <input type="submit" className='brand__btn' value="Send Message" />    
                            </div>
                        </form>    
                    </div>
                </div>    
            </div>
        </>
    );
};

export default Contact;