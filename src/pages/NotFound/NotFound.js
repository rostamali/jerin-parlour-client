import React from 'react';
import notFound from '../../images/404.svg';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import './NotFound.css';

const NotFound = () => {

    return (
        <>
            <Header></Header>
            <div id="not-found">
                <div className="container text-center py-4">
                    <img src={notFound} alt="" className="not-found__thumbnail" />    
                </div>    
            </div>
            <Footer></Footer>
        </>
    );
};

export default NotFound;