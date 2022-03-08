import React from 'react';
import './Footer.css';
import { GrFacebook, GrLinkedin, GrYoutube } from 'react-icons/gr';
import { RiInstagramFill, RiMapPin2Fill } from 'react-icons/ri';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';


const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="footer__icon-list">
                                <div className="footer__icon-list--grid">
                                    <div className="footer__icon">
                                        <RiMapPin2Fill/>
                                    </div>
                                    <span className="footer__icon-list--text">H#000 (0th Floor), Road #00,
                                    New DOHS, Mohakhali, Dhaka, Bangladesh</span>
                                </div>    
                                <div className="footer__icon-list--grid">
                                    <div className="footer__icon">
                                        <BsFillPhoneVibrateFill/>
                                    </div>
                                    <span className="footer__icon-list--text">+880 1321 070 987</span>
                                </div>    
                                <div className="footer__icon-list--grid">
                                    <div className="footer__icon">
                                        <MdOutlineAlternateEmail/>
                                    </div>
                                    <span className="footer__icon-list--text">example@gmail.com</span>
                                </div>    
                            </div>  
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            <h3 className="footer__title">Company</h3>  
                            <div className="footer__nav">
                                <a href="/" className="footer__link">About</a>  
                                <a href="/" className="footer__link">Project</a>  
                                <a href="/" className="footer__link">Our Team</a>  
                                <a href="/" className="footer__link">Terms Conditions</a>     
                            </div> 
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            <h3 className="footer__title">Quick Links</h3>  
                            <div className="footer__nav">
                                <a href="/" className="footer__link">Quick Links</a>  
                                <a href="/" className="footer__link">Rentals</a>  
                                <a href="/" className="footer__link">Contact</a>  
                                <a href="/" className="footer__link">Our blog</a>     
                            </div>  
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <h3 className="footer__title">About us</h3> 
                            <p className="footer__subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
                            </p> 
                            <div className="footer__icon--wrapper">
                                <GrFacebook className='footer__icon--link'/>
                                <RiInstagramFill className='footer__icon--link'/>
                                <GrLinkedin className='footer__icon--link'/>
                                <GrYoutube className='footer__icon--link'/>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;