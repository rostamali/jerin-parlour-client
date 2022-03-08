import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import brandLogo from '../../images/logo.png';
import './Header.css';
import {MyContext} from '../../App';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {

    const [stickyNav, setStickyNav] = useState(false);
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 50){
            setStickyNav(true);
        }else{
            setStickyNav(false);
        }
    });

    const { newUser } = useContext(MyContext);
    const { handleSignoutUser } = useFirebase();

    const checkAdmin = newUser.email === 'rostamsardar448@gmail.com';

    return (
        <>
            <div id="header" className={stickyNav ? 'stickyNav':''}>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={brandLogo} alt="Brand logo" className="navbar__logo" />    
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span className="bredcrumb__icon"></span>    
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <a href="/" className="navbar__link">Home</a>
                                <a href="/#services" className="navbar__link">Services</a>
                                <a href="/#testimonial" className="navbar__link">Testimonials</a>
                                <a href="/#contact" className="navbar__link">Contact Us</a>
                                {
                                    !checkAdmin && 
                                    <a href="/dashboard/booking-list" className="navbar__link">Dashboard</a>
                                }
                                {
                                    checkAdmin && 
                                    <a href="/dashboard/order-list" className="navbar__link">Dashboard</a>
                                }
                                {
                                    newUser.email ? 
                                    <button onClick={handleSignoutUser} className="logout__btn">Logout</button>
                                    :
                                    <a href="/login" className="navbar__link login__btn">Login</a>
                                }
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;