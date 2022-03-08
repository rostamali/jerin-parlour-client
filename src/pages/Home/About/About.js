import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import aboutThaumb from '../../../images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png';
import './About.css';

const About = () => {

    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="about__thumbnail">
                                <img src={aboutThaumb} alt="About thumbnail" />    
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about__text">
                                <h2 className="section__title">
                                    Let us handle your <br />screen <span className="text__highlight">Professionally</span>.    
                                </h2>  
                                <p className="banner__subtitle">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>  
                            </div>  
                            <div className="row"> 
                                <div className="col-md-6 col-6">
                                    <div className="countdown__box">
                                        <CountUp 
                                            end={12} 
                                            redraw={true}
                                            start={0}
                                            duration={1.34}
                                            suffix="+"
                                        >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <div className='countdown__number' ref={countUpRef}></div>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <h5 className="countdown__title">Happy Customer</h5>
                                    </div>    
                                </div>
                                <div className="col-md-6 col-6">
                                    <div className="countdown__box">
                                        <CountUp 
                                            end={12} 
                                            redraw={true}
                                            start={0}
                                            duration={1.34}
                                            suffix="+"
                                        >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <div className='countdown__number' ref={countUpRef}></div>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <h5 className="countdown__title">Total Service</h5>
                                    </div>    
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;