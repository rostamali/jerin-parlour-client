import React from 'react';
import { useForm } from 'react-hook-form';
import './Review.css';

const Review = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div id="review">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input__group"> 
                        <input required type="text" {...register("fullName")} placeholder="Your Name" />
                    </div>
                    <div className="input__group"> 
                        <input required type="text" {...register("designation")} placeholder="Company's name, Designation" />
                    </div>
                    <div className="form__full">
                        <textarea cols="30" rows="10" {...register("Description")} placeholder='Description'></textarea>
                    </div>
                    <input type="submit" className='brand__btn' value="Submit" />
                </form>    
            </div>
        </>
    );
};

export default Review;