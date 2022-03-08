import React from 'react';
import bannerThumb from '../../../images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';
import './Banner.css';

const Banner = () => {

    return (
        <>
            <div id="banner">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 col-12">
                            <div className="banner__text">
                                <h1 className="banner__title">
                                    BEAUTY SALON <br />FOR EVERY WOMEN    
                                </h1>
                                <p className="banner__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                                <button className="brand__btn">Get an Appointment</button>
                            </div>    
                        </div>    
                        <div className="col-lg-6 col-12">
                            <div className="banner__thumbnail">
                                <img src={bannerThumb} alt="Banner thumbnail" />    
                            </div>
                        </div>    
                    </div>    
                </div>
            </div>
        </>
    );
};

export default Banner;