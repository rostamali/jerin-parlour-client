import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import dashboardLogo from '../../images/logo.png';
import { BiCommentDots } from 'react-icons/bi';
import { GiBeachBag } from 'react-icons/gi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import './DashboardMenu.css';
import {MyContext} from '../../App';

const DashboardMenu = () => {

    const { newUser } = useContext(MyContext);
    const checkAdmin = newUser.email === 'rostamsardar448@gmail.com';

    return (
        <>
            <div className="dashboard__menu--wrapper">
                <a href="/">
                    <img src={dashboardLogo} alt="Brand logo" className="navbar__logo" />    
                </a>
                <div className="dashboard__menu"> 
                    {
                        !checkAdmin && 
                        <NavLink to="/dashboard/booking-list" className="dashboard__menu--link">
                            <GiBeachBag/> Booking List
                        </NavLink>  
                    }   
                    {
                        !checkAdmin && 
                        <NavLink to="/dashboard/review" className="dashboard__menu--link">
                            <BiCommentDots/> Review
                        </NavLink>  
                    }   
                    {
                        checkAdmin && 
                        <NavLink to="/dashboard/order-list" className="dashboard__menu--link">
                            <AiOutlineUnorderedList/> Order List
                        </NavLink> 
                    }    
                    {
                        checkAdmin && 
                        <NavLink to="/dashboard/new-service" className="dashboard__menu--link">
                            <AiOutlinePlus/> Add Service
                        </NavLink> 
                    }    
                    {
                        checkAdmin && 
                        <NavLink to="/dashboard/manage-service" className="dashboard__menu--link">
                            <BsGrid/> Manage Services
                        </NavLink> 
                    }    
                       
                        
                        
                </div>
            </div>
        </>
    );
};

export default DashboardMenu;