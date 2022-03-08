import React from 'react';
import Footer from '../../../shared/Footer/Footer';
import Header from '../../../shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;