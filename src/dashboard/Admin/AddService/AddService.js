import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
import { RiUploadCloud2Line } from 'react-icons/ri';
import img1 from "../../../images/icon/Group 1374.png";

const AddService = () => {

    const { register, handleSubmit } = useForm();
    const [preview, setPreview] = useState(img1);
    const onChange = data => {
        setPreview(URL.createObjectURL(data.serviceImage[0]));
    };

    return (
        <>
            <div id="new__service">
                <form onChange={handleSubmit(onChange)} id="new-service">
                    <div className="form__grid">
                        <div className="form__group">
                            <label className='form__label' htmlFor="serviceTitle">Service Title</label>
                            <input required id='serviceTitle' type="text" {...register("serviceTitle")} placeholder="Enter title" />
                        </div>    
                        <div className="form__group">
                            <label className='form__label' htmlFor="servicePrice">Price</label>
                            <input required id='servicePrice' type="number" min={1} {...register("servicePrice")} placeholder="Enter price" />
                        </div>    
                    </div>
                    <div className="form__grid">
                        <div className="form__group">
                            <label className='form__label' htmlFor="description">Description</label>
                            <textarea required id="description" cols="30" rows="10" {...register("serviceDescription")} placeholder='Description'></textarea>
                        </div>    
                        <div className="form__group">
                            <div className="image__form--group">
                                <label className='form__label image__label' htmlFor="serviceImage">
                                    <span>Image</span>
                                    <div>
                                        <span className="upload__icon"><RiUploadCloud2Line/> Upload image</span> 
                                    </div>
                                </label>
                                <input required id='serviceImage' accept='image/*' type="file" {...register("serviceImage")}/>
                                <div className="preview__img">
                                    <img src={preview} alt="Preview" />    
                                </div>    
                            </div>
                        </div>    
                    </div>
                </form>    
            </div>
            <div className="new__service--footer">
                <input type="submit" className='brand__btn' form="new-service" value="Submit" />    
            </div>
        </>
    );
};

export default AddService;